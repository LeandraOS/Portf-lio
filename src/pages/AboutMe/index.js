import React from "react";
import { Paragraph } from "../../components/Paragraph";
import { Polaroide } from "../../components/Polaroide";
import { Title } from "../../components/Title";
import { Container, Wrapper, WrapperPolaroide } from "./styles";
import picture from "../../components/assets/Icons/IAndComputer.jpeg";
import computer from "../../components/assets/Icons/ITumblr.png";

export const AboutMe = () => {
  return (
    <>
      <Wrapper>
        <Title title={"about me"}/>
        <Container>
          <WrapperPolaroide>
            <Polaroide url={`https://github.com/leandraOS.png`} />
            <Polaroide url={computer} />
          </WrapperPolaroide>
          <Polaroide url={picture} />
          <Paragraph></Paragraph>
        </Container>
      </Wrapper>
    </>
  );
};
