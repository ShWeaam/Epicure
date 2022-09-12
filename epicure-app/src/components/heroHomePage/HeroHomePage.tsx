import SearchBar from 'components/searchBar/SearchBar'
import { HOME_PG_SENTENCE } from 'constants/constants';
import { HeaderFrame, HeroContainer, MainHeader, TransparentContainer } from './heroHomePageStyle'

export default function HeroHomePage() {
    return (
        <HeroContainer>
            <TransparentContainer>
                <HeaderFrame>
                    <MainHeader>
                        {HOME_PG_SENTENCE}
                    </MainHeader>
                </HeaderFrame>
                <SearchBar />
            </TransparentContainer>
        </HeroContainer>
    )
}
