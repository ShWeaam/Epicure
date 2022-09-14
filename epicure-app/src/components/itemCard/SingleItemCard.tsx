import { CATEGORY_ICON_PATH, REDUX_STATES } from 'constants/constants';
import { MOBILE_TO_DESKTOP_THRESHOLD } from 'constants/styleConsts'
import SetWindowSize from 'helpers/setWindowSize';
import { DynamicStar } from 'react-dynamic-star'
import { Item, ItemDescription, ItemDetails, ItemIcon, ItemIconsContainer, ItemImg, ItemImgContainer, ItemName, ItemPrice } from './SingleItemCardStyle';

export default function SingleItemCard(props: any) {

    const windowSize = SetWindowSize();
    const item = props.item;
    const resturantsState = () => props.type === REDUX_STATES.RESTURANTS;
    const chefState = () => props.type === REDUX_STATES.CHEF_OF_THE_WEEK_RESTURANTS;
    const detailsAboutItem = item.chef ?? item.ingredients?.join(', ') ?? false;
    const foodTypeIconPath = item.category ? createIconPath(item.category) : false;

    let formatter = new Intl.NumberFormat('en-IL', {
        style: 'currency',
        currency: 'ILS',
        maximumFractionDigits: 0, // check support of this feature for browsers
    });

    const dynamicStarParams = {
        outlined: "#DE9200",
        width: windowSize > 1000 ? "40" : "30",
        height: windowSize > 1000 ? "40" : "30",
        rating: item.rating,
        fullStarColor: "#DE9200"
    }

    function createIconPath(icon: string) {
        return CATEGORY_ICON_PATH + icon.toLowerCase() + ".svg"
    }

    return (
        <Item key={item._id} >
            <ItemImgContainer>
                <ItemImg src={item.imgUrl} />
            </ItemImgContainer>
            <ItemDescription isResturant={resturantsState()} isChefOfTheWeek={chefState()}>
                <ItemName>
                    {item.name}
                </ItemName>
                {detailsAboutItem && !chefState() && <ItemDetails >
                    {detailsAboutItem}
                </ItemDetails>}
                <ItemIconsContainer>
                    {item.rating && resturantsState() && windowSize >= MOBILE_TO_DESKTOP_THRESHOLD &&
                        <DynamicStar {...dynamicStarParams} />}
                    {foodTypeIconPath && <ItemIcon src={foodTypeIconPath} />}
                    {item.price && <ItemPrice>
                        {formatter.format(item.price)}
                    </ItemPrice>}
                </ItemIconsContainer>
            </ItemDescription>
        </Item >
    )
}
