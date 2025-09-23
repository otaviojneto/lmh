import { analiseDoc, analiseImovel } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6 my-12">
      <div className="grid lg:flex items-center gap-8">
        <h1 className="text-xl font-semibold max-w-[600px] text-balance">
          Comprar ou vender um imóvel é um processo que envolve diversos
          trâmites legais e documentação que precisam ser analisados com
          atenção.
        </h1>
        <img
          className="md:w-[540px] h-[300px] rounded-md"
          src={analiseImovel}
          alt="análise do imóvel"
        />
      </div>

      <div className="grid lg:flex flex-row-reverse items-center gap-8">
        <h1 className="text-xl text-balance font-semibold max-w-[600px]">
          Nosso serviço de consultoria para análise e acompanhamento da compra e
          venda do imóvel garante que toda a transação ocorra de forma segura,
          transparente e sem surpresas desagradáveis.
        </h1>
        <img
          className="md:w-[540px] h-[300px] rounded-md"
          src={analiseDoc}
          alt="análise de documento"
        />
      </div>
      <div className="w-full flex justify-end max-w-[1172px]">
        <a href="/services" className="mt-4 group">
          <Button
            variant="link"
            className="hover:no-underline font-semibold flex items-center gap-1"
          >
            Saiba mais
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default About;
