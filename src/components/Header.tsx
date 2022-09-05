import React from 'react'
import HeaderLink from './HeaderLink'
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Link from 'next/link';

function Header() {
  return (
    <div
      className="p-4 bg-primary_color
    shadow-md"
    >
      <div className="flex justify-evenly items-center">
        <Link href="/">
          <MenuBookIcon className="md:h-5 md:w-5 cursor-pointer w-4 h-4" />
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