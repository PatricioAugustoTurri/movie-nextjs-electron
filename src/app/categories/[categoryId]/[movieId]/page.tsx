/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

"use client";
import getDetail from "@/app/api/movies/detail/getDetail";
import { languageToCountry } from "@/lib/Flags";
import { MovieDetailType } from "@/types/MovieDetailType";
import { Fascinate_Inline } from "next/font/google";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Flag from "react-world-flags";

const fascinateInline = Fascinate_Inline({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

function PageDestailsDiscover() {
  const movieId = useParams().movieId;
  const [data, setData] = useState<MovieDetailType>({} as MovieDetailType);

  useEffect(() => {
    (async () => {
      const data = await getDetail({ movieId: Number(movieId) });
      setData(data);
    })();
  }, [movieId]);
  return (
    <div>
      <div className="flex flex-col">
        <h1 className={`${fascinateInline.className} text-6xl`}>
          {data.title}
        </h1>
        <div className="flex text-xs gap-1 items-center">
          {data.genres?.map((genre: any) => {
            return (
              <p className="bg-amber-300 px-2 py-1 rounded-md" key={genre.id}>
                {genre.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
        <div className="w-full flex justify-center md:w-3/4">
          <img
            src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
            alt={data.title}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="underline text-xl">Description:</p>
          <p>{data.overview}</p>
          <div className="flex gap-1 items-center">
            {data.spoken_languages?.map((flag: any) => {
              return (
                <div key={flag.name} className="flex gap-1 items-center">
                  <Flag
                    code={languageToCountry[flag.iso_639_1]}
                    fallback={<span>{flag.name}</span>}
                    className="rounded-md w-5 h-5"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-1 mb-1">
            <p className="underline text-xl">Release date:</p>
            <p>{data.release_date}</p>
            <p className="underline text-xl">Website</p>
            <a className="text-blue-500 font-bold" href={data.homepage}>{data.homepage}</a>
            <img src={"https://image.tmdb.org/t/p/w500" + data.backdrop_path} alt={data.title} className="w-full object-cover mt-8 shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDestailsDiscover;
