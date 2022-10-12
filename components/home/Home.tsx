export function HomePage() {
  return (
    <section id="home">
      <div className="flex flex-col w-[800px] mx-auto mt-48">
        <p className="mb-8 text-xl font-thin tracking-wider text-leaf">
          Hi, my name is
        </p>
        <p className="mb-8 font-sans text-6xl text-lightState">
          {" "}
          Jhoner Pineda.
        </p>
        <p className="mb-8 font-sans text-6xl tracking-wide text-slate-400">
          I build things for the web.
        </p>
        <p className="font-sans text-lg text-slate-400 w-[500px]">
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
