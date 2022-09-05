import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import PageHeader from "../components/shared/PageHeader";

const projects = [
  {
    title: "Area Depreviation",
    link: "https://public.tableau.com/app/profile/jack.renning/viz/AreaDeprivationIndexinUSbyCounty/Sheet1",
    description: `This project uses the public data for the Area Depreviation Index to
            show a map of the United States counties colored according to the
            score.`,
  },
  {
    title: "Test project",
    link: "",
    description: "this is a test description that should not be here",
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
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1
      "
      >
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image ? project.image : ""}
            key={project.title}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
