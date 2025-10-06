import { useWatchlist } from '../context/WatchlistContext';
import MovieGrid from '../components/MovieGrid';
import './WatchlistView.css'; // import the new CSS

export default function WatchlistView() {
  const { watchlist } = useWatchlist();

  return (
    <main className="watchlist-page">
      <div className="watchlist-container">
        <h2 className="watchlist-title">
          Your Watchlist
        </h2>

        {watchlist.length === 0 ? (
          <div className="watchlist-empty">
            You haven’t added any movies yet.
          </div>
        ) : (
          <MovieGrid movies={watchlist} loading={false} />
        )}
      </div>
    </main>
  );
}
