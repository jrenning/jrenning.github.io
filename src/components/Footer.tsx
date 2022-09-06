import React from 'react'
import FooterLink from './FooterLink';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="absolute bottom-0 w-screen p-4 shadow-md bg-primary_color">
      <div className="flex items-center justify-evenly">
        <FooterLink Icon={GitHubIcon} link="https://github.com/jrenning" />
        <FooterLink
          Icon={LinkedInIcon}
          link="https://www.linkedin.com/in/jack-renning-2024"
        />
      </div>
    </div>
  );
}

export default Footer