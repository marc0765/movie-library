import { useState, useRef, useCallback } from 'react';
import './SearchBar.css';

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState('');
  const debounceRef = useRef<number | null>(null);
  const DEBOUNCE_DELAY = 400;

  // Debounced search
  const triggerSearch = useCallback(
    (q: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);

      debounceRef.current = window.setTimeout(() => {
        onSearch(q);
      }, DEBOUNCE_DELAY);
    },
    [onSearch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    triggerSearch(val.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onSearch(query.trim());
  };

  const clearSearch = () => {
    setQuery('');
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
        autoFocus
      />
      {query && (
        <button type="button" className="clear-btn" onClick={clearSearch} aria-label="Clear search">
          ×
        </button>
      )}
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}
