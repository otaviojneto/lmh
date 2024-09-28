import styled from "styled-components";

export const Struture = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid #000;
  width: 100%;
  padding: 7px 0;
  font-size: 16px;
  margin-bottom: 30px;
  color: #000000;
  outline: none;
  transition: borber-color 0.3s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 12px;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #4d92ed, #868686);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.3s;
  font-size: 16px;
`;
