import { Movie } from '../models/Movie';
const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export class TMDBService {
  static async fetchPopular(): Promise<Movie[]> {
    const res = await fetch(`${API_BASE}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    if (!res.ok) throw new Error('Failed to fetch popular movies');
    const data = await res.json();

    return data.results.map(
      (m: any) =>
        new Movie(
          m.id,
          m.title,
          m.release_date,
          m.poster_path,
          m.backdrop_path,
          m.overview,
          m.adult,
          m.original_language,
          m.original_title,
          m.vote_average // ✅ Include vote_average
        )
    );
  }

  static async search(query: string): Promise<Movie[]> {
    const res = await fetch(
      `${API_BASE}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`
    );
    if (!res.ok) throw new Error('Failed to search movies');
    const data = await res.json();

    return data.results.map(
      (m: any) =>
        new Movie(
          m.id,
          m.title,
          m.release_date,
          m.poster_path,
          m.backdrop_path,
          m.overview,
          m.adult,
          m.original_language,
          m.original_title,
          m.vote_average // ✅ Include vote_average
        )
    );
  }
}
