import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: colum;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 17.7rem;
  width: 14rem;
  margin-top: 1rem;
  box-shadow: 0px 0px 10px
    rgba(0, 0, 0, ${(props) => props.theme.colors.shadow});

  &:hover {
    transition: transform 0.3s ease;
    transform: scale(1.02);
  }
  @media screen and (min-width: 300px) and (max-width: 640px) {
    height: 14rem;
    width: 10rem;
  }
`;
export const Icons = styled.div``;

export const Icon = styled.img`
  height: 12.5rem;
  width: 11.4rem;
  object-fit: cover;

  @media screen and (min-width: 300px) and (max-width: 640px) {
    height: 8.5rem;
    width: 8.5rem;
  }
`;
