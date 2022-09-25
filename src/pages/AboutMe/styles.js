import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  height: 110vh;

  @media screen and (max-width: 1024px) {
    height: 100%;
    padding: 2rem 2rem 0 2rem;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
  }
  @media screen and (min-width: 300px) and (max-width: 640px) {
    flex-direction: column;
    gap: 1.5rem;

  }
`;
export const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width: 1024px) {
    gap: 1rem;

  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    padding-bottom: 1rem;

  }
  @media screen and (min-width: 300px) and (max-width: 640px) {
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 1rem;

  }
`;
export const WrapperPolaroide = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 300px) and (max-width: 640px) {
    flex-direction: row;
    gap: 2rem;
  }
`;
