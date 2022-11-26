import { Skills } from "./Skills";

export function About() {
  return (
    <section id="About" className="h-[60vh]">
      <div className="flex flex-row justify-center pt-[100px] ">
        <div className="flex flex-col w-[500px]   ">
          <p className="font-sans text-2xl text-lightState ">
            <span className="mr-2 text-lg slashed-zero text-leaf">0.1</span>{" "}
            About Me
          </p>
          <p className="mt-8 font-sans text-slate-400 w-[500px]">
            Hello! My name is Jhoner and I enjoy creating things that live on
            the Internet. My interest in Software Development started back in
            2016 when I started majoring in Software Engineer (I wanted to make
            videogames!) Fast-Forward to today, I have been working as a{" "}
            <span className="text-leaf"> Front End Web Developer </span>
          </p>
          <p className="mt-8 font-sans text-slate-400 w-[500px]">
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
