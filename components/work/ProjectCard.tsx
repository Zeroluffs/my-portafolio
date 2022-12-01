import {
  faFolder,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
  name: string;
  description: string;
  techUsed: string[];
  gitHub: string;
  link: string;
  addToRefs: (item: any) => void;
}

export function ProjectCard({
  name,
  description,
  techUsed,
  gitHub,
  link,
  addToRefs,
}: ProjectCardProps) {
  return (
    <div
      className="h-[324px] w-[304px] bg-lightNavy hover:-mt-2 transition duration-500 group invisible "
      ref={addToRefs}
    >
      <div className="p-4">
        <div className="flex justify-between">
          <FontAwesomeIcon className="text-[38px] text-leaf" icon={faFolder} />
          <div className="flex flex-row gap-4 mt-2">
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <FontAwesomeIcon
                className="text-[24px] text-lightState"
                icon={faArrowUpRightFromSquare}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={gitHub}>
              <FontAwesomeIcon
                className="text-[24px] text-lightState"
                icon={faGithub}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col pt-12">
          <p className="text-xl font-semibold transition duration-300 text-lightState group-hover:text-leaf">
            {name}
          </p>
          <p className="mt-2  text-slate-400 h-[144px]">{description}</p>
          <div className="flex flex-row flex-wrap gap-4 text-sm font-thin text-slate-400">
            {techUsed?.map((tech: any, index: number) => {
              return <p key={index}>{tech}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
