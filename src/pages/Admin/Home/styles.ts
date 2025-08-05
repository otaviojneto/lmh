import styled from "styled-components";

export const Body = styled.div`
  background-color: ${({ theme }) => theme?.colors?.white};
  display: flex;
`;

export const Container = styled.div`
  padding: 20px;
  width: 100%;
`;
