import { Container, ContainerHeader, IconsContainer } from './iconsMeaningStyle'
import { FOOD_ICONS } from 'constants/constants'
import SingleIcon from './SingleIcon'

export default function IconsMeaning() {

  const Header = "The meaning of our icons"

  return (
    <Container>
      <ContainerHeader>
        {Header.toLocaleUpperCase()}
      </ContainerHeader>
      <IconsContainer>
        {
          FOOD_ICONS.map((item: any, index: number) => (
            <SingleIcon requiredIcon={item} key={index} />
          ))
        }
      </IconsContainer>
    </Container>
  )
}
