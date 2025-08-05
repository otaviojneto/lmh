import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["$openMenu"].includes(prop),
})<{ $openMenu: boolean }>`
  background-color: ${({ theme }) => theme?.colors?.white};
  border-right: 1px solid ${({ theme }) => theme?.colors?.gray1};
  height: calc(100vh - 70px);
  transition: ease-in-out 0.15s;
  position: relative;
  width: ${({ $openMenu }) => ($openMenu ? "247px" : "10px")};
`;

export const List = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["$openMenu", "$colorChanged"].includes(prop),
})<{ $openMenu: boolean; $colorChanged: boolean }>`
  color: ${({ $openMenu, $colorChanged, theme }) =>
    $openMenu && $colorChanged ? theme?.colors?.text : "transparent"};
  display: ${({ $openMenu }) => ($openMenu ? "flex" : "none")};
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  background-color: transparent;
  color: ${({ theme }) => theme?.colors?.text};
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  padding: 10px 24px;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme?.colors?.text};
    color: ${({ theme }) => theme?.colors?.white};
  }

  &.active {
    background-color: ${({ theme }) => theme?.colors?.text};
    color: ${({ theme }) => theme?.colors?.white};
  }
`;

export const Button = styled.div.withConfig({
  shouldForwardProp: (prop) => !["$openMenu"].includes(prop),
})<{ $openMenu: boolean }>`
  cursor: pointer;
  background-color: ${({ theme }) => theme?.colors?.white};
  border: ${({ theme }) => theme?.colors?.gray1} solid 1px;
  border-radius: 50%;
  height: 22px;
  right: ${({ $openMenu }) => ($openMenu ? "-10px" : "")};
  font-size: 12px;
  position: absolute;
  transition: ease-in-out 0.2s;
  top: 56px;
  width: 22px;
  z-index: 1;

  svg {
    height: 20px;
    width: 20px;
  }
`;
