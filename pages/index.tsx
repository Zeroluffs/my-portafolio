import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { About, Experience, HomePage } from "../components";
import { NavigationBar } from "../components/NavigationBar";
import { SocialBar } from "../components/SocialBar";
import { Projects } from "../components/work/Projects";

const Home: NextPage = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(true);
    }, 3000);
  }, []);
  return (
    <div className="relative min-h-screen bg-midnight ">
      <NavigationBar />
      <SocialBar />
      {/* {showComponent && <HomePage />} */}
      <HomePage />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
