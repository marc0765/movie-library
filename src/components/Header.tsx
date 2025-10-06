import { Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';
import "./Header.css";

export default function Header() {
  const { watchlist } = useWatchlist();

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <img 
            src="./logo.png" 
            alt="CineFlix Logo" 
            className="logo-image"
          />
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/watchlist">Watchlist ({watchlist.length})</Link>
        </nav>
      </div>
    </header>
  );
}
