"use client";

import Hero from "../../components/hero";
import About from "../../components/about";
import Competitions from "../../components/competitions";
import Projects from "../../components/projects";

export default function HomePage() {
  return (
    <>
      {/* Sekce portfolia */}
      <Hero />
      <About />
      <Competitions />
      <Projects />
    </>
  );
}
