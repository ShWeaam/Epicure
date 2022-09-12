import SingleChef from 'components/singleChef/SingleChef';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChefsContainer } from './chefsStyle';

export default function Chefs() {

  const chefs = useSelector((state: any) => state.chefs.value);

  return (
    <ChefsContainer>
      {chefs.map((chef: any, key: number) => (
        <SingleChef key={key} name={chef.name} img={chef.imgUrl} />
      ))}
    </ChefsContainer>
  )
}
