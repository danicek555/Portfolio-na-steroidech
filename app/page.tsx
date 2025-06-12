import Hero from "./components/hero";
import About from "./components/about";
import Competitions from "./components/competitions";
import Projects from "./components/projects";

// Main homepage - dark mode is handled by individual components
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Competitions />
      <Projects />
    </>
  );
}
