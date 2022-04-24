import styled from "styled-components";

export const Container = styled.div`
    height: 5.5rem;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    `
export const WrapperLinks = styled.nav`
    display: flex;
    gap: 7rem;

`

export const Links = styled.a`
    display: inline-block;
    position: relative;
    font-size: 20px;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
      
      
      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 3px;
        top: 32px;
        left: 0;
        background-color: ${props => props.theme.colors.text};;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.5s ease;
        }
      
      &:hover::before {
        transform: scaleX(1);
`;
