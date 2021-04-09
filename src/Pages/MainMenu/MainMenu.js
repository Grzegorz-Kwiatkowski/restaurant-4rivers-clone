import React from 'react'
import { Parallax } from "react-parallax";

import { Image } from '../../Styled Components/styled-components'

import {
    MainMenuContainer,
    MainMenuParallaxWrapper,
    MainMenuImageUnderline,
    MainMenuParallaxInfo,
    MainMenuButton,
    AllergenListWrapper,
    AllergenLink,
    AllergenText,
    MainMenuWrapper,
    MainMenuHeader,
    AllergenImage
} from './MainMenu.elements'

import MyAccordion from '../../components/Accordion/MyAccordion'
import Advertisement from '../../components/Advertisement/Advertisement'

import opener_bg_menu from '../../img/menu/opener-bg-menu.jpg'
import opener_text_menu from '../../img/menu/opener-text-menu.png'
import icon_menu from '../../img/menu/icon-menu.png'
import walnut_icon from '../../icons/walnut.svg'

import allergenList from '../../Documents/4R-Menu-Allergen-List.pdf'

function MainMenu() {
    return (
        <MainMenuContainer>

            <Parallax bgImage={opener_bg_menu} strength={250}>

                <MainMenuParallaxWrapper>

                    <Image src={icon_menu} width="8rem" height="8rem" margin="1rem" />

                    <MainMenuImageUnderline>
                        <Image src={opener_text_menu} width="100%" height="4rem" />
                    </MainMenuImageUnderline>

                    <MainMenuParallaxInfo>
                        For Pricing, see our Online Ordering.
                    </MainMenuParallaxInfo>

                    <a href="https://order.4rsmokehouse.com/#!/">
                        <MainMenuButton>
                            Order online
                        </MainMenuButton>
                    </a>

                </MainMenuParallaxWrapper>
            </Parallax>

            <AllergenListWrapper>

                <AllergenLink href={allergenList} target="_blank">

                    <AllergenImage src={walnut_icon} />
                    <AllergenText>Allergen Info</AllergenText>

                </AllergenLink>

            </AllergenListWrapper>


            <MyAccordion />


            <MainMenuWrapper>

                <MainMenuHeader>
                    From our family to yours
                </MainMenuHeader>

                <MainMenuButton colorBeige>
                    See all sauces
                </MainMenuButton>

            </MainMenuWrapper>

            <Advertisement header="Hungry Now ?" label="Find a location" link="/locations" />

        </MainMenuContainer>
    )
}

export default MainMenu
