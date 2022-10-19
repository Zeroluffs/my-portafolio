import { useEffect, Ref, RefObject } from "react";
import { gsap } from "gsap";

interface ExampleProps {
  logoref: Ref<HTMLElement>;
}
export function useNavAnimation(
  logoRef: RefObject<HTMLDivElement>,
  itemsRef: RefObject<HTMLDivElement[]>,
  resumeButton: RefObject<HTMLAnchorElement>
) {
  useEffect(() => {
    const time = gsap.timeline();
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
    itemsRef.current!.map((item: any, index: any) => {
      time.fromTo(
        item,
        {
          opacity: 0,
          y: 100,
          delay: 2,
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
        delay: 2,
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
  }, []);
}
