import {
  TextField as InputText,
  InputLabel as MuiInputLabel,
  Select as SelectMui,
} from "@mui/material";
import { styled as StyleMui } from "@mui/system";
import styled from "styled-components";

export const ContainerNewProperty = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  width: 100%;
`;

export const Flex = styled.div<{ $flexEnd?: boolean }>`
  display: flex;
  justify-content: ${({ $flexEnd }) => ($flexEnd ? "flex-end" : "")};
  gap: 10px;
  width: 100%;

  @media (max-width: 1088px) {
    flex-direction: column;
  }
`;

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

export const Select = StyleMui(SelectMui)({
  // Borda permanente
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#273240 !important",
  },

  // Foco
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#273240 !important",
    boxShadow: "0 0 0 1px #273240",
  },

  "& .MuiSvgIcon-root": {
    color: "#273240 !important",
  },
  // Texto selecionado
  "& .MuiSelect-select": {
    color: "#273240 !important",
  },
});

export const MenuProps = {
  PaperProps: {
    sx: {
      "& .MuiMenuItem-root": {
        color: "#273240",
        "&:hover": {
          backgroundColor: "#27324020",
        },
        "&.Mui-selected": {
          backgroundColor: "#27324010",
        },
      },
    },
  },
};

export const InputLabel = StyleMui(MuiInputLabel)({
  backgroundColor: "#fff",
  color: "#273240 !important",

  "&.Mui-focused": {
    color: "#273240 !important",
  },
});

export const ModalSuccess = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Icon = styled.img`
  margin-top: 20px;
`;

export const ButtonDelete = styled.button`
  background-color: #273240;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  font-size: 12px;
  height: 20px;
  right: -8px;
  top: -8px;
  position: absolute;
  width: 20px;
`;

export const ImagePreview = styled.img`
  border-radius: 4px;
  height: 110px;
  object-fit: cover;
  width: 110px;
`;
