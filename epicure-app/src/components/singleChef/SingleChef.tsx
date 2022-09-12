import { HOME_PATH } from 'constants/constants';
import React from 'react'
import { useLocation } from 'react-router-dom'
import { ChefImage, NameContainer, SingleChefContainer } from './singleChefStyle'

interface Props {
  name: string,
  img: string
}

export default function SingleChef(props: Props) {

  const location = useLocation();

  return (
    <SingleChefContainer inHomePage={location.pathname === HOME_PATH}>
      <ChefImage src={props.img} />
      <NameContainer>
        {props.name}
      </NameContainer>
    </SingleChefContainer>
  )
}
