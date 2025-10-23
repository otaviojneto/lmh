import styled from "styled-components";
import theme from "../../styles/colors";

export const Button = styled.button`
  img {
    width: 100%;
  }
`;

export const Rooms = styled.div`
  padding: 0 20px 20px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px;
  }
`;

export const Image = styled.img`
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
