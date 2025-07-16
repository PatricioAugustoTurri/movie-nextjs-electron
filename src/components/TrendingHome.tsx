/* eslint-disable @next/next/no-img-element */
import { MovieDetailType } from "@/types/MovieDetailType";
import { useRouter } from "next/navigation";

interface Props {
  trending: MovieDetailType[];
}

function TrendingHome({ trending }: Props) {

  const router = useRouter();
  return (
    <>
      <img
        src={"https://image.tmdb.org/t/p/w500" + trending[0]?.backdrop_path}
        alt={trending[0]?.title}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 p-10">
        <h1 className="lg:text-6xl md:text-3xl text-2xl font-bold">Movie of the day</h1>
        <p className="mt-2 text-xs md:text-base">
          {trending[0]?.title} | {trending[0]?.release_date} |{" "}
          {trending[0]?.popularity}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition-all duration-500 ease-in-out cursor-pointer text-xs md:text-base"
          onClick={() => {
            router.push(
              `/categories/${trending[0]?.genre_ids[0]}/${trending[0]?.id}`
            );
          }}
        >
          Ver detalles
        </button>
      </div>
    </>
  );
}

export default TrendingHome;
