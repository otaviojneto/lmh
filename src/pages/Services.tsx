import AboutBox from "@/components/AboutBox";
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="pt-[94px] w-full">
      <div className="container max-w-[1400px]">
        <h1 className="text-3xl font-semibold text-center mb-8 lg:mb-20">
          Serviços
        </h1>
        <AboutBox />
      </div>
    </div>
  );
};

export default Services;
