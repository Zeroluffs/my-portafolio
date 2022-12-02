import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "../icons/Icons";

export function Footer() {
  const gitHub = "https://github.com/Zeroluffs";
  const linkedIn = "https://www.linkedin.com/in/jhonerpineda/";
  return (
    <footer>
      <div className="mt-[88px]">
        <div className="flex flex-row items-center justify-center gap-4 mb-[8px] desktop:invisible ">
          <a
            className="text-3xl text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href={gitHub}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            className="text-3xl text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href={linkedIn}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <a target="_blank" rel="noopener noreferrer" href={gitHub}>
          <h6 className="flex items-center justify-center font-light duration-300 cursor-pointer hover:text-leaf text-slate-400 pb-[44px]">
            Built by Jhoner Pineda
          </h6>
        </a>
      </div>
    </footer>
  );
}
