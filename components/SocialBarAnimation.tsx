import { RefObject } from "react";
import { gsap, Power2 } from "gsap";

export function SocialBarAnimation(socialBarRef: any) {
  const time = gsap.timeline();
  const ease = Power2.easeInOut;
  console.log(socialBarRef);
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
