import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import {
    Image,
} from "../../Styled Components/styled-components";

import {
    CakesContainer,
    CakesParallaxWrapper,
    CakesParallaxHeader,
    CakesParallaxInfo,
    CakesButton,
    CakesWrapper,
    CakesHeader,
    CakesInfo,
    CakesText
} from './SpecialtyCakes.elements'

import menu_pdf from '../../Documents/Sweetshop-Catering-Menu.pdf'

import wedding_cakes from '../../img/specialty-cakes/wedding-cakes.jpg'
import custom_wedding_cake from '../../img/specialty-cakes/custom-wedding-cake.jpg'
import theme_cakes_white from '../../img/specialty-cakes/theme-cakes-white.jpg'
import themed_cakes_carrot from '../../img/specialty-cakes/themed-cakes-carrot.jpg'
import cakes_cup_cakes from '../../img/specialty-cakes/cakes-cup-cakes.jpg'


function SpecialtyCakes() {
    return (

        <CakesContainer>

            <Parallax
                bgImage={wedding_cakes}
                strength={150}
                bgImageStyle={{ width: "100%", height: "150%" }}
            >
                <CakesParallaxWrapper>

                    <CakesParallaxHeader>
                        4R Specialty Cakes
                    </CakesParallaxHeader>

                    <CakesParallaxInfo>
                        Custom Cakes for Weddings and Special Events
                    </CakesParallaxInfo>

                    <a href="https://www.4rspecialtycakes.com/contact">
                        <CakesButton>Contact us online</CakesButton>
                    </a>

                    <Link to="/catering/contact-us">
                        <CakesButton colorBeige>Contact us by phone</CakesButton>
                    </Link>

                </CakesParallaxWrapper>

            </Parallax>


            <CakesWrapper>

                <CakesHeader>
                    4R Specialty Cakes
                </CakesHeader>

                <CakesInfo>
                    Custom cakes & desserts by the Sweet Shop at 4 Rivers
                </CakesInfo>

                <CakesText>
                    From the team behind the 4 Rivers Sweet Shop, 4R Specialty Cakes serves
                    up the sweetest custom desserts for weddings, parties, and special events.
                        <br /><br />
                    Based out of Winter Park Florida, 4R Specialty Cakes serves custom cakes
                    and desserts to communities all throughout Florida, from Jacksonville to Miami
                    and Daytona to Tampa Bay.
                        <br /><br />
                    Let our award-winning pastry chefs help you create the perfect custom cake
                    or dessert for your wedding, baby shower, baptism, graduation, birthday, or
                    special event. Tap below for more information.
                        <br /><br />
                </CakesText>


                <a href="#wedding-cakes">
                    <CakesButton colorBeige>Wedding cakes</CakesButton>
                </a>

                <a href="#themed-cakes">
                    <CakesButton colorBeige>Themed cakes</CakesButton>
                </a>

                <a href="#signature-cakes">
                    <CakesButton colorBeige>Signature cakes</CakesButton>
                </a>

                <a href="#desserts">
                    <CakesButton colorBeige>Desserts & Confections</CakesButton>
                </a>

            </CakesWrapper>


            <Image src={custom_wedding_cake} width="100%" height="100%" />


            <CakesWrapper id="wedding-cakes">

                <CakesHeader>
                    Custom Wedding Cakes
                </CakesHeader>

                <CakesInfo>
                    Making Your Sweetest Dreams Come to Life
                </CakesInfo>

                <CakesText>
                    Who doesn’t love this part of wedding planning?
                        <br /><br />
                    4R Specialty Cakes is here to help create the perfect customized cake
                    for your wedding. With an extensive list of flavor offerings, fillings,
                    frostings, and serving sizes, our talented pastry chefs can do it all.
                        <br /><br />
                    Contact our team today to start creating your dream wedding cake that perfectly
                    matches the theme and design of your wedding.
                        <br /><br />
                </CakesText>

                <Link to="">
                    <CakesButton colorBeige>Contact us online</CakesButton>
                </Link>
                <Link to="">
                    <CakesButton colorBeige>Contact us by phone</CakesButton>
                </Link>

            </CakesWrapper>


            <Image src={theme_cakes_white} width="100%" height="100%" />

            <CakesWrapper id="themed-cakes">

                <CakesHeader>
                    Themed Cakes
                </CakesHeader>

                <CakesInfo>
                    A beautiful cake for every occasion
                </CakesInfo>

                <CakesText>
                    With 4R Specialty Cakes themed cakes, it’s easy to bring any celebration to life.
                    <br />
                    <br />
                    From baby showers and graduation parties to baptisms and birthday parties,
                    it’s easy to find the perfect cake for any special gathering.nt.
                </CakesText>

                <a href="https://www.4rspecialtycakes.com/theme-cakes">
                    <CakesButton colorBeige>See current offerings</CakesButton>
                </a>

            </CakesWrapper>


            <Image src={themed_cakes_carrot} width="100%" height="100%" />


            <CakesWrapper id="signature-cakes" >

                <CakesHeader>
                    Signature Cakes
                </CakesHeader>

                <CakesInfo>
                    The Cakes You’ve Come to Know and Love from the 4R Sweet Shop
                </CakesInfo>

                <CakesText>
                    Our 4R Specialty Cakes team has made some delicious creations over the years in the
                    4 Rivers Sweet Shop.
                        <br /><br />
                    From our Quintessential Chocolate Cake to our classic Carrot Cake, our signature cake offerings
                    highlight the best of the best from the 4R Sweet Shop.
                        <br /><br />
                    Bring one of your Sweet Shop favorites home today by contacting our team. Got a Sweet Shop favorite
                    not listed on our current offerings? We’d be glad to make one special just for you.
                        <br /><br />
                    Tap below to see our offerings and to contact one of our talented Sweet Shop pastry chefs.
                        <br /><br />
                </CakesText>

                <a href="https://www.4rspecialtycakes.com/signature-cakes">
                    <CakesButton colorBeige>See current offerings</CakesButton>
                </a>

            </CakesWrapper>


            <Image src={cakes_cup_cakes} width="100%" height="100%" />


            <CakesWrapper id="desserts">

                <CakesHeader>
                    Custom Desserts & Confections
                </CakesHeader>

                <CakesInfo>
                    Custom Cupcakes, Cookies, Pies, Dessert Bars, & More
                </CakesInfo>

                <CakesText>
                    Our team at 4R Specialty Cakes can also create tons of custom confections, beyond
                    cakes, perfect for any gathering.
                        <br />
                    Check out our <a href={menu_pdf} target="_blank" className="link">Sweet
                    Shop Catering Menu</a> to see our full list of dessert packages and offerings,
                    including dessert bars (such as brownies, Bayou bars, and Hello Dolly bars),
                    mini cupcakes, pies, pie shots, pop tarts, dipped Oreos, cake balls, mini cookies,
                    cake shots, and more.
                        <br /><br />
                    Questions? Our expert pastry chefs would be happy to walk you through our
                    extensive list of custom dessert offerings to help make your next special
                    event a little sweeter.
                        <br /><br />
                </CakesText>


                <a href="https://www.4rspecialtycakes.com/contact">
                    <CakesButton colorBeige>Contact us online</CakesButton>
                </a>

                <CakesButton colorBeige>Contact us by phone</CakesButton>

            </CakesWrapper>

        </CakesContainer >
    )
}

export default SpecialtyCakes
