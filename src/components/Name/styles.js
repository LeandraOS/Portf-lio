import styled from "styled-components";

export const Title = styled.h1`
    color: ${props => props.theme.colors.text};
    font-family: 'News Cycle', sans-serif;
    font-size: 56px;
    text-transform: uppercase;
   
    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (min-width: 300px) and (max-width: 640px) {
        margin: 4rem 0 1rem 0;
        font-size: 44px;
    }

    
`

