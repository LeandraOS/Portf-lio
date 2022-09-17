import React from "react";
import { Paragraph } from "../../components/Paragraph";
import { Polaroide } from "../../components/Polaroide";
import { Title } from "../../components/Title";
import { Container, Wrapper } from "./styles";

export const AboutMe = () => {
  return (
    <>
      <Wrapper>
        <Title />
        <Container>
        <Polaroide></Polaroide>
        <Paragraph></Paragraph>
        </Container>
      </Wrapper>
    </>
  );
};
