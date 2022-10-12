import type { NextPage } from "next";
import { About, Experience } from "../components";
import { NavigationBar } from "../components/NavigationBar";
import { SocialBar } from "../components/SocialBar";

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-midnight ">
      <NavigationBar />
      <SocialBar />
    </div>
  );
};

export default Home;
