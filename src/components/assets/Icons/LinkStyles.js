import styled from "styled-components";

export const LinkAnimation = styled.a`
  &:hover {
    transform: translateY(-6px);
    transition: 0.3s;
  }

  @media screen and (max-width: 768px) {
    svg {
      width: 60px;
    }

    @media screen and (min-width: 300px) and (max-width: 640px) {
      svg {
        width: 40px;
      }
    }
  }
`;
