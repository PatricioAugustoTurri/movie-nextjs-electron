/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Navbar from "./Nabvar";
import Users from "./Users";
import Movile from "./Movile";

function Header() {
  const [shodow, setShadow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    });
  }, [shodow]);
  return (
    <div
      className={`${
        shodow ? "shadow-md" : ""
      } bg-white fixed top-0 w-full h-40 z-20 flex justify-between items-center px-10 md:px-20 lg:px-36`}
    >
      <Movile />
      <img
        src="/cine.png"
        alt="pic"
        className="w-40 h-40 md:w-40 md:h-40 lg:w-40 lg:h-40"
      />
      <Navbar isHeader={true} />
      <Users />
    </div>
  );
}

export default Header;
