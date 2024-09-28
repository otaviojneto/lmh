import styled, { css } from "styled-components";
import theme from "../../styles/colors";
import { prop, switchProp } from "styled-tools";

interface ButtonProps {
  block?: boolean;
  borderRadius?: string;
  color?: string;
  colorText?: string;
  marginBottom?: number;
  marginLeft?: number;
  marginTop?: number;
  padding?: number;
  paddingX?: number;
  size?: string;
  variant?: string;
}

const styles = css<ButtonProps>`
  align-items: center;
  background-color: ${theme.colors?.grey3};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "4px")};
  display: inline-flex;
  font-size: 14px;
  font-weight: bold;
  height: 36px;
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom}px;
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft}px;
  margin-top: ${({ marginTop }) => marginTop && marginTop}px;
  line-height: 16px;
  padding: ${({ padding }) => padding && padding}px;
  padding: ${({ paddingX }) => (paddingX ? `0 ${paddingX}` : "")}px;
  transition: 0.15s ease-in-out;

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}
`;

const size = {
  minimum: css`
    font-size: 12px;
    height: 24px;
    padding: 6px;

    img {
      height: 12px;
      margin-right: 4px;
      width: 12px;
    }
  `,
  small: css`
    height: 36px;
    padding: 0px 28px;
  `,
  medium: css`
    height: 42px;
    padding: 0px 28px;
  `,
  large: css`
    height: 48px;
    padding: 0px 28px;
  `,
  extraLarge: css`
    height: 60px;
    padding: 10px 84px;
  `,
};

const state = {
  contained: css<ButtonProps>`
    background-color: ${({ color }) => color};
    border: transparent;
    color: ${({ colorText }) => colorText};
    justify-content: center;
    transition: 0.15s ease-in-out;

    &:hover,
    &:active,
    &:focus {
      opacity: 0.6;
      transition: 0.15s ease-in-out;
    }
  `,

  outline: css<ButtonProps>`
    background-color: transparent;
    border: 1px solid ${({ colorText }) => colorText};
    border-color: ${({ colorText }) => colorText ?? `${theme.colors?.grey4}`};
    color: ${({ colorText }) =>
      colorText ? colorText : `${theme.colors?.black}`};
    justify-content: center;

    &:hover,
    &:active,
    &:focus {
      opacity: 0.6;
      transition: 0.15s ease-in-out;
    }
  `,

  text: css<ButtonProps>`
    background-color: transparent;
    border: none;
    color: ${({ colorText }) =>
      colorText ? colorText : `${theme.colors?.info}`};
    font-size: 12px;
    justify-content: flex-start;
    padding: 0;
    transition: none;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }

    &:focus,
    &:active {
      outline: none;
    }
  `,
};

export const Btn = styled.button<ButtonProps>`
  ${switchProp(prop("as", "button"), {
    button: css`
      ${styles};
    `,
  })}

  span {
    font-size: 24px;
  }

  svg {
    max-height: 24px;
    max-width: 24px;
  }

  &[disabled],
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;

    svg,
    span {
      color: ${theme.colors?.grey3};
    }

    &:hover,
    &:active,
    &:focus {
      background-color: ${theme.colors?.grey3};
      transition: 0.15s ease-in-out;
    }
  }

  ${switchProp("variant", {
    contained: css`
      ${state.contained}
    `,
    outline: css`
      ${state.outline}
    `,
    text: css`
      ${state.text}

      svg, span {
        ${state.text}
      }
    `,
  })}

  ${switchProp("size", {
    minimum: css`
      ${size.minimum}
    `,
    small: css`
      ${size.small}
    `,
    medium: css`
      ${size.medium}
    `,
    large: css`
      ${size.large}
    `,
    extraLarge: css`
      ${size.extraLarge}
    `,
  })}
`;

export const StartIcon = styled.img`
  margin-right: 10px;
`;
export const EndIcon = styled.img`
  margin-left: 10px;
`;
