import "./App.css";
import AboutSection from "./components/about/about";
import CustomCursor from "./components/cursor/custom-cursor";
import Header from "./components/header/header";
import HeroSection from "./components/hero/hero";
import ProjectCardGrid from "./components/projects/projectGrid";
import { projects } from "./data/projects";

function App() {
  return (
    <>
      <CustomCursor />
      <Header isMobile={false} />
      <HeroSection />
      <AboutSection />
      <ProjectCardGrid projects={projects} />
    </>
  );
}

export default App;
