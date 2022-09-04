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
        <Link href="/">
          <button
            className="bg-gray-500 p-4 rounded-lg
      font-semibold text-gray-100 hover:bg-gray-200 shadow-xl hover:text-black"
          >
            Learn More About Me
          </button>
        </Link>
        <button
          className='bg-gray-500 p-4 rounded-lg
      font-semibold text-gray-100 hover:bg-gray-200 shadow-xl hover:text-black'
        >
          Download Resume
          <DownloadIcon />

        </button>
      </div>
    </div>
  );
}

export default Welcome