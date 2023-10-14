export type Project = {
  title: string,
  image?: string,
  alt?: string,
  link?: string,
  skills: string[],
  description: string,
  type: "Programming" | "Engineering"
}


export const projects: Project[] = [
  {
    title: "Biochemmical Engineering Final Project",
    type: "Engineering",
    skills: ["Process Design", "Process Safety", "Biochemical Engineering"],
    description:
      "Project involving the construction of a process to produce lysine on a large scale. Includes analysis of process units, safety, and evironmental impacts",
  },
  {
    title: "Goal Tracker",
    type: "Programming",
    skills: ["React", "SQL", "PWA"],
    link: "https://github.com/jrenning/goal_tracker",
    description:
      "A PWA that tracks your goals in a gamified way with the ability to collect exp and coins to level up and buy rewards.",
  },
  {
    title: "ChemE Calculations",
    type: "Programming",
    link: "https://github.com/jrenning/ChemE_Calculations",
    image: "/images/calc_picture.jpg",
    alt: "Image of a calculator",
    skills: ["Python", "Chemical Engineering"],
    description: `A package for Python that contains modules to do various calculations within the chemical engineering field. 
    Notably, it also does it contains a unit package that enables the calculations to be done with full unit specifications 
    both in the input and output `,
  },
  {
    title: "Project Builder",
    type: "Programming",
    link: "https://github.com/jrenning/Project_Builder-React",
    image: "/images/coding.jpg",
    alt: "A picture of code on a laptop",
    skills: ["Tauri", "Typescript", "Rust"],
    description: `Desktop application made using Tauri. Enables the user to create basic projects in Javascript, Python, and Rust with
      customization available for file paths and starting files.`,
  },
  {
    title: "Iowa Enrollment Analysis",
    type: "Programming",
    image: "/images/school.jpg",
    alt: "An image of bookshelves in a library",
    link: "https://github.com/jrenning/Iowa_University_Enrollment_Analysis",
    skills: ["Python", "Data Analysis", "Pandas"],
    description: `A project that looks at the enrollment data for three 
    public Iowa universities and analyzes its changes in 2020 and 2021.`,
  }
];
