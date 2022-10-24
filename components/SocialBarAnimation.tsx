import { RefObject } from "react";
import { gsap, Power2 } from "gsap";

export function SocialBarAnimation(socialBarRef: any) {
  const time = gsap.timeline();
  const ease = Power2.easeInOut;
  console.log(socialBarRef);
  time.to(socialBarRef.current, {
    visibility: "visible",
    delay: 3,
    duration: 1
  });
}
