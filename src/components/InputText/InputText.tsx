import React from "react";
import { Input, Label, Struture } from "./styles";

interface InputTextProps {
  labelName: string;
  type?: string;
  value?: string | number;
  name?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({
  labelName,
  type = "text",
  value,
  name,
  required,
  onChange,
}) => {
  return (
    <Struture>
      <Input
        type={type}
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={labelName}
      />
      <Label>{labelName}</Label>
    </Struture>
  );
};

export default InputText;
