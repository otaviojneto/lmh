import styled from "styled-components";
import theme from "../../styles/colors";

export const Container = styled.div`
  background-color: ${theme.colors.black};
  box-shadow: 0 17px 27px 10px;
  display: flex;
  justify-content: space-evenly;
  padding: 30px;

  div {
    text-align: center;

    a {
      color: ${theme.colors.white};
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    align-items: center;
    display: grid;
    gap: 16px;
  }
`;

export const WhatsBase = styled.div`
  @media (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    justify-content: center;
  }
`;

export const Contact = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const Whats = styled.div`
  align-items: center;
  display: flex;

  img {
    margin-right: 10px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
`;
