import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
    job_name: string
    start_date: string
    end_date: string
    location: string
    bullets: string[]
}


function TimelineObject({job_name, start_date, end_date, location, bullets}: Props) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-4">
        <ArrowForwardIosIcon className="w-6 h-6" />
        <div className='flex-col lg:flex'>
          <h1 className="text-xl font-bold left-4">{job_name}</h1>
          <div className="">
            <i className="">
              {start_date} - {end_date}
            </i>
          </div>
        </div>
      </div>
      <div className="ml-10">
        <div className="font-semibold ">{location}</div>
        <div>
          <ul className="ml-12">
            {bullets.map((bullet) => (
              <li className="list-disc">{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TimelineObject