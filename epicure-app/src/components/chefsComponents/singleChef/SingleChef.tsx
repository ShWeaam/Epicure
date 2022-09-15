import { APP_URLS } from 'constants/constants';
import { useLocation } from 'react-router-dom'
import { ChefImage, NameContainer, SingleChefContainer } from './singleChefStyle'

interface Props {
  name: string,
  img: string
}

export default function SingleChef(props: Props) {

  const location = useLocation();

  return (
    <SingleChefContainer inHomePage={location.pathname === APP_URLS.HOME}>
      <ChefImage src={props.img} />
      <NameContainer>
        {props.name}
      </NameContainer>
    </SingleChefContainer>
  )
}
