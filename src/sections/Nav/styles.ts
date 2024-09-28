import styled from "styled-components";
import { IcBrand } from "../../icons";
import theme from "../../styles/colors";

export type OpenProps = {
  isOpen?: boolean;
};

export const Container = styled.div`
  align-items: center;
  background-color: ${theme.colors.grey5};
  box-shadow: 0 -11px 21px 0;
  display: flex;
  justify-content: space-between;
  padding: 15px 5%;
  position: relative;
`;

export const Menu = styled.div<OpenProps>`
  background: inherit;
  display: ${({ isOpen }) => (isOpen ? "flex" : "")};
  height: ${({ isOpen }) => (isOpen ? "calc(100vh - 70px)" : 0)};
  justify-content: center;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-align: center;
  transition: ease-in-out 0.5s;
  top: 70px;
  width: ${({ isOpen }) => (isOpen ? "100%" : 0)};
  z-index: 2;

  ul {
    transition: ease-in-out 0.4s;
    width: 100%;

    li {
      padding: 8px;
      width: 100%;

      a {
        color: ${theme.colors.secondary};
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
      display: flex;
      width: auto;

      li {
        background-color: ${theme.colors.grey5};
        border-top: 0;
        a {
          border-bottom: 1px solid transparent;
          color: ${theme.colors.secondary};
          font-weight: 700;
          padding: 5px;
          transition: ease-in-out 0.4s;

          &:hover {
            border-bottom: 1px solid ${theme.colors.black};
            color: ${theme.colors.black};
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
  background-size: 40px;
  height: 40px;
  transition: ease-in 0.4s;
  width: 40px;

  &:hover {
    opacity: 0.6;
  }
`;
