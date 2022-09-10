import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import PageHeader from "../components/shared/PageHeader";
import { projects } from "../content/project";



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
            skills={project.skills}
            image={"image" in project ? project.image : ""}
            key={project.title}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
