import React from "react";
import { brand } from "../../assets";
import { Content } from "./styles";

const Hero: React.FC = () => {
  return (
    <div className="relative h-[478px] bg-white overflow-hidden -top-px w-full pt-[75px]">
      <Content>
        <img src={brand} alt="" />
      </Content>
    </div>
  );
};

export default Hero;
