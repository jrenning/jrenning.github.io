import Link from "next/link";
import React, { ReactComponentElement, useState } from "react";

type Props = {
  Icon: any
  link: string;
};

function FooterLink({ Icon, link }: Props) {
  const [hover, setHover] = useState(false);
  return (
    // target blank to open link on new page
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex flex-col cursor-pointer w-fit dark:text-white">
        <Icon
          href={link}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}

        ></Icon>
        <div
          className={`h-[3px] ${hover ? "" : "opacity-0"} transition-all 
      ease-in-out duration-300  bg-black`}
        ></div>
      </div>
    </a>
  );
}

export default FooterLink;
