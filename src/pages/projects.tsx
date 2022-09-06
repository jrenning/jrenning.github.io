import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import PageHeader from "../components/shared/PageHeader";

const projects = [
  {
    title: "Iowa Enrollment Analysis",
    image: "",
    link: "https://github.com/jrenning/Iowa_University_Enrollment_Analysis",
    description: `A project that looks at the enrollment data for three 
    public Iowa universities and analyzes its changes in 2020 and 2021.`,
  },
  {
    title: "New York Times Popular Keywords",
    link: "https://github.com/jrenning/NYT_Popular_Keywords",
    description: `A project that uses the NYT API to scrape the most common keywords
			from the top 25 most popular NYT articles of the current day and display the results in a graphical fashion`,
  },
  {
    title: "Test project 2",
    link: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eaque nisi quasi voluptatibus inventore voluptates officiis repellat libero laboriosam rerum et ipsam ipsum fugiat non maxime iste asperiores, totam atque?",
  },
];

function ProjectPage() {
  return (
    <div>
      <PageHeader name="Projects" />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2 ">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
            image={"image" in project ? project.image : ""}
            key={project.title}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
