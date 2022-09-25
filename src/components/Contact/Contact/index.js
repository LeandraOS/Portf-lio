import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Contacts } from "../../assets/Icons/Contacts.js";
import { Send } from "../../assets/Icons/Send.js";
import { Title } from "../../Title/index.js";

import { Container, ContainerTitle} from "./styles.js";

export const Contact = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <ContainerTitle>
        <Send />
      <Title title={"contact me"}/>
      </ContainerTitle>
      <Contacts color={`${colors.contact}`}/>
    </Container>
  );
};
