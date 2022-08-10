import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-7 text-2xl sm:px-20 overflow-x-scroll whitespace-nowrap space-x-10 sm:space-x-20 scrollbar-hide pb-3">
        {Object.entries(requests).map(([fetchProperty, { title, url }]) => {
          return (
            <h2
              onClick={() => router.push(`/?genre=${fetchProperty}`)}
              key={fetchProperty}
              className="inline-block cursor-pointer transition duration-300 transform hover:scale-125 hover:text-white active:text-blue-500 last:pr-20"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#283240fc] h-full w-1/12" />
    </nav>
  );
}

export default Nav;
