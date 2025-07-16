"use client";
import { MovieDetailType } from "@/types/MovieDetailType";
import { useEffect, useState } from "react";
import getMoviePopular from "./api/movies/popular/getMoviePopular";
import CarouselHome from "@/components/CarouselHome";
import getTrending from "./api/movies/trendink/getTrending";
import TrendingHome from "@/components/TrendingHome";
function HomePage() {
  const [movies, setMovies] = useState<MovieDetailType[]>([]);
  const [trending, setTrending] = useState<MovieDetailType[]>([]);
  useEffect(() => {
    (async () => {
      const res = await getMoviePopular();
      const tre = await getTrending();
      setMovies(res.data.results);
      setTrending(tre);
    })();
  }, []);

  return (
    <div className="p-6 space-y-12">
      <section className="relative aspect-video bg-black text-white">
        <TrendingHome trending={trending} />
      </section>
      <section>
        <CarouselHome movies={movies} />
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">📽️ Trailers recientes</h2>
      </section>
    </div>
  );
}

export default HomePage;
