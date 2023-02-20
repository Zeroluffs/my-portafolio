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
  return (
    <div className="relative min-h-screen bg-midnight ">
      <HomePage />
      <About />
      <Experience />
      <Projects />
      <ContactForm />

      {/* <Experience />
      <Projects /> */}
      {/* <ContactForm/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
