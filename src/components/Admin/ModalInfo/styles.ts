import styled from "styled-components";

export const ModalContainer = styled.div<{ $width?: number }>`
  background-color: #ffffff;
  border-radius: 4px;
  height: auto;
  max-width: ${({ $width }) => ($width ? $width : "600")}px;
  margin: 20% auto;
  outline: none;
  padding: 20px;
  width: 100%;

  &:focus {
    outline: none;
  }

  button {
    text-transform: capitalize;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Position = styled.div`
  display: flex;
  flex: 0.55;
`;

export const Icon = styled.img`
  cursor: pointer;
`;
