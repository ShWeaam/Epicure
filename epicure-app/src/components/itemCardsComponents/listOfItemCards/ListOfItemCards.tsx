import getNeededComponentWithParams from 'helpers/getNeededComponentWithParams'
import { useLocation } from 'react-router-dom'
import { Container, ContainerTitle } from './listOfItemCardsStyle';

interface Props {
  title?: string,
  requiredState: string,

}

export default function ListOfItemCards(props: Props) {
  const location = useLocation();
  const NeededComponentWithParams = getNeededComponentWithParams(location);
  const componentParams = {
    cardsToShow: NeededComponentWithParams.cardsToShow,
    requiredState: props.requiredState
  }
  const DynamicComponentTypeForItemsList = NeededComponentWithParams.ComponentToShow;

  return (
    <Container>
      {props.title && <ContainerTitle>
        {props.title.toUpperCase() + ":"}
      </ContainerTitle>
      }
      <DynamicComponentTypeForItemsList {...componentParams} />
    </Container>

  )
}
