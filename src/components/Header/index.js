import React, { useContext } from "react";

import { Container, Links } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Dots } from "../assets/Icons/dots";

const Header = ({ toggleTheme }) => {
  const pages = [
    { title: "About me", url: "/"},
    { title: "Projects", url: "/" },
    { title: "Communities", url: "/" },
    { title: "Contacts", url: "/" },
  ];

  const { title, dots } = useContext(ThemeContext);
  return (
    <Container>
      <Dots
        primary={`${dots.primary}`}
        secundary={`${dots.secundary}`}
        terciary={`${dots.terciary}`}
      />
        {pages.map((page) => {
          return (
              <Links url={page.url}>{page.title}</Links>
          );
        })}      
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={25}
        width={50}
        handleDiameter={16}
        offColor={dots.primary}
        onColor={"#BD939F"}
      />
    </Container>
  );
};

export default Header;
