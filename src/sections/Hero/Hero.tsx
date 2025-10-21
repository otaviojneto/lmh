import React from "react";
import { background, brand } from "../../assets";

const Hero: React.FC = () => {
  return (
    <>
      <div className="hidden md:block relative h-[478px] bg-white overflow-hidden -top-px w-full pt-[75px]">
        <div
          className="flex items-center justify-center w-screen relative bg-no-repeat bg-fixed bg-contain"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex items-center gap-10">
            <img className="h-[350px]" src={brand} alt="" />
            <h2 className="max-w-[430px] font-bold text-lg text-[#c5c5c5]">
              Escritório especializado em consultoria jurídica e imobiliária.
              Atuamos na área de locação, compra e venda de imóveis, análise de
              documentos, confecção de contratos e vistorias e assessoria
              juridica e imobiliária.
            </h2>
          </div>
        </div>
      </div>

      <div className=" md:hidden flex flex-col items-center gap-10 bg-white overflow-hidden -top-px w-full pt-[75px]">
        <img className="h-[200px] md:h-[350px]" src={brand} alt="" />
        <h2 className=" font-bold text-lg text-black text-center">
          Escritório especializado em consultoria jurídica e imobiliária.
          Atuamos na área de locação, compra e venda de imóveis, análise de
          documentos, confecção de contratos e vistorias e assessoria juridica e
          imobiliária.
        </h2>
      </div>
    </>
  );
};

export default Hero;
