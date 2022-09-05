import React from "react";
import TimelineObject from "./TimelineObject";

function Timeline() {
  const jobs = [
    {
      job_name: "Lead Engineering Tutor",
      start_date: "August 2022",
      end_date: "",
      location: "University of Iowa, Iowa City, IA",
      bullets: [
        "Assist 15+ students a night in reviewing key concepts in engineering courses to prepare them for success in their classes",
        "Support tutors with the resources and support they need on any given night",
        "Help to create initiatives to improve Engineering Tutoring for the staff and tutees",
      ],
    },
    {
      job_name: "Process Engineering Intern",
      start_date: "May 2022",
      end_date: "August 2022",
      location: "Vishay Intertechnology, Columbus, NE",
      bullets: [
        "Automated the generation of various reports using VBA macros saving over 30+ hours a month.",
        "Constructed a GUI using Python to enable the generation of an OEE report, increasing the visibility on the error data for each individual machine / group of machines.",
        "Revised current inspection parameters to identify certain types of scrap more accurately",
      ],
    },
    {
      job_name: "Supply Chain Intern",
      start_date: "June 2021",
      end_date: "August 2021",
      location: "World Class Industries, Hiawatha, IA",
      bullets: [
        "Analyzed data collected from a customized ERP inventory system using Excel to help establish an ABC inventory system to balance number of shipments and inventory management costs",
        "Constructed a report using Excel analyzing freight losses and gains due to the pandemic. Helped get the freight quotes changed to reflect current prices based on this analysis, saving $50,000+ in annual loses",
        "Ensured NAFTA compliance for over 1000 incoming and outgoing parts",
      ],
    },
  ];
  return (
    <div className="space-y-8">
      {jobs.map((job) => (
        <TimelineObject
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
