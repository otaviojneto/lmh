import { Button as BtnMui, ButtonProps } from "@mui/material";
import styled from "styled-components";
import { TextField as InputText } from "@mui/material";
import { styled as StyleMui } from "@mui/system";

export const TextField = StyleMui(InputText)({
  "& label.Mui-focused": {
    color: "#273240",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#273240",
    },
    "&:hover fieldset": {
      borderColor: "#273240",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#273240",
    },
  },
});

export const AccessLoginContainer = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme?.colors?.gray1};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  width: 600px;

  @media (max-width: 768px) {
    border: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 320px;
`;

export const StyleButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    text-transform: capitalize;
  }
`;

export const Logo = styled.img`
  height: 154px;
  width: 115px;
`;

export const Title = styled.h1`
  font-size: 16px;
`;

export const Text = styled.p`
  font-size: 12px;
`;

export const Button = styled(BtnMui)<ButtonProps>(({ theme }) => ({
  color: `${theme.colors?.white} !important`,
  backgroundColor: `${theme.colors?.text} !important`,
  "&:hover": {
    backgroundColor: "#3A4858 !important",
  },
}));
