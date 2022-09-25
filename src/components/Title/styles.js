import styled from "styled-components";

export const TitleSection = styled.h2`
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    text-align: center;
    padding-top: 4rem;

    @media screen and (min-width: 300px) and (max-width: 640px) {
        font-size: 20px;
        padding-bottom: 1rem;
  }

  @media screen and (max-width: 768px){
    padding-bottom: 1.5rem;
    
  }

`