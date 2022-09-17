import React from 'react'
import { DotsMini } from '../assets/Icons/DotsMini'
import { Container, Icon, Icons } from './styles'


export const Polaroide = () => {
    return(
        <Container>
            <Icons>
            < Icon src={`https://github.com/leandraOS.png`} />
            <DotsMini />
            </Icons>
        </Container>
    )
}