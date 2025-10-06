import { Movie } from '../models/Movie';
import MovieCard from './MovieCard';
import './MovieGrid.css'; // Import custom CSS

type Props = {
  movies: Movie[];
  loading: boolean;
};

export default function MovieGrid({ movies, loading }: Props) {
  if (loading)
    return (
      <div className="movie-grid-loading">
        <span>Loading movies...</span>
      </div>
    );

  if (!movies || movies.length === 0)
    return <div className="movie-grid-empty">No movies found.</div>;

  return (
    <div className="movie-grid">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}
