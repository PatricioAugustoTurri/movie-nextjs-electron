"use client";
import { ArrowBigRight, ArrowLeftToLineIcon, MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GenreType } from "@/types/GenreType";
import getGenre from "@/app/api/movies/genre/route";

function Movile() {
  const [drawer, setDrawer] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [categories, setCategories] = useState<GenreType[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getGenre();
      setCategories(res.genres);
    })();
  }, []);

  return (
    <div className="block md:hidden">
      <MenuIcon
        size={40}
        onClick={() => {
          setDrawer(true);
          setShadow(true);
        }}
        className="cursor-pointer"
      />
      <div
        className={`fixed top-0 left-0 bg-black text-white h-full w-64 font-bold transform transition-transform duration-500 ease-in-out z-50
            ${drawer ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex gap-8 text-xl flex-col px-8 py-20">
          <Link
            href="/"
            onClick={() => {
              setDrawer(false);
              setShadow(false);
            }}
          >
            Home
          </Link>
          <button
            className="flex items-center justify-between cursor-pointer"
            onClick={() => {
              setOpenCategory(true);
            }}
          >
            Categories <ArrowBigRight scale={1.5} />
          </button>
          <div
            className={`fixed top-0 left-0 z-50 w-64 h-full bg-white text-black font-bold transform transition-transform duration-500 ease-in-out  overflow-y-auto ${
              openCategory ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col px-6 py-4 text-xs">
              {categories.map((category: GenreType) => {
                return (
                  <Link
                  className="hover:bg-black hover:text-white rounded-full mt-4 p-1 transition-all duration-500"
                    key={category.id}
                    href={`/categories/${category.id}`}
                    onClick={() => {
                      setOpenCategory(false);
                      setDrawer(false);
                      setShadow(false);
                    }}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
            <ArrowLeftToLineIcon
              className="absolute top-0 right-0 p-0.5 hover:scale-105 hover:shadow-md transition-all duration-500 cursor-pointer rounded-full hover:bg-black hover:text-white mt-2 mr-2"
              size={25}
              onClick={() => setOpenCategory(false)}
            />
          </div>
          <Link
            href="/about"
            onClick={() => {
              setDrawer(false);
              setShadow(false);
            }}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => {
              setDrawer(false);
              setShadow(false);
            }}
          >
            Contact
          </Link>
        </div>
      </div>
      {shadow! && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setDrawer(false);
            setShadow(false);
            setOpenCategory(false);
          }}
        ></div>
      )}
    </div>
  );
}

export default Movile;
