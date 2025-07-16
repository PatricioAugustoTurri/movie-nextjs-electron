import axios from "axios";

async function getGenre() {
  const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_MOVIE_KEY}`,
      Accept: "application/json",
    },
  });
  return res.data;
}

export default getGenre;
