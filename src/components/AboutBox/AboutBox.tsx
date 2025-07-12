import React from "react";

const AboutBox: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-semibold max-w-[600px] text-balance">
          Comprar ou vender um imóvel é um processo que envolve diversos
          trâmites legais e documentação que precisam ser analisados com
          atenção.
        </h1>
        <img
          className="md:w-[540px] h-[300px] rounded-md"
          src="/src/assets/analise_imovel.png"
          alt=""
        />
      </div>
      <div className="flex flex-row-reverse items-center gap-8">
        <h1 className="text-xl text-balance font-semibold max-w-[600px]">
          Nosso serviço de consultoria para análise e acompanhamento da compra e
          venda do imóvel garante que toda a transação ocorra de forma segura,
          transparente e sem surpresas desagradáveis.
        </h1>
        <img
          className="md:w-[540px] h-[300px] rounded-md"
          src="/src/assets/analise_de_doc.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutBox;
