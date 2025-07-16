import axios from "axios";

async function getMoviePopular() {
  const res = await axios.get("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_MOVIE_KEY}`,
      Accept: "application/json",
    },
  });
  return res;
}

export default getMoviePopular;
