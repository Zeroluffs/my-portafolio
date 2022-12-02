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
    <section id="Work" className="desktop:h-[60vh]">
      <div className="relative flex px-[24px]  mt-[100px] desktop:flex justify-center items-center">
        <p className="font-sans text-2xl font-bold text-lightState ">
          <span className="mr-2 text-xl slashed-zero text-leaf">0.4</span>{" "}
          Things I&apos;ve built
        </p>
        {/* <div className="absolute align-middle border-b-[1px] border-gray-700 w-[392px] right-14 "></div> */}
      </div>
      <div className="desktop:grid desktop:grid-cols-3 justify-center items-center flex flex-col gap-y-6 desktop:w-[978px] m-auto pt-[100px]">
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
