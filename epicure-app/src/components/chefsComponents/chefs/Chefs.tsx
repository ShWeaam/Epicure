import SingleChef from 'components/chefsComponents/singleChef/SingleChef';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ChefsContainer } from './chefsStyle';

export default function Chefs() {

  const chefs = useSelector((state: any) => state.chefs.value);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ChefsContainer>
      {chefs.map((chef: any, key: number) => (
        <SingleChef key={key} name={chef.name} img={chef.imgUrl} />
      ))}
    </ChefsContainer>
  )
}
