import React from "react";
import FormAdvertise from "../sections/FormAdvertise";
import Hero from "../sections/Hero";
import About from "@/sections/About";

const Home: React.FC = () => {
  return (
    <section className="px-6 md:px-0">
      <Hero />
      <About />
      <FormAdvertise />
    </section>
  );
};

export default Home;
