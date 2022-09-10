import React from "react";
import { jobs } from "../../content/jobs";
import TimelineObject from "./TimelineObject";

function Timeline() {

  return (
    <div className="space-y-8">
      {jobs.map((job) => (
        <TimelineObject
          key={job.bullets[0]}
          job_name={job.job_name}
          start_date={job.start_date}
          end_date={job.end_date}
          location={job.location}
          bullets={job.bullets}
        />
      ))}
    </div>
  );
}

export default Timeline;
