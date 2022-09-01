import styled from "styled-components";

export const LinkAnimation = styled.a`
    &:hover {
    transform: translateY(-6px);
    transition: .3s;
  }

@media screen and (max-width: 800px) {
  svg{
    width: 40px;
  }
}
`
