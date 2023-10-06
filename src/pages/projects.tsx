import React, { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import PageHeader from "../components/shared/PageHeader";
import { projects } from "../content/project";

function ProjectPage() {
  const [page, setPage] = useState(1);
  const programming_projects = projects.filter(
    (project) => project.type == "Programming"
  );
  const engineering_projects = projects.filter(
    (project) => project.type == "Engineering"
  );
  return (
    <div className="dark:bg-dark_background">
      <PageHeader name="Projects" />
      <div className="flex flex-row space-x-6 mb-8 justify-center items-center text-lg font-semibold">
        <button className="rounded-md shadow-md px-2 py-1 bg-primary_color"
        onClick={()=> setPage(1)}>
          Programming
        </button>
        <button className="rounded-md shadow-md px-2 py-1 bg-primary_color"
        onClick={()=> setPage(2)}>
          Engineering
        </button>
      </div>
      {page == 1 && (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2 ">
          {programming_projects.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              skills={project.skills}
              image={"image" in project ? project.image : ""}
              alt={"alt" in project ? project.alt : ""}
              key={project.title}
            ></ProjectCard>
          ))}
        </div>
      )}
      {page == 2 && (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2 ">
          {engineering_projects.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              skills={project.skills}
              image={"image" in project ? project.image : ""}
              alt={"alt" in project ? project.alt : ""}
              key={project.title}
            ></ProjectCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
