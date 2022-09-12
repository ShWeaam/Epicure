import { FOOD_ICONS_PATH } from 'constants/constants';
import { MOBILE_TO_DESKTOP_THRESHOLD } from 'constants/styleConsts';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import SetWindowSize from 'helpers/setWindowSize';
import React from 'react'
import { Icon, IconCard, IconTitle } from './iconsMeaningStyle'


export default function SingleIcon(props: any) {

    const windowSize = SetWindowSize();
    const requiredIcon = props.requiredIcon.toLowerCase();
    const icon = FOOD_ICONS_PATH + requiredIcon + ".svg"
    const iconBig = FOOD_ICONS_PATH + requiredIcon + "Big.svg"

    return (
        <IconCard>
            <Icon src={windowSize < MOBILE_TO_DESKTOP_THRESHOLD ? icon : iconBig} />
            <IconTitle>
                {capitalizeFirstLetter(requiredIcon)}
            </IconTitle>
        </IconCard>)
}
