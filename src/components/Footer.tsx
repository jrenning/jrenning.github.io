import React from 'react'
import FooterLink from './FooterLink';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="absolute w-screen p-4 bg-primary_color bottom-0
    shadow-md">
      <div className="flex justify-evenly items-center">
        <FooterLink Icon={GitHubIcon} link="" />
         <FooterLink Icon={LinkedInIcon} link="" />
      </div>
    </div>
  );
}

export default Footer