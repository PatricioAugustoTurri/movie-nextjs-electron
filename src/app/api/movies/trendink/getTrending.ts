import axios from "axios";

async function getTrending() {
  const res = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_MOVIE_KEY}`,
        Accept: "application/json",
      },
    }
  );
  return res.data.results;
}

export default getTrending;
