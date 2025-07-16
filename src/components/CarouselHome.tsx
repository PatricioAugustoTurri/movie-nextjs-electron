/* eslint-disable @next/next/no-img-element */
import { MovieDetailType } from "@/types/MovieDetailType";
import { Fascinate_Inline } from "next/font/google";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const fascinateInline = Fascinate_Inline({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface Props {
  movies: MovieDetailType[];
}
function CarouselHome({ movies }: Props) {
  return (
    <>
      <h2
        className={`lg:text-4xl md:text-3xl text-2xl font-semibold mb-10 ${fascinateInline.className}`}
      >
        🎥 Popular now
      </h2>
      <Card>
        <CardContent>
          <Carousel plugins={[Autoplay({ delay: 3000 })]}>
            <CarouselContent className="w-full">
              {movies.map((movie: MovieDetailType) => {
                return (
                  <CarouselItem
                    className="flex items-center justify-center"
                    key={movie.id}
                  >
                    <div className="flex flex-col gap-4">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          movie.backdrop_path
                        }
                        alt={movie.title}
                        className="w-screen rounded-xl object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-bold text-xl">{movie.title}</h3>
                        <p className="text-sm text-gray-600">
                          {movie.release_date}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </CardContent>
      </Card>
    </>
  );
}

export default CarouselHome;
