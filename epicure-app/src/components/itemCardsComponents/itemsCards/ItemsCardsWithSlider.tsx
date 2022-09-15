import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSelector } from 'react-redux';
import SetWindowSize from "helpers/setWindowSize";
import checkLegalPropsAndInRange from "helpers/checkLegalPropsAndInRange";
import { ItemsContainer } from "./itemsCardsStyle";
import SingleItemCard from "components/itemCardsComponents/itemCard/SingleItemCard";
import { REDUX_STATES } from "constants/constants";

interface Props {
    requiredState?: string,
    cardsToShow: string | number
}

export default function ItemsCardstWithSlider(props: Props) {

    const windowSize = SetWindowSize();
    const itemsList = useSelector((state: any) => {
        switch (props.requiredState) {
            case REDUX_STATES.RESTURANTS:
                return state.resturants.value;

            case REDUX_STATES.CHEF_OF_THE_WEEK_RESTURANTS:
                return state.chefs.chefOfTheWeek.resturants;

            case REDUX_STATES.DISHES:
                return state.dishes.value;

            default:
                return undefined
        }
    });
    const swiperSettings = {
        slidesPerView: 0.004 * windowSize,
        spaceBetween: 25,
        loop: true,
        className: "mySwiper"
    }

    return (
        <ItemsContainer directionRow={true}>
            <Swiper {...swiperSettings}>
                {itemsList && itemsList.map((item: any, index: number) => (
                    checkLegalPropsAndInRange(props.cardsToShow, index)
                    &&
                    <SwiperSlide key={index}>
                        <SingleItemCard item={item} type={props.requiredState} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ItemsContainer>
    )
}
