export type MovieType = {
  id: number;
  title: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  genre_ids: number[];
};
