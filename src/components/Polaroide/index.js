import React from 'react'
import { DotsMini } from '../assets/Icons/DotsMini'
import { Container, Icon, Icons } from './styles'


export const Polaroide = ({url}) => {
    return(
        <Container>
            <Icons>
            < Icon src={url} />
            <DotsMini />
            </Icons>
        </Container>
    )
}