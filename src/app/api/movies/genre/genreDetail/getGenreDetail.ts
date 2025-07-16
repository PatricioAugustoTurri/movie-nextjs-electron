import axios from "axios";
interface props {
  genreId: number;
  page?: number;
}

async function getGenreDetail({ genreId, page = 1 }: props) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}`,
    {
      headers: {
        Authorization:`Bearer ${process.env.NEXT_PUBLIC_API_MOVIE_KEY}`,
        Accept: "application/json",
      },
    }
  );
  return res.data;
}

export default getGenreDetail;
