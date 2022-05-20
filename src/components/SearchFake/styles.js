import styled from "styled-components";

export const Wrappper = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    width: 350px;
    border-radius: 50px;
    margin-top: 20px;
    background: ${props => props.theme.dots.secundary };
    cursor: pointer;
    text-decoration: none;
    &:hover {
        transition: transform .1s ease;
        transform: scale(1.02);

    }
    `;

export const Text = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #555;
    font-size: 18px;
`