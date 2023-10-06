import Link from "next/link";
import React, { useState } from "react";

type Props = {
  name: string;
  link: string;
};

function HeaderLink({ name, link }: Props) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex flex-col w-fit cursor-pointer 
    md:text-lg text-[14px]
    sm:border-none border-b-[1px]  border-black"
    >
      <Link href={link} scroll={true}>
        <div
          className="dark:text-white"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {name}
        </div>
      </Link>
      <div
        className={`h-[3px] ${hover ? "" : "opacity-0"} transition-all 
      ease-in-out duration-300   bg-black`}
      ></div>
    </div>
  );
}

export default HeaderLink;
