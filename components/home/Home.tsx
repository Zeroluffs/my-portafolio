import { useEffect, useRef, useState } from "react";
import { useHomeAnimation } from "./useHomeAnimations";
import { HomeAnimation } from "./HomeAnimation";

export function HomePage() {
  const nameIntro = useRef<HTMLParagraphElement | null>(null);
  const name = useRef<HTMLParagraphElement | null>(null);
  const title = useRef<HTMLParagraphElement | null>(null);
  const info = useRef<HTMLParagraphElement | null>(null);
  const [isShown, setIsShown] = useState(false);

  // useHomeAnimation(nameIntro, name, title, info);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
      HomeAnimation(nameIntro, name, title, info);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="Home" className="h-[100vh]">
      <div className="flex flex-col w-[800px] mx-auto mt-48">
        <p
          className="mb-8 text-xl font-thin tracking-wider text-leaf"
          ref={nameIntro}
        >
          Hi, my name is
        </p>
        <p className="mb-8 font-sans text-6xl text-lightState" ref={name}>
          {" "}
          Jhoner Pineda.
        </p>
        <p
          className="mb-8 font-sans text-6xl tracking-wide text-slate-400"
          ref={title}
        >
          I build things for the web.
        </p>
        <p className="font-sans text-lg text-slate-400 w-[500px]" ref={info}>
          I&apos;m a software engineer specializing in building exceptional
          digital experiences. Currently I&apos;m focused in building the
          Frontend of Websites and Web Applications that leads to the success of
          the overall product at{" "}
          <span className="ml-2 text-leaf">Peacedev</span>
        </p>
      </div>
    </section>
  );
}
