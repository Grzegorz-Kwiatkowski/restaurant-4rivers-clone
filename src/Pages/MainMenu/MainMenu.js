import React from 'react'
import { Parallax } from "react-parallax";

import './MainMenu.css'
import { Container, Image, Info, Button, Header } from '../../Styled Components/styled-components'
import MyAccordion from '../../components/Accordion/MyAccordion'
import Suggestion from '../../components/Suggestion'

import opener_bg_menu from '../../img/menu/opener-bg-menu.jpg'
import opener_text_menu from '../../img/menu/opener-text-menu.png'
import icon_menu from '../../img/menu/icon-menu.png'
import walnut_icon from '../../icons/walnut.svg'

import allergenList from '../../Documents/4R-Menu-Allergen-List.pdf'

function MainMenu() {
    return (
        <div className="menu">

            <Parallax bgImage={opener_bg_menu} strength={250}>

                <Container className="menu__container" height="100vh">
                    <Image src={icon_menu} width="150px" height="150px" />
                    <div className="underline--white">
                        <Image src={opener_text_menu} width="100%" height="75px" />
                    </div>
                    <Info letterSpacing="2px">For Pricing, see our Online Ordering.</Info>
                    <a href="https://order.4rsmokehouse.com/#!/">
                        <Button>Order online</Button>
                    </a>
                </Container>
            </Parallax>

            <div>
                <a href={allergenList} className="menu__allergenLink" target="_blank">
                    <Image src={walnut_icon} width="20px" height="20px" marginRight="10px" marginTop="5px" />
                    <p className="link--gray">Allergen Info</p>
                </a>
            </div>

            <MyAccordion />

            <Container height="300px">
                <Header color="#000" letterSpacing="7px" fontSize="4em">From our family to yours</Header>
                <Button colorBeige>See all sauces</Button>
            </Container>
            <Suggestion header="Hungry Now ?" label="Find a location" link="/locations" />
        </div >
    )
}

export default MainMenu 
