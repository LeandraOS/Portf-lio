import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${props => props.theme.colors.primary};
    height: 100vh;

    

`
export const Container = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 5rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;

    }
    @media screen and (min-width: 300px) and (max-width: 640px) {
        flex-direction: column;
    }

   
`

