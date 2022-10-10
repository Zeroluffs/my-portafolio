import type { NextPage } from "next";
import { NavigationBar } from "../components/NavigationBar";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-midnight ">
      <NavigationBar />
    </div>
  );
};

export default Home;
