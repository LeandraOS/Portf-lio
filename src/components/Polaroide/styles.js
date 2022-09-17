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
`;
export const Icons = styled.div``;
export const Icon = styled.img`
  border-radius: 0.2rem;
  height: 20.5rem;
  width: 20rem;
`;
