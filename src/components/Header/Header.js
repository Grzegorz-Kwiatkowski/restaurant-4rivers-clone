import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'

import { MainContext } from '../../Contexts/Contexts'

import {
    HeaderContainer, HeaderLink, HeaderList, HeaderListItem,
    HeaderLogoWrapper, HeaderNav, HeaderAlink, OrderBtnWrapper,
    BasketWrapper, BasketCartText, BasketLink, BasketCountText, HeaderLogoImg,
    HeaderFullLogoImg, BasketIcon, MobileIcon
} from './Header.elements';

import logo_4R from '../../img/4R-logo.png';
import full_name_4R from '../../img/4R-full-name.png'



function Header() {


    const context = useContext(MainContext);
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => setClick(false);



    console.log(click)
    return (
        <HeaderContainer >

            <MobileIcon onClick={handleClick}>
                <Hamburger toggled={click} toggle={setClick} color="#886735" />
            </MobileIcon>

            <Link to="/">
                <HeaderLogoWrapper>
                    <HeaderLogoImg src={logo_4R} />
                    <HeaderFullLogoImg src={full_name_4R} alt="" width="10rem" height=".7rem" />
                </HeaderLogoWrapper>
            </Link>




            <HeaderNav click={click}>
                <HeaderList>
                    <HeaderListItem><HeaderLink to="/menu" onClick={closeMobileMenu}>menu</HeaderLink></HeaderListItem>
                    <HeaderListItem><HeaderLink to="/catering" onClick={closeMobileMenu}>catering</HeaderLink></HeaderListItem>
                    <HeaderListItem><HeaderLink to="/easter" onClick={closeMobileMenu}>easter</HeaderLink></HeaderListItem>
                    <HeaderListItem><HeaderLink to="/gift-cards" onClick={closeMobileMenu}>gift card</HeaderLink></HeaderListItem>
                    <HeaderListItem><HeaderLink to="/shop" onClick={closeMobileMenu}>shop</HeaderLink></HeaderListItem>
                    <HeaderListItem><HeaderAlink href="https://www.goldbelly.com/4-rivers-smokehouse" target="_blank" onClick={closeMobileMenu}>mail order</HeaderAlink></HeaderListItem>
                    <HeaderListItem><HeaderLink to="/loyalty" onClick={closeMobileMenu}>loyalty</HeaderLink></HeaderListItem>
                    <HeaderAlink padding="0" onClick={closeMobileMenu} >
                        <OrderBtnWrapper onClick={context.toggleOrderOnline}>
                            <HeaderListItem>order online</HeaderListItem>
                        </OrderBtnWrapper>
                    </HeaderAlink>
                </HeaderList>
            </HeaderNav>







            <BasketLink to="/cart">

                <BasketWrapper>
                    <BasketCartText>
                        Cart
                    </BasketCartText>

                    <BasketWrapper column>
                        <BasketCountText>
                            {context.addedToBasket.length > 0 ? context.addedToBasket.length : "0"}
                        </BasketCountText>

                        <BasketIcon />

                    </BasketWrapper>
                </BasketWrapper>

            </BasketLink >
        </HeaderContainer >
    )







}

export default Header
