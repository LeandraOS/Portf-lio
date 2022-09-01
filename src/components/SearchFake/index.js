import React from 'react'
import { Text, Wrappper } from './styles'
import { Mic } from '../assets/Icons/Mic'
import { Search } from '../assets/Icons/Search'

export const SearchFake = () => {
  return (
    <Wrappper href='https://fonts.google.com/'>
        <Mic />
        <Text>
        More about me
        </Text>
        <Search/>
    </Wrappper>
    

  )
}


