import styled from "styled-components";
import { Switch } from "@mui/material";

export const ConatinerNav = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme?.colors?.white};
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.gray1};
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  width: 100%;
`;

export const Brand = styled.img`
  height: 42px;
  width: 36px;
`;

export const Out = styled.button`
  background-color: transparent;
  padding: 8px;
`;

export const BlackSwitch = styled(Switch)`
  & .MuiSwitch-switchBase {
    color: black; /* Cor da "bolinha" quando desativado */
  }

  & .MuiSwitch-track {
    background-color: black; /* Cor da trilha quando desativado */
  }

  & .MuiSwitch-switchBase.Mui-checked {
    color: ${({ theme }) =>
      theme?.colors?.white}; /* Usa a cor padrão quando ativado */
  }

  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: ${({ theme }) => theme?.colors?.gray1};
  }
`;
