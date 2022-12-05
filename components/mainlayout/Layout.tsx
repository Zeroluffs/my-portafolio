import { Footer } from "../footer/Footer";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { NavigationBar } from "../NavigationBar";
import { SocialBar } from "../SocialBar";
import { motion, useScroll, useSpring } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const isBreakPoint = useMediaQuery(1132);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <div className="relative min-h-screen bg-midnight ">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <NavigationBar />
        {children}
        {isBreakPoint ? null : <SocialBar />}
        <Footer />
      </div>
    </>
  );
}
