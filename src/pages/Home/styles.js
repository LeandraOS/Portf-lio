import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: min-content;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: row;
    column-gap: 8rem;

    @media screen and (max-width: 800px) {
        margin-top: 1rem;
        max-width: fit-content;
        flex-direction: column-reverse;
        align-items: center;
        overflow: hidden;
    }
    @media screen and (max-width: 1024px) {
        height: fit-content;
    }
`
export const WrapperName = styled.div`
    flex-direction: column;
    gap: 5rem;
    width: max-content;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    
    @media screen and (max-width: 800px) {
        gap: 2rem;

    }
`;

export const WrapperIcons = styled.div`
    display: flex;
    flex-direction: line;
    justify-content: center;
    gap: 1.8rem;
    cursor: pointer;
    
`;
