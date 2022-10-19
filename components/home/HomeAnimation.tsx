import { RefObject, useEffect } from "react";
import { gsap } from "gsap";

export const HomeAnimation = (
  nameIntro: RefObject<HTMLParagraphElement>,
  name: RefObject<HTMLParagraphElement>,
  title: RefObject<HTMLParagraphElement>,
  info: RefObject<HTMLParagraphElement>
) => {
  const time = gsap.timeline();
  time.fromTo(
    nameIntro.current,
    {
      opacity: 0,
      x: -100,
      duration: 0.5,
      delay: 100,
    },
    {
      opacity: 100,
      x: 0,
    },
    "+=1"
  );
  time.fromTo(
    name.current,
    {
      opacity: 0,
      x: -100,
      duration: 0.5,
      delay: 100,
    },
    {
      opacity: 100,
      x: 0,
    },
  );
  time.fromTo(
    title.current,
    {
      opacity: 0,
      x: -100,
      duration: 0.5,
      delay: 100,
    },
    {
      opacity: 100,
      x: 0,
    }
  );
  time.fromTo(
    info.current,
    {
      opacity: 0,
      x: -100,
      duration: 0.5,
      delay: 100,
    },
    {
      opacity: 100,
      x: 0,
    }
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
};
