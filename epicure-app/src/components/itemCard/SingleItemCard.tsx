import { CATEGORY_ICON_PATH } from 'constants/constants';
import { MOBILE_TO_DESKTOP_THRESHOLD } from 'constants/styleConsts'
import SetWindowSize from 'helpers/setWindowSize';
import { DynamicStar } from 'react-dynamic-star'
import { Item, ItemDescription, ItemDetails, ItemIcon, ItemIconsContainer, ItemImg, ItemImgContainer, ItemName, ItemPrice } from './SingleItemCardStyle';

export default function SingleItemCard(props: any) {

    const windowSize = SetWindowSize();
    const item = props.item;
    const isResturant = () => props.type === "resturants";
    const details = isResturant() ? item.chef : item.ingredients.join(', ');
    const iconPath = item.category ? createIconPath(item.category) : false;

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
            <ItemDescription isResturant={isResturant()}>
                <ItemName>
                    {item.name}
                </ItemName>
                <ItemDetails >
                    {details}
                </ItemDetails>
                <ItemIconsContainer>
                    {item.rating && windowSize >= MOBILE_TO_DESKTOP_THRESHOLD &&
                        <DynamicStar {...dynamicStarParams} />}
                    {iconPath && <ItemIcon src={iconPath} />}
                    {item.price && <ItemPrice>
                        {formatter.format(item.price)}
                    </ItemPrice>}
                </ItemIconsContainer>
            </ItemDescription>
        </Item >
    )
}
