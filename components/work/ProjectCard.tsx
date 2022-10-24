import {
  faFolder,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProjectCard({
  name,
  description,
  techUsed,
  gitHub,
  link,
}: any) {
  return (
    <div className="h-[324px] w-[304px] bg-lightNavy hover:-mt-2 transition duration-500 ">
      <div className="p-4">
        <div className="flex justify-between">
          <FontAwesomeIcon className="text-[38px] text-leaf" icon={faFolder} />
          <div className="flex flex-row gap-4 mt-2">
            <a href={link}>
              <FontAwesomeIcon
                className="text-[24px] text-lightState"
                icon={faArrowUpRightFromSquare}
              />
            </a>
            <a href={gitHub}>
              <FontAwesomeIcon
                className="text-[24px] text-lightState"
                icon={faGithub}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col pt-12">
          <p className="text-xl font-semibold text-lightState">{name}</p>
          <p className="mt-2  text-slate-400 h-[144px]">{description}</p>
          <div className="flex flex-row flex-wrap gap-4 text-sm font-thin text-slate-400">
            {techUsed?.map((tech: any, index: number) => {
              return <p key={index}>{tech}</p>;
            })}
          </div>
        </div>
      </div>
    </div>

    // <div className="grid grid-cols-3 gap-y-6 w-[978px]">
    //   <div className="h-[324px] w-[304px] bg-lightNavy hover:-mt-2 transition duration-500 ">
    //     <div className="p-4">
    //       <div className="flex justify-between">
    //         <FontAwesomeIcon
    //           className="text-[38px] text-leaf"
    //           icon={faFolder}
    //         />
    //         <div className="flex flex-row gap-4 mt-2">
    //           <a>
    //             <FontAwesomeIcon
    //               className="text-[24px] text-lightState"
    //               icon={faArrowUpRightFromSquare}
    //             />
    //           </a>
    //           <a href="">
    //             <FontAwesomeIcon
    //               className="text-[24px] text-lightState"
    //               icon={faGithub}
    //             />
    //           </a>
    //         </div>
    //       </div>
    //       <div className="flex flex-col pt-12">
    //         <p className="text-xl font-semibold text-lightState">Budget App</p>
    //         <p className="mt-2  text-slate-400 h-[144px]">
    //           App to keep track of your expenses
    //         </p>
    //         <div className="flex flex-row flex-wrap gap-4 text-sm font-thin text-slate-400">
    //           <p>Next.js</p>
    //           <p>Node</p>
    //           <p>Express</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
