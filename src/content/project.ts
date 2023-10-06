export type Project = {
  title: string,
  image?: string,
  alt?: string,
  link: string,
  skills: string[],
  description: string,
  type: "Programming" | "Engineering"
}


export const projects: Project[] = [
  {
    title: "Iowa Enrollment Analysis",
    type: "Programming",
    image: "/images/school.jpg",
    alt: "An image of bookshelves in a library",
    link: "https://github.com/jrenning/Iowa_University_Enrollment_Analysis",
    skills: ["Python", "Data Analysis", "Pandas"],
    description: `A project that looks at the enrollment data for three 
    public Iowa universities and analyzes its changes in 2020 and 2021.`,
  },
  {
    title: "New York Times Popular Keywords",
    type: "Programming",
    link: "https://github.com/jrenning/NYT_Popular_Keywords",
    image: "/images/newspaper.jpg",
    alt: "A picture of a newspaper",
    skills: ["Python", "API", "Data Analysis"],
    description: `A project that uses the NYT API to scrape the most common keywords
			from the top 25 most popular NYT articles of the current day and display the results in a graphical fashion`,
  },
  {
    title: "Project Builder",
    type: "Programming",
    link: "https://github.com/jrenning/Project_Builder-React",
    image: "/images/coding.jpg",
    alt: "A picture of code on a laptop",
    skills: ["Tauri", "Typescript", "Rust"],
    description:
      `Desktop application made using Tauri. Enables the user to create basic projects in Javascript, Python, and Rust with
      customization available for file paths and starting files.`,
  },
  {
    title: "ChemE Calculations",
    type: "Programming",
    link: "https://github.com/jrenning/ChemE_Calculations",
    image: "/images/calc_picture.jpg",
    alt: "Image of a calculator",
    skills: ["Python", "Chemical Engineering"],
    description: 
    `A package for Python that contains modules to do various calculations within the chemical engineering field. 
    Notably, it also does it contains a unit package that enables the calculations to be done with full unit specifications 
    both in the input and output `
  }
];
