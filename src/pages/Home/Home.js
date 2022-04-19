import React from 'react'
import { IconMy } from '../../components/assets/IconMy/IconMy'
import { Name } from '../../components/Name'
import { Wrapper, WrapperName } from './styles'

export const Home = () => {
  return (
    <Wrapper>
        <WrapperName>
      <Name/>
      </WrapperName>
      <IconMy />
    </Wrapper>

  )
}

