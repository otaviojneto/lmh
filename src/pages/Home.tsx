import About from "@/sections/About";
import React from "react";
import Hero from "../sections/Hero";

const Home: React.FC = () => {
  return (
    <section className="px-6 md:px-0">
      <Hero />
      <About />
    </section>
  );
};

export default Home;
