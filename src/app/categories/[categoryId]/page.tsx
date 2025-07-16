"use client";
/* eslint-disable @next/next/no-img-element */

import getGenreDetail from "@/app/api/movies/genre/genreDetail/getGenreDetail";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { filmGenreById } from "@/lib/genreById";
import { MovieType } from "@/types/MovieType";
import { Fascinate_Inline } from "next/font/google";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const fascinateInline = Fascinate_Inline({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

function CategoriesPage() {
  const router = useRouter();
  const { categoryId } = useParams();
  const genreId = Number(categoryId);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState<MovieType[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchData = async () => {
      try {
        const res = await getGenreDetail({ genreId, page: currentPage });
        setData(res.results);
        setTotalPages(res.total_pages);
      } catch (error) {
        console.error("Error fetching genre data:", error);
        setData([]);
        setTotalPages(1);
      }
    };

    fetchData();
  }, [genreId, currentPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageItems = () => {
    const maxVisible = 5;
    const pages = [];

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) {
      pages.push(
        <PaginationItem key="first">
          <PaginationLink href="#" onClick={() => goToPage(1)}>
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (start > 2) {
        pages.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    for (let page = start; page <= end; page++) {
      pages.push(
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            isActive={page === currentPage}
            onClick={() => goToPage(page)}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      pages.push(
        <PaginationItem key="last">
          <PaginationLink href="#" onClick={() => goToPage(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-col px-4">
      <h1 className={`${fascinateInline.className} text-4xl mt-4`}>
        {filmGenreById[genreId]}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {data.length > 0 ? (
          data.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md hover:scale-105 hover:shadow-lg transition-all duration-700 ease-in-out cursor-pointer"
                onClick={() => {
                  router.push(`/categories/${categoryId}/${movie.id}`);
                }}
              />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No se encontraron películas en esta categoría.
          </p>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => goToPage(currentPage - 1)}
              />
            </PaginationItem>
            {renderPageItems()}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => goToPage(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default CategoriesPage;
