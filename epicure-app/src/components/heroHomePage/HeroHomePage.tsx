import SearchBar from 'components/searchBar/SearchBar'
import { HOME_PG_SENTENCE } from 'constants/constants';
import { HeaderFrame, HeroContainer, MainHeader, TransparentContainer } from './heroHomePageStyle'

export default function HeroHomePage() {
    return (
        <HeroContainer>
            <TransparentContainer>
                <HeaderFrame>
                    <MainHeader>
                        {HOME_PG_SENTENCE.line1}
                        {<br />}
                        {HOME_PG_SENTENCE.line2}
                    </MainHeader>
                </HeaderFrame>
                <SearchBar />
            </TransparentContainer>
        </HeroContainer>
    )
}
