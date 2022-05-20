import styled from "styled-components";

export const LinkAnimation = styled.a`
    &:hover {
    transform: translateY(-4px);
    filter: drop-shadow(0.1px 0.1px 0 ${props => props.theme.colors.text});
  }
`;