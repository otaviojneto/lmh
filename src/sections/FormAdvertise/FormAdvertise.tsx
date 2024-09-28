import React from "react";
import * as S from "./styles";
import { Button, InputText } from "../../components";

const FormAdvertise: React.FC = () => {
  return (
    <S.Container>
      <h2>Anuncie conosco</h2>

      <S.Form
        action="https://formsubmit.co/lmh.consultoria@yahoo.com"
        method="POST"
      >
        <input type="hidden" name="_next" value="https://lmhconsultoria.com" />
        <InputText labelName="Nome" name="name" />
        <InputText labelName="Email" name="email" type="email" />
        <InputText type="tel" labelName="Celular" name="phone" />
        <S.ContainerButton>
          <Button type="submit" variant="outline">
            Enviar
          </Button>
        </S.ContainerButton>
      </S.Form>
    </S.Container>
  );
};

export default FormAdvertise;
