import { RefObject } from "react";
import { gsap } from "gsap";

export function NavAnimation(
  logoRef: RefObject<HTMLDivElement>,
  resumeButton: RefObject<HTMLAnchorElement>,
  page: RefObject<HTMLDivElement>,
  itemsRef?: RefObject<HTMLDivElement[]>
) {
  const time = gsap.timeline();
  time.fromTo(
    page.current,
    { x: -100 },
    {
      x: 0,
      visibility: "visible",
    }
  );
  time.fromTo(
    logoRef.current,
    {
      opacity: 0,
      y: 100,
      duration: 0.5,
      delay: 1,
    },
    {
      opacity: 100,
      y: 0,
    }
  );
  itemsRef?.current!.map((item: any, index: any) => {
    time.fromTo(
      item,
      {
        opacity: 0,
        y: 100,
        delay: 1,
        duration: 0.5,
        stagger: {
          amount: 1,
        },
      },
      {
        opacity: 100,
        y: 0,
      }
    );
  });
  time.fromTo(
    resumeButton.current,
    {
      opacity: 0,
      y: 100,
      delay: 1,
      duration: 0.5,
      stagger: {
        amount: 1,
      },
    },
    {
      opacity: 100,
      y: 0,
    }
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
}
