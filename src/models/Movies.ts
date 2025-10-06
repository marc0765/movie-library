export class Movie {
  id: number;
  title: string;
  originalTitle?: string;
  originalLanguage?: string;
  releaseDate?: string;
  posterPath?: string;
  backdropPath?: string;
  overview?: string;
  adult?: boolean;
  vote_average?: number; // ✅ Add this

  constructor(
    id: number,
    title: string,
    releaseDate?: string,
    posterPath?: string,
    backdropPath?: string,
    overview?: string,
    adult?: boolean,
    originalLanguage?: string,
    originalTitle?: string,
    vote_average?: number // ✅ Add this
  ) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.posterPath = posterPath;
    this.backdropPath = backdropPath;
    this.overview = overview;
    this.adult = adult;
    this.originalLanguage = originalLanguage;
    this.originalTitle = originalTitle;
    this.vote_average = vote_average; // ✅ Map it
  }

  getPosterUrl(): string | null {
    return this.posterPath ? `https://image.tmdb.org/t/p/w500${this.posterPath}` : null;
  }

  getBackdropUrl(): string | null {
    return this.backdropPath ? `https://image.tmdb.org/t/p/original${this.backdropPath}` : null;
  }

  getYear(): string {
    return this.releaseDate ? this.releaseDate.slice(0, 4) : '';
  }
}
