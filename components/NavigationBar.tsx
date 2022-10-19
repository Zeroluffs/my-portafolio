import Link from "next/link";
import React, { useRef } from "react";
import { useNavAnimation } from "./useNavAnimations";

interface NavLinkType {
  number: number;
  name: string;
  addToRefs: (item: any) => void;
}

interface NavComponentProps {
  timeline: GSAPTimeline;
  ease: number;
}

const navigationRoutes = [
  {
    id: 0,
    number: 1,
    name: "About",
  },
  {
    id: 1,
    number: 2,
    name: "Experience",
  },
  {
    id: 2,
    number: 3,
    name: "Work",
  },
  {
    id: 3,
    number: 4,
    name: "Contact",
  },
];

export function NavigationBar() {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const resumeButton = useRef<HTMLAnchorElement | null>(null);
  itemsRef.current = [];
  useNavAnimation(logoRef, itemsRef, resumeButton);

  const addToRefs = (item: any) => {
    if (item) {
      itemsRef.current.push(item);
    }
  };
  return (
    <nav>
      <div className="flex flex-col justify-between pt-8 mx-4 md:flex-row lg:flex-row lg:pt-14">
        <div className="text-4xl text-lightState" id="Logo" ref={logoRef}>
          JP
        </div>
        <ul className="flex flex-row justify-center gap-4 ">
          {navigationRoutes.map((singleRoute) => {
            return (
              <NavigationLinks
                key={singleRoute.id}
                number={singleRoute.number}
                name={singleRoute.name}
                addToRefs={addToRefs}
              />
            );
          })}
          <a
            href={"assets/JhonerPineda_CV.pdf"}
            target="_blank"
            rel="noreferrer"
            ref={resumeButton}
            className="px-6 py-2 pb-2 -my-1 border-2 rounded-sm text-leaf hover:bg-slate-600 hover:bg-opacity-20 border-leaf"
          >
            Resume
          </a>
        </ul>
      </div>
    </nav>
  );
}

function NavigationLinks({ number, name, addToRefs }: NavLinkType) {
  return (
    <li className="flex mt-2 " id={`#navLinks`} ref={addToRefs}>
      <span className="text-leaf "> 0.{number}</span>
      <Link href={`#${name}`}>
        <a className="ml-4 font-thin text-lightState">{name}</a>
      </Link>
    </li>
  );
}
