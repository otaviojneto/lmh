import React, { useState } from "react";
import * as S from "./styles";
import { Button, InputText } from "../../components";

const FormAdvertise: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  return (
    <S.Container>
      <h2>Anuncie conosco </h2>

      <S.Form
        action="https://formsubmit.co/otaviojnetoo@gmail.com"
        method="POST"
      >
        <InputText labelName="Nome" value={name} onChange={() => setName} />
        <InputText labelName="Email" value={email} onChange={() => setEmail} />
        <InputText
          type="tel"
          labelName="Celular"
          value={phone}
          onChange={() => setPhone}
        />
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
