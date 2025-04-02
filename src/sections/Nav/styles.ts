import styled from "styled-components";
import { IcBrand } from "../../icons";
import theme from "../../styles/colors";

export type OpenProps = {
  $isOpen?: boolean;
};

export const Container = styled.div`
  align-items: center;
  background-color: ${theme.colors.black};
  box-shadow: 0 -11px 21px 0;
  display: flex;
  justify-content: space-between;
  padding: 15px 5%;
  position: relative;
`;

export const Menu = styled.div<OpenProps>`
  background: inherit;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "")};
  height: ${({ $isOpen }) => ($isOpen ? "calc(100vh - 70px)" : 0)};
  justify-content: center;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-align: center;
  transition: ease-in-out 0.5s;
  top: 70px;
  width: ${({ $isOpen }) => ($isOpen ? "100%" : 0)};
  z-index: 2;

  ul {
    padding-top: 10px;
    transition: ease-in-out 0.4s;
    width: 100%;

    li {
      padding: 8px;
      width: 100%;

      a {
        color: ${theme.colors.white};
        font-size: 18px;
        font-weight: 700;
        padding: 9px 140px;
        width: 100%;

        &:hover {
          color: ${theme.colors.black};
          opacity: 0.8;
        }
      }
    }
  }

  @media (min-width: 768px) {
    background-color: inherit;
    display: flex;
    height: 40px;
    position: static;
    width: auto;

    ul {
      background-color: inherit;
      padding-top: 0;
      display: flex;
      width: auto;

      li {
        border-top: 0;
        a {
          border-bottom: 1px solid transparent;
          color: ${theme.colors.white};
          font-size: 14px;
          font-weight: 700;
          padding: 5px;
          transition: ease-in-out 0.4s;

          &:hover {
            border-bottom: 1px solid ${theme.colors.black};
            color: ${theme.colors.grey2};
            padding: 5px;
          }
        }

        & + li {
          a {
            margin-left: 14px;
          }
        }
      }
    }
  }
`;

export const Brand = styled.a`
  background-image: url(${IcBrand});
  background-repeat: no-repeat;
  background-size: 32px;
  background-color: white;
  background-position: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 42px;
  transition: ease-in 0.4s;
  width: 42px;

  &:hover {
    opacity: 0.6;
  }
`;
