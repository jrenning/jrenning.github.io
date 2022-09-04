import React, { ReactComponentElement, useState } from "react";

type Props = {
  Icon: any
  link: string;
};

function FooterLink({ Icon, link }: Props) {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col w-fit cursor-pointer">
      <Icon
        href={link}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
      </Icon>
      <div
        className={`h-[3px] ${hover ? "" : "opacity-0"} transition-all 
      ease-in-out duration-300  bg-black`}
      ></div>
    </div>
  );
}

export default FooterLink;
