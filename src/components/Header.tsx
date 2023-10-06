import React from 'react'
import HeaderLink from './HeaderLink'
import HomeIcon from "@mui/icons-material/Home";
import Link from 'next/link';

function Header() {
  return (
    <div className="sticky top-0 z-50 p-4 shadow-md bg-primary_color dark:bg-primary_color_dark animate-fade_in">
      <div className="flex items-center justify-evenly">
        <Link href="/">
          <HomeIcon className="cursor-pointer dark:text-white w-7 h-7 md:h-7 md:w-7" />
        </Link>
        <HeaderLink name="About" link="/about" />
        <HeaderLink name="Experience" link="/experience" />
        <HeaderLink name="Projects" link="/projects" />
        <HeaderLink name="Contact Me" link="/contact" />
      </div>
    </div>
  );
}

export default Header