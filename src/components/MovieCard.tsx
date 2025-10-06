import { Movie } from '../models/Movie';
import { useWatchlist } from '../context/WatchlistContext';
import './MovieCard.css';

type Props = { movie: Movie };

export default function MovieCard({ movie }: Props) {
  const { watchlist, add, remove } = useWatchlist();
  const isAdded = watchlist.some((m) => m.id === movie.id);
  const poster = movie.getPosterUrl();

  const handleToggle = () => {
    if (isAdded) {
      remove(movie.id);
    } else {
      add(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="poster-container">
        <img
          src={poster || ''}
          alt={movie.title}
          className="movie-poster"
        />
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-rating">⭐ {movie.vote_average?.toFixed(1) || 'N/A'}</p>
        <button
          className={`watchlist-btn ${isAdded ? 'remove' : ''}`}
          onClick={handleToggle}
        >
          {isAdded ? 'Remove' : 'Add to Watchlist'}
        </button>
      </div>
    </div>
  );
}
