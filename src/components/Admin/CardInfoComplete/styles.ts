import styled from "styled-components";

export const CardInfoCompleteContainer = styled.div`
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  gap: 20px;
  padding: 20px;

  button {
    text-transform: capitalize;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 13px;

  strong {
    font-size: 14px;
  }
`;

export const TextValue = styled(Text)`
  max-width: 300px;
`;

export const Flex = styled.div<{ $flexEnd?: boolean }>`
  display: flex;
  gap: 10px;
  justify-content: ${({ $flexEnd }) => ($flexEnd ? "flex-end" : "")};

  @media (max-width: 1088px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  width: 100%;
`;

export const StyleButton = styled(Info)`
  gap: 24px;
  margin-top: 20px;
`;

export const Image = styled.img`
  height: 280px;
  object-fit: cover;
  width: 180px;
`;
