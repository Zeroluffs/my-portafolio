import { projectsWorked } from "./utils/ProjectsDone";
import { ProjectCard } from "./ProjectCard";
import { useEffect, useRef } from "react";
import { ProjectsAnimations } from "./ProjectsAnimations";

export function Projects() {
  const projectRef = useRef<HTMLDivElement[]>([]);
  projectRef.current = [];
  useEffect(() => {
    ProjectsAnimations(projectRef);
  }, []);

  const addToRefs = (item: any) => {
    if (item) {
      projectRef.current.push(item);
    }
  };
  return (
    <section id="projects" className="h-[100vh] ">
      <div className="grid grid-cols-3 gap-y-6 w-[978px] m-auto">
        {projectsWorked.map((project, index) => {
          return (
            <div key={project.id}>
              <ProjectCard
                name={project.name}
                description={project.description}
                techUsed={project.techUsed}
                gitHub={project.gitHub}
                link={project.link}
                addToRefs={addToRefs}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
