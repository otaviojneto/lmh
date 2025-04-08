import React from "react";
import { Button, InputText } from "../../components";
import * as S from "./styles";

const FormAdvertise: React.FC = () => {
  return (
    <div className="container ">
      <h2 className="text-center text-xl mb-[30px] font-semibold	md:text-2xl">
        Anuncie conosco
      </h2>

      <form
        className="w-full px-4 flex flex-col items-center max-w-[780px] mx-auto space-y-4"
        action="https://submit-form.com/bQCIroJLk"
        method="POST"
      >
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
      </form>
    </div>
  );
};

export default FormAdvertise;
