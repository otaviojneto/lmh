import React from "react";
import { Input } from "../ui/input";

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

  

    <div className="p-15 mt-10 w-full">
      <label className=" block transition-3s text-base">{labelName}</label>
      <Input
        type={type}
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={labelName}

      />
    </div>
  );
};

export default InputText;
