import React from 'react'
import Link from 'next/link';
import DownloadIcon from "@mui/icons-material/Download";


function Welcome() {
  return (
    <div>
      <div className="mt-10 text-lg font-semibold text-center ">
        Looking to <span className="text-primary_color">build</span> new things
        and <span className="text-primary_color">learn</span> new skills
      </div>
      <div className="flex mt-12 justify-evenly ">
        <Link href="/about">
          <button className="button-standard">Learn More About Me</button>
        </Link>
        <button className="button-standard">
          <a
            href="/pdfs/Resume-F22-2.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            Download Resume
            <DownloadIcon />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Welcome