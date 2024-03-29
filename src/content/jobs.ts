export type Job = {
  job_name: string,
  start_date: string,
  end_date: string,
  location: string,
  bullets: string[]
}

export const jobs: Job[] = [
  {
    job_name: "Lead Engineering Tutor",
    start_date: "August 2022",
    end_date: "Present",
    location: "University of Iowa, Iowa City, IA",
    bullets: [
      "Assist over 15 students a night in reviewing key concepts in engineering courses including thermodynamics, principles of chemistry, and material science to prepare them for success in classes",
      "Provide tutors with resources and additional support when dealing with a difficult problem or student",
      "Create initiatives and help implement a culture of continuous improvement for the staff and tutees",
    ],
  },
  {
    job_name: "Teaching Assistant",
    start_date: "August 2022",
    end_date: "Present",
    location: "University of Iowa",
    bullets: [
      "Lead weekly group office hours to help students better understand the course material and complete their assignments",
      "Facilitate the grading of projects and homework assignments for over 40 students ",
    ],
  },
  {
    job_name: "Performance Engineering Intern",
    start_date: "May 2023",
    end_date: "August_2023",
    location: "MidAmerican Energy Company, Des Moines, IA",
    bullets: [
      "Built a dataset correlating real-time energy market prices with local environmental factors across various wind farms. Created meaningful visualizations to highlight statistical significance, aiding data-driven insights.",
      "Led the establishment of a centralized 'Single Source of Truth' for wind operations, consolidating data from various departments and amassing over 17,000 critical data points.",
      "Cross-referenced daily reports and outage data to pinpoint recurring over 24-hour outages, categorizing trends by manufacturer, location, and wind turbine model for targeted improvement efforts.",
    ],
  },
  {
    job_name: "Process Engineering Intern",
    start_date: "May 2022",
    end_date: "August 2022",
    location: "Vishay Intertechnology, Columbus, NE",
    bullets: [
      "Automated the creation of various reports using VBA macros saving over 30+ hours a month",
      "Constructed a graphical user interface (GUI) using Python to enable the generation of a report, increasing the visibility of the error data for each individual machine or group of machines",
      "Revised inspection parameters within quality control to categorize types of scrap more accurately, identifying future areas of process improvement",
    ],
  },
  {
    job_name: "Supply Chain Intern",
    start_date: "June 2021",
    end_date: "August 2021",
    location: "World Class Industries, Hiawatha, IA",
    bullets: [
      "Analyzed data collected from a customized ERP inventory system using Excel to help establish an ABC inventory system to balance number of shipments and inventory management costs",
      "Constructed a report detailing recommended quoting changes due to pandemic freight rates, which once implemented saved the company over $50,000 in annual losses",
      "Ensured NAFTA compliance for over 1000 incoming and outgoing parts",
    ],
  },
];
