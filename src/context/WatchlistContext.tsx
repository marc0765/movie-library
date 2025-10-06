import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { Movie } from '../models/Movie';

type WatchlistContextType = {
  watchlist: Movie[];
  add: (movie: Movie) => void;
  remove: (id: number) => void;
};

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) throw new Error('useWatchlist must be used within WatchlistProvider');
  return context;
}

export const WatchlistProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    const raw = localStorage.getItem('watchlist_v1');
    return raw ? JSON.parse(raw).map((m:any) => new Movie(m.id, m.title, m.releaseDate, m.posterPath)) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist_v1', JSON.stringify(watchlist));
  }, [watchlist]);

  const add = (movie: Movie) => {
    if (!watchlist.find(m => m.id === movie.id)) setWatchlist([...watchlist, movie]);
  };

  const remove = (id: number) => setWatchlist(watchlist.filter(m => m.id !== id));

  const value = useMemo(() => ({ watchlist, add, remove }), [watchlist]);

  return <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>;
};
