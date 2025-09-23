import React from "react";
import FormAdvertise from "../sections/FormAdvertise";
import Hero from "../sections/Hero";
import About from "@/sections/About";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <FormAdvertise />
    </>
  );
};

export default Home;
