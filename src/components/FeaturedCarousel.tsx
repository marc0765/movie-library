import { useEffect, useState } from 'react';
import { Movie } from '../models/Movie';
import { useWatchlist } from '../context/WatchlistContext';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
import './FeaturedCarousel.css';

type Props = {
  movies: Movie[];
  visible: boolean; // added visible prop
};

export default function FeaturedCarousel({ movies, visible }: Props) {
  const { add, remove, watchlist } = useWatchlist();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(75);
  const [watchLink, setWatchLink] = useState<string | null>(null);
  const [trailerLink, setTrailerLink] = useState<string | null>(null);

  const currentMovie = movies[currentIndex];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [movies.length]);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newHeight = Math.max(30, 75 - scrollTop / 10);
      setCarouselHeight(newHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch links only when currentMovie changes
  useEffect(() => {
    if (!currentMovie) return;

    const fetchLinks = async () => {
      try {
        const providerRes = await fetch(
          `https://api.themoviedb.org/3/movie/${currentMovie.id}/watch/providers?api_key=${API_KEY}`
        );
        const providerData = await providerRes.json();
        setWatchLink(providerData?.results?.IN?.link || null);

        const videoRes = await fetch(
          `https://api.themoviedb.org/3/movie/${currentMovie.id}/videos?api_key=${API_KEY}&language=en-US`
        );
        const videoData = await videoRes.json();
        const trailer = videoData.results?.find(
          (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
        );
        setTrailerLink(trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null);
      } catch (err) {
        console.error('Failed to fetch links', err);
        setWatchLink(null);
        setTrailerLink(null);
      }
    };

    fetchLinks();
  }, [currentMovie]);

  if (!currentMovie) return null;

  const isInWatchlist = watchlist.some((m) => m.id === currentMovie.id);

  const handleWatchlistToggle = () => {
    if (isInWatchlist) remove(currentMovie.id);
    else add(currentMovie);
  };

  return (
    <section
      className="featured-carousel"
      style={{
        height: visible ? `${carouselHeight}vh` : '0',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${currentMovie.backdropPath}`}
        alt={currentMovie.title}
        className="carousel-backdrop"
      />
      <div className="carousel-overlay" />
      <div className="carousel-content">
        <h1 className="carousel-title">{currentMovie.title}</h1>
        <p className="carousel-overview">{currentMovie.overview?.slice(0, 200)}...</p>
        <div className="carousel-buttons">
          <button
            className="play-btn"
            onClick={() => watchLink && window.open(watchLink, '_blank')}
            disabled={!watchLink}
          >
            ▶ Play
          </button>
          <button
            className="trailer-btn"
            onClick={() => trailerLink && window.open(trailerLink, '_blank')}
            disabled={!trailerLink}
          >
            🎞 Trailer
          </button>
          <button className="mylist-btn" onClick={handleWatchlistToggle}>
            {isInWatchlist ? '✓ Added' : '➕ My List'}
          </button>
        </div>
      </div>
      <div className="carousel-dots">
        {movies.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}
