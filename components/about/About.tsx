import { Skills } from "./Skills";

export function About() {
  return (
    <section id="About" className="desktop:h-[60vh]">
      <div className="flex desktop:flex-row flex-col justify-center px-[24px] pt-[100px] ">
        <div className="flex flex-col desktop:w-[500px]   ">
          <div className="relative flex">
          <p className="font-sans text-2xl font-bold text-lightState ">
            <span className="mr-2 text-xl slashed-zero text-leaf">0.1</span>{" "}
            About Me
          </p>
          {/* <div className="absolute align-middle border-b-[1px] border-gray-700 w-[278px] right-14 top-4 "></div> */}
          </div>
          

          <p className="mt-8 font-sans text-slate-400 text-lg desktop:text-xl desktop:w-[500px]">
            Hello! My name is Jhoner and I enjoy creating things that live on
            the Internet. My interest in Software Development started back in
            2016 when I started majoring in Software Engineer (I wanted to make
            videogames!) Fast-Forward to today, I have been working as a{" "}
            <span className="text-leaf"> Front End Web Developer </span>
          </p>
          <p className="mt-8 font-sans text-slate-400 text-lg desktop:text-xl desktop:w-[500px]">
            I&apos;m open to <span className="text-leaf"> job</span>{" "}
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then do not
            hesitate to <span className="text-leaf">contact</span> me.
          </p>
        </div>
        <div className="">
          <Skills />
        </div>
      </div>
    </section>
  );
}
