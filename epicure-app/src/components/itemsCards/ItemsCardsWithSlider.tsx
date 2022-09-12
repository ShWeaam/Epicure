import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSelector } from 'react-redux';
import SetWindowSize from "helpers/setWindowSize";
import checkLegalPropsAndInRange from "helpers/checkLegalPropsAndInRange";
import { ItemsContainer } from "./itemsCardsStyle";
import SingleItemCard from "components/itemCard/SingleItemCard";

interface Props {
    requiredState?: string,
    cardsToShow: string | number
}

export default function ItemsCardstWithSlider(props: Props) {

    const windowSize = SetWindowSize();
    const itemsList = useSelector((state: any) => {
        switch (props.requiredState) {
            case "resturants":
                return state.resturants.value;
            case "chefOfTheWeekResturants":
                return state.chefs.chefOfTheWeek.resturants;
            case "dishes":
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
