import React, { ButtonHTMLAttributes } from "react";
import { Btn, EndIcon, StartIcon } from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "contained" | "outline" | "text";
  borderColor?: string;
  borderRadius?: string;
  block?: boolean;
  color?: string;
  colorText?: string;
  marginBottom?: number;
  marginLeft?: number;
  marginTop?: number;
  padding?: number;
  paddingX?: number;
  size?: "minimum" | "small" | "medium" | "large" | "extraLarge";
  startIcon?: string;
  endIcon?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  block,
  borderRadius,
  children,
  colorText,
  color,
  marginBottom,
  marginLeft,
  marginTop,
  onClick,
  endIcon,
  padding,
  paddingX,
  size = "medium",
  startIcon,
  variant = "contained",
  ...rest
}) => {
  const computedColorText =
    colorText ?? (variant === "contained" ? "#ffffff" : "#000000");

  return (
    <Btn
      block={block}
      borderRadius={borderRadius}
      color={color}
      data-colortext={computedColorText} // Usar atributo de dados
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginTop={marginTop}
      onClick={onClick}
      padding={padding}
      paddingX={paddingX}
      variant={variant}
      size={size}
      {...rest}
    >
      {startIcon && <StartIcon src={startIcon} />}
      {children}
      {endIcon && <EndIcon src={endIcon} />}
    </Btn>
  );
};

export default Button;
