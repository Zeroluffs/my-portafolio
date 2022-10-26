import { RefObject } from "react";
import { gsap } from "gsap";

export function SocialBarAnimation(socialBarRef: RefObject<HTMLDivElement>) {
  const time = gsap.timeline();
  time.to(socialBarRef.current, {
    visibility: "visible",
    delay: 2.5,
    duration: 0.5,
  });

  time.fromTo(
    socialBarRef.current,
    {
      opacity: 0,
    },
    {
      ease: "ease.inOut",
      opacity: 100,
      duration: 15,
    }
  );
}
