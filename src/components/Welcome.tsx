import React from 'react'
import Link from 'next/link';
import DownloadIcon from "@mui/icons-material/Download";


function Welcome() {
  return (
    <div>
      <div className=" text-center font-semibold text-lg mt-10">
        Looking to <span className="text-primary_color">build</span> new things
        and <span className="text-primary_color">learn</span> new skills
      </div>
      <div className="flex justify-evenly mt-12 ">
        <Link href="/about">
          <button className="button-standard">Learn More About Me</button>
        </Link>
        <button className="button-standard">
          <a href="/pdfs/Resume-CF.pdf" download>
            Download Resume
            <DownloadIcon />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Welcome