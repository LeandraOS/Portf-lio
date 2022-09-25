import styled from "styled-components";

export const Image = styled.svg`
  width: 640px;
  height: 520px;

  @media screen and (max-width: 1024px) {
    width: 440px;
    height: 520px;
  }

  @media screen and (min-width: 300px) and (max-width: 640px){
    width: 360px;
  }
`;

export const Content = styled.div`
  margin-top: 48px;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 440px;
  }

  @media screen and (min-width: 300px) and (max-width: 640px){
    height: 244px;
  }

  

`;
