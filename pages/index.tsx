import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { About, Experience, HomePage } from "../components";
import { ContactForm } from "../components/contact/ContactForm";
import { Footer } from "../components/footer/Footer";
import { useMediaQuery } from "../components/hooks/useMediaQuery";
import { NavigationBar } from "../components/NavigationBar";
import { SocialBar } from "../components/SocialBar";
import { Projects } from "../components/work/Projects";

const Home: NextPage = () => {
  const [showComponent, setShowComponent] = useState(false);
  const isBreakPoint = useMediaQuery(1132);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(true);
    }, 3000);
  }, []);
  return (
    <div className="relative min-h-screen bg-midnight ">
      <NavigationBar />
      {/* <SocialBar /> */}
      {/* {showComponent && <HomePage />} */}
      <HomePage />
      <About />
      <Experience />
      <Projects />
      <ContactForm />
      {isBreakPoint ? null : <SocialBar />}
      <Footer />
      {/* <Experience />
      <Projects /> */}
      {/* <ContactForm/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
