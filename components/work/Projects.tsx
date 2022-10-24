import { projectsWorked } from "./utils/ProjectsDone";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="h-[100vh] ">
      <div className="grid grid-cols-3 gap-y-6 w-[978px] m-auto">
        {projectsWorked.map((project, index) => {
          console.log(project);
          return (
            <div key={project.id}>
              <ProjectCard
                name={project.name}
                description={project.description}
                techUsed={project.techUsed}
                gitHub={project.gitHub}
                link={project.link}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
