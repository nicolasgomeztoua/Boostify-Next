import styled from "styled-components";

export const Wrap = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-column-gap: 30px;
  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
    margin-top: -100px;
  }
`;
export const TextContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  text-align: left;
  max-width: 70%;
  justify-self: flex-end;
  @media screen and (max-width: 990px) {
    max-width: 70%;
    text-align: center;
    justify-self: center;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 56px;
  padding-bottom: 20px;
`;
export const TitleSpan = styled.span`
  color: #40e0d0;
`;
export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 100;
`;
export const ImageContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 990px) {
    justify-content: center;
  }
`;
