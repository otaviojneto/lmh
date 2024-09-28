import React from "react";
import { Button, InputText } from "../../components";
import * as S from "./styles";

const FormAdvertise: React.FC = () => {
  return (
    <S.Container>
      <h2>Anuncie conosco</h2>

      <S.Form action="https://submit-form.com/bQCIroJLk" method="POST">
        <input
          type="hidden"
          name="_redirect"
          value="https://lmhconsultoria.com"
        />
        <InputText labelName="Nome" name="name" required />
        <InputText labelName="Email" name="email" type="email" required />
        <InputText type="tel" labelName="Celular" name="phone" required />
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
