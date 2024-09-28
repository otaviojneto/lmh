import styled from "styled-components";
import { IcClose, IcCloseGrey } from "../../icons";
import theme from "../../styles/colors";

export const Button = styled.button`
  img {
    width: 100%;
  }
`;

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;

export const Container = styled.div`
  background-color: ${theme.colors.ice};
  border-radius: 8px;
  height: 90%;
  margin: 10px auto;
  padding: 14px;
  overflow-y: auto;
  width: 1000px;

  @media (max-width: 765px) {
    height: 100%;
    margin: auto;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Close = styled.img`
  cursor: pointer;
  height: 24px;
  width: 24px;
`;

export const Content = styled.div``;

export const Rooms = styled.div`
  padding: 20px;
`;

export const Image = styled.img`
  max-height: 420px;
  object-fit: cover;
  max-width: 100%;
`;

export const Infos = styled.div`
  padding: 20px;

  img {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  gap: 4px;
`;

export const Text = styled.p`
  color: #273240;
  font-weight: 600;
  font-size: 16px;
  min-width: 100px;
`;

export const TextDescription = styled.p`
  color: #273240;
  font-weight: 400;
  font-size: 14px;
`;
