import SetWindowSize from 'helpers/setWindowSize'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { CustomNavLink, LinkButton, LinksContainer } from './headerLinksStyle';

export default function HeaderLinks() {
    const windowSize = SetWindowSize();
    const navLinkStyle = {
        textDecoration: 'none',
        color: 'black'
    }
    const navDecoration= "3px solid RGB(222,146,0,90)"
    
    // const [resturantsState, setResturantsState] = useState(false);
    // const [chefsState, setChefsState] = useState(false);

    // function setActivePage(activePage: string) {
    //     if (activePage === "resturants") {
    //         setResturantsState(true);
    //         setChefsState(false);
    //         return;
    //     }
    //     setChefsState(true);
    //     setResturantsState(false);
    // }

    // @TODO change from this ugly to more elegant, more scalable links component. had problem when pressing on the logo how to update state here. 
    return (
        <LinksContainer>
            <LinkButton>
                <NavLink to="/resturants" style={({ isActive }) => ({
                    ...navLinkStyle,
                    borderBottom: isActive ? navDecoration : 'none',
                })}>
                    Resturants
                </NavLink>
            </LinkButton>
            <LinkButton>
                <NavLink to="/chefs" style={({ isActive }) => ({
                    borderBottom: isActive ? navDecoration : 'none',
                    ...navLinkStyle,
                })}>
                    Chefs
                </NavLink>
            </LinkButton>
        </LinksContainer>
    )
}
