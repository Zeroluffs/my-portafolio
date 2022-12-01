import Link from "next/link";
import { useComponentVisible } from "../hooks/useComponentVisible";
import { navigationRoutes } from "../utils/NavRoutes";

interface navBarDrawerProp {
  setIsOpen: (active: boolean) => void;
}
interface NavLinkType {
  number: number;
  name: string;
  setIsOpen: (active: boolean) => void;
  isComponentVisible: boolean;
}

export function NavBarDrawer({ setIsOpen }: navBarDrawerProp) {
  const { ref, isComponentVisible } = useComponentVisible(true);
  setIsOpen(isComponentVisible);

  return (
    <div className="fixed top-0 z-50 w-screen h-screen backdrop-blur-sm bg-white/10">
      <div className="fixed right-0 w-4/5 h-full d bg-lightNavy " ref={ref}>
        <ul className="flex flex-col items-center justify-center gap-4 mt-[300px]">
          {navigationRoutes.map((singleRoute) => {
            return (
              <NavigationLinks
                key={singleRoute.id}
                number={singleRoute.number}
                name={singleRoute.name}
                setIsOpen={setIsOpen}
                isComponentVisible={isComponentVisible}
              />
            );
          })}
          <a
            href={"assets/JhonerPineda_CV.pdf"}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 pb-2 my-8 text-lg border-2 rounded-sm text-leaf hover:bg-slate-600 hover:bg-opacity-20 border-leaf"
          >
            Resume
          </a>
        </ul>
      </div>
    </div>
  );
}

function NavigationLinks({
  number,
  name,
  setIsOpen,
  isComponentVisible,
}: NavLinkType) {
  return (
    <li className="flex flex-col items-center justify-center mt-2" id={`#navLinks`}>
      <span className="text-leaf "> 0{number}.</span>
      <Link href={`#${name}`}>
        <a
          onClick={() => {
            setIsOpen(!isComponentVisible);
          }}
          className="text-lg font-normal text-lightState"
        >
          {name}
        </a>
      </Link>
    </li>
  );
}
