import React from 'react'
import HeaderLink from './HeaderLink'
import HomeIcon from "@mui/icons-material/Home";
import Link from 'next/link';

function Header() {
  return (
    <div
      className="p-4 shadow-md bg-primary_color"
    >
      <div className="flex items-center justify-evenly">
        <Link href="/">
          <HomeIcon className="cursor-pointer w-7 h-7 md:h-7 md:w-7" />
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