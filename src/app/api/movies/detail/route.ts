import axios from "axios";

interface props {
  movieId: number;
}

export default async function getDetail(params: props) {
  const { movieId } = params;
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_MOVIE_KEY}`,
        Accept: "application/json",
      },
    }
  );
  console.log(data.data);
  return data.data;
}
