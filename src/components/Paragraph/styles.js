import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media screen and (min-width: 300px) and (max-width: 640px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 18px;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    
  }

  @media screen and (min-width: 300px) and (max-width: 640px) {
    font-size: 14px;
    
  }
`;
export const TitleHello = styled.h2`
  display: flex;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 2rem;
  font-size: 28px;

  @media screen and (min-width: 300px) and (max-width: 768px) {
    margin-bottom: 2.5rem;
    margin-top: 2rem;
  }

`;
