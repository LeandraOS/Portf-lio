import React, { useContext } from "react";

import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { Dots } from "../assets/dots";

const Header = ({toggleTheme}) => {

    const { colors, title, dots } = useContext(ThemeContext);
    console.log(`${dots.primary}`)
    return(
        <Container>
            <Dots primary={`${dots.primary}`} secondary={`${dots.secondary}`} terciary={`${dots.terciary}`}/>
            <Switch
            onChange={toggleTheme} 
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}/>
        </Container>
    );
};

export default Header;