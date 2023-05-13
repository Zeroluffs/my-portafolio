import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { HomeAnimation } from './HomeAnimation'

export function HomePage() {
  const page = useRef<HTMLDivElement | null>(null)
  const nameIntro = useRef<HTMLParagraphElement | null>(null)
  const name = useRef<HTMLParagraphElement | null>(null)
  const title = useRef<HTMLParagraphElement | null>(null)
  const info = useRef<HTMLParagraphElement | null>(null)
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    HomeAnimation(page, nameIntro, name, title, info)

    // const timer = setTimeout(() => {
    //   setIsShown(true);
    //   HomeAnimation(page, nameIntro, name, title, info);
    // }, 500);

    // return () => clearTimeout(timer);
  }, [])
  // if (typeof window !== "undefined") {
  //   window.addEventListener("load", function (event) {
  //     HomeAnimation(page, nameIntro, name, title, info);
  //   });
  // }

  return (
    <section id="Home" className="h-[80vh] ">
      <div
        className="flex flex-col  tablet:w-[800px] mx-auto mt-48 invisible  px-[24px]"
        ref={page}>
        <p className="mb-8 text-xl font-thin tracking-wider text-leaf" ref={nameIntro}>
          Hi, my name is
        </p>
        <p className="mb-8 font-sans text-4xl laptop:text-6xl text-lightState" ref={name}>
          {' '}
          Jhoner Pineda.
        </p>
        <p
          className="mb-8 font-sans text-4xl tracking-wide laptop:text-6xl text-slate-400"
          ref={title}>
          I build things for the web.
        </p>
        <p className="font-sans text-lg laptop:text-xl text-slate-400 laptop:w-[524px]" ref={info}>
          I&apos;m a software engineer specializing in building exceptional digital experiences.
          Currently I&apos;m focused in building the Frontend of Websites and Web Applications that
          leads to the success of the overall product at{' '}
          <span className="ml-2 text-leaf">WebRun</span>
        </p>
      </div>
    </section>
  )
}
