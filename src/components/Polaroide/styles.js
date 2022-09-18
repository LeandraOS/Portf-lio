import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: colum;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 28rem;
  width: 25rem;
  margin-top: 4rem;
  box-shadow: 0px 0px 10px
    rgba(0, 0, 0, ${(props) => props.theme.colors.shadow});

  &:hover {
    transition: transform 0.3s ease;
    transform: scale(1.02);
  }
  @media screen and (min-width: 300px) and (max-width: 640px) {
    height: 22rem;
    width: 18rem;
}
`;
export const Icons = styled.div``;

export const Icon = styled.img`
  border-radius: 0.2rem;
  height: 20.5rem;
  width: 20rem;

  @media screen and (min-width: 300px) and (max-width: 640px) {
    height: 15.5rem;
    width: 15.5rem;
  }

`;
