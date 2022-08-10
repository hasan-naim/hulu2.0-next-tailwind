import React from "react";
import {
  HomeOutlined,
  Whatshot,
  Search,
  AccountCircleOutlined,
  BookmarksOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
function Header() {
  return (
    <header className="">
      <div className="flex gap-4 flex-col px-7 py-5 sm:flex-row items-center justify-between">
        <div className="">
          <Image src="/hulu.svg" width={128} height={48} alt="hulu logo" />
        </div>
        <div className="flex grow  justify-evenly max-w-sm sm:justify-between h-14">
          <HeaderIcon Icon={HomeOutlined} title="HOME" />
          <HeaderIcon Icon={Whatshot} title="Trending" />
          <HeaderIcon Icon={Search} title="Search" />
          <HeaderIcon Icon={BookmarksOutlined} title="Bookmarks" />
          <HeaderIcon Icon={AccountCircleOutlined} title="Account" />
        </div>
      </div>
    </header>
  );
}

export default Header;
