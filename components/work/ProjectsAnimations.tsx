import { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function ProjectsAnimations(projectRef: RefObject<HTMLDivElement[]>) {
  const time = gsap.timeline();

  projectRef.current!.map((item: any, index: any) => {
    // gsap.set(item, { x: -75, y: 2 });
    // time.to(item, {
    //   x: 0,
    //   y: 0,
    //   duration: 2,
    //   ease: "expo",
    //   visibility: "visible",
    //   stagger: {
    //     amount: 2,
    //   },
    //   scrollTrigger: {
    //     trigger: item,
    //     start: "top +=600px",
    //   },
    // });
  });
}
