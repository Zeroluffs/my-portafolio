import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "./icons/Icons";
import React, { useEffect, useRef } from "react";
import { SocialBarAnimation } from "./SocialBarAnimation";

export function SocialBar() {
  const socialBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    SocialBarAnimation(socialBarRef);
  }, []);
  const gitHub = "https://github.com/Zeroluffs/";
  const linkedIn = "https://www.linkedin.com/in/jhonerpineda/";
  return (
    <div ref={socialBarRef} className="invisible">
      <div className="fixed bottom-0 left-0 flex flex-col gap-4 ml-8 ">
        <a className="text-3xl text-gray-300"  target="_blank" rel="noopener noreferrer" href={gitHub}>
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a className="text-3xl text-gray-300" target="_blank" rel="noopener noreferrer" href={linkedIn}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <div className="h-40 ml-3 mr-12 border border-l border-slate-400 "></div>
      </div>
    </div>
  );
}
