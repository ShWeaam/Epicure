import React from 'react'
import { ChefImage, NameContainer, SingleChefContainer } from './singleChefStyle'

interface Props {
  name: string,
  img: string
}

export default function SingleChef(props: Props) {

  return (
    <SingleChefContainer>
      <ChefImage src={props.img} />
      <NameContainer>
        {props.name}
      </NameContainer>
    </SingleChefContainer>
  )
}
