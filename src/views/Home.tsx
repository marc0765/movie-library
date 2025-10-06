import { useEffect, useState, useCallback, useMemo } from 'react';
import { Movie } from '../models/Movie';
import { TMDBService } from '../services/TMDBService';
import MovieGrid from '../components/MovieGrid';
import SearchBar from '../components/SearchBar';
import FeaturedCarousel from '../components/FeaturedCarousel';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Load popular movies on mount
  const loadPopular = useCallback(async () => {
    setLoading(true);
    try {
      const popular = await TMDBService.fetchPopular();
      setMovies(popular);
      setPopularMovies(popular);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPopular();
  }, [loadPopular]);

  // Search handler
  const handleSearch = useCallback(async (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setMovies(popularMovies);
      return;
    }

    setLoading(true);
    try {
      const results = await TMDBService.search(query);
      setMovies(results);
    } finally {
      setLoading(false);
    }
  }, [popularMovies]);

  // Memoize top 5 featured movies to prevent unnecessary renders
  const topFeatured = useMemo(() => movies.slice(0, 5), [movies]);

  return (
    <main className="main-app">
      {/* Carousel is always mounted, just hide when searching */}
      {topFeatured.length > 0 && (
        <FeaturedCarousel movies={topFeatured} visible={searchQuery === ''} />
      )}

      <div className="container">
        <SearchBar onSearch={handleSearch} />

        {loading ? (
          <div className="loading-text">Loading movies...</div>
        ) : movies.length > 0 ? (
          <MovieGrid movies={movies} loading={loading} />
        ) : (
          <div className="no-results">No movies found</div>
        )}
      </div>
    </main>
  );
}
