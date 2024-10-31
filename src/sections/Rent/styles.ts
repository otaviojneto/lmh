import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 10%;
  position: relative;

  h1 {
    text-align: center;
    font-size: 22px;
    line-height: 38px;
    margin-bottom: 30px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 20px;

  @media (max-width: 874px) {
    justify-content: center;
    gap: 40px 40px;
  }
`;
