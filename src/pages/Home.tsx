import React from "react";
import Abaut from "../sections/Abaut";
import FormAdvertise from "../sections/FormAdvertise";
import Hero from "../sections/Hero";
import Rent from "../sections/Rent";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Rent />
      <FormAdvertise />
      <Abaut />
    </>
  );
};

export default Home;
