import styled from "styled-components";
import theme from "../../styles";

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 780px;

  @media (max-width: ${theme?.breakpoints?.sm});
  padding: 0 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
