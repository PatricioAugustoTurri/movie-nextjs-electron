"use client";
import { Fascinate_Inline } from "next/font/google";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import getGenre from "@/app/api/movies/genre/getGenre";
import { useEffect, useState } from "react";
import { GenreType } from "@/types/GenreType";

const fascinateInline = Fascinate_Inline({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

interface Props {
  isHeader: boolean;
}

function Navbar({ isHeader }: Props) {
  const [genre, setGenre] = useState<GenreType[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getGenre();
      setGenre(res.genres);
    })();
  }, []);
  if (isHeader) {
    return (
      <NavigationMenu viewport={false} className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={`text-2xl`}>
              <Link
                href="/"
                className={`${fascinateInline.className} text-2xl`}
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`${fascinateInline.className} text-2xl`}
            >
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-96 text-xs text-center">
                {genre.map((g: GenreType) => {
                  return (
                    <li key={g.id}>
                      <Link
                        href={`/categories/${g.id}`}
                        className="hover:bg-black hover:text-white transition-all duration-500 ease-in-out p-1 rounded-md"
                      >
                        {g.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={`text-2xl`}>
              <Link
                href="/about"
                className={`${fascinateInline.className} text-2xl`}
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={`text-2xl`}>
              <Link
                href="/contact"
                className={`${fascinateInline.className} text-2xl`}
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  if (!isHeader) {
    return (
      <div className="flex gap-4 items-center text-black/50">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/contact">Contact</Link>
      </div>
    );
  }
}

export default Navbar;
