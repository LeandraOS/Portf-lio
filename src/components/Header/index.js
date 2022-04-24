import React, { useContext } from "react";

import { Container, Links, WrapperLinks } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { Dots } from "../assets/Icons/dots";

const Header = ({toggleTheme}) => {

    const { colors, title, dots } = useContext(ThemeContext);
    return(
        <Container>
            <Dots primary={`${dots.primary}`} secundary={`${dots.secundary}`} terciary={`${dots.terciary}`}/>
            <WrapperLinks>
                <Links className="teste" href="https://www.w3schools.com">About me</Links>
                <Links className="teste" href="https://www.w3schools.com">Projects</Links>
                <Links className="teste" href="https://www.w3schools.com">Communities</Links>
                <Links className="teste" href="https://www.w3schools.com">Contacts</Links>
            </WrapperLinks>
            <Switch
            onChange={toggleTheme} 
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={25}
            width={50}
            handleDiameter={16}
            offColor={dots.primary}
            onColor={'#BD939F'}
            />
            
        </Container>
    );
};

export default Header;