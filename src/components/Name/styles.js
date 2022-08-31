import styled from "styled-components";

export const Title = styled.h1`
    color: ${props => props.theme.colors.text};
    font-family: 'News Cycle', sans-serif;
    font-size: 56px;
    text-transform: uppercase;
    @media screen and (max-width: 800px) {
        margin: 4rem 0 1rem 0;
        font-size: 44px;
    }
`

