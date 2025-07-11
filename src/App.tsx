import { useEffect, useState } from "react";
import "./App.css";
import AboutSection from "./components/about/about";
import ContactSection from "./components/contact/contact";
import CustomCursor from "./components/cursor/custom-cursor";
import Header from "./components/header/header";
import HeroSection from "./components/hero/hero";
import ProjectCardGrid from "./components/projects/projectGrid";
import { projects } from "./data/projects";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <>
      {!isMobile && <CustomCursor />}
      <Header isMobile={isMobile} />
      <HeroSection />
      <AboutSection />
      <ProjectCardGrid projects={projects} />
      <ContactSection />
    </>
  );
}

export default App;
