import React from "react";
import * as S from "./styles";

const Abaut: React.FC = () => {
  return (
    <S.Container>
      <h1 className="text-center text-xl mb-[30px] font-semibold	md:text-2xl">
        Um pouco sobre nós
      </h1>

      <p className="text-">
        Escritório especializado em consultoria jurídica e imobiliária. Atuamos
        na área de locação, compra e venda de imóveis, análise de documentos,
        confecção de contratos e vistorias e assessoria juridica e imobiliária.
      </p>
    </S.Container>
  );
};

export default Abaut;
