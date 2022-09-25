import React, { useContext } from 'react'
import { IconMy } from '../../components/assets/IconMy/IconMy'
import { Email } from '../../components/assets/Icons/email'
import { Github } from '../../components/assets/Icons/github'
import { InstagramIcon } from '../../components/assets/Icons/InstagramIcon'
import { LinkedinIcon } from '../../components/assets/Icons/LinkedinIcon'
import { ThemeContext } from "styled-components";

import { Name } from '../../components/Name'
import { SearchFake } from '../../components/SearchFake'
import { Wrapper, WrapperIcons, WrapperName } from './styles'


export const Home = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Wrapper>
      <WrapperName>
      <Name/>
      <WrapperIcons>
      <InstagramIcon color={`${colors.text}`} />
      <LinkedinIcon color={`${colors.text}`}/>
      <Email color={`${colors.text}`}/>
      <Github color={`${colors.text}`}/>
      </WrapperIcons>
      <SearchFake />
      </WrapperName>
      <IconMy />

    </Wrapper>

  )
}

