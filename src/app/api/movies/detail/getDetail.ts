import axios from "axios";
interface props {
  movieId: number;
}
async function getDetail(params: props) {
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
  return data.data;
}
export default getDetail;
