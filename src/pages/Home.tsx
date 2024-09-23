import React from "react";
import Nav from "../sections/Nav";
import Hero from "../sections/Hero";
import Rent from "../sections/Rent";
import FormAdvertise from "../sections/FormAdvertise";
import Abaut from "../sections/Abaut";
import Footer from "../sections/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Rent />
      <FormAdvertise />
      <Abaut />
      <Footer />
    </>
  );
};

export default Home;
