import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import {
    Image,
} from "../../Styled Components/styled-components";

import {
    MenuButton,
    MenuWrapper,
    MenuWrapperUnderline,
    MenuInfo,
    MenuHeaderUnderline,
    MenuContainer,
    MenuHeader,
    MenuContent,
    MenuParallaxInfo
} from './Menu.elements';

import menu_pdf from '../../Documents/Sweetshop-Catering-Menu.pdf'
import full_service_menu_pdf from '../../Documents/4R-Full-Service-Catering-Menu.pdf'

import menu_service from '../../img/menu/menu-service.jpg'
import full_service_catering from '../../img/menu/full-service-catering.jpg'
import delivery_catering from '../../img/menu/delivery-catering.jpeg'
import dessert_bar from '../../img/menu/dessert-bar.jpg'



function Menu() {

    return (
        <MenuContainer>

            <Parallax bgImage={menu_service} strength={250}>

                <MenuWrapper>

                    <MenuHeaderUnderline>
                        Catering Menus
                    </MenuHeaderUnderline>

                    <MenuParallaxInfo>
                        Full-Service, Delivery, Desserts & More
                    </MenuParallaxInfo>

                    <Link to="/catering/order-online">
                        <MenuButton>Order catering online</MenuButton>
                    </Link>
                    <Link to="/catering/contact-us">
                        <MenuButton colorBeige>Talk to a catering expert</MenuButton>
                    </Link>

                </MenuWrapper>
            </Parallax>


            <MenuWrapperUnderline>

                <MenuHeader>
                    4 Rivers Catering Menus
                </MenuHeader>

                <MenuInfo color="#8F2626" letterSpacing="3px">
                    From weddings to office parties, 4 Rivers Catering has got you covered
                </MenuInfo>

                <MenuContent>
                    First thing’s first: Which type of 4 Rivers Catering service are you interested in?
                </MenuContent>

                <Link to="/holiday/menu">
                    <MenuButton colorBeige>Christmas pick-up menu</MenuButton>
                </Link>
                <Link to="/catering/#fullservice">
                    <MenuButton colorBeige>Full service catering</MenuButton>
                </Link>
                <Link to="/catering/#delivery">
                    <MenuButton colorBeige>Catering delivery</MenuButton>
                </Link>
                <a href="https://order.4rsmokehouse.com/#!/">
                    <MenuButton colorBeige>Pickup catering</MenuButton>
                </a>


                <Link to="/catering/#desserts">
                    <MenuButton colorBeige >Dessert catering</MenuButton>
                </Link>

            </MenuWrapperUnderline>


            <Image src={full_service_catering} width="100%" height="100%" />

            <MenuWrapperUnderline>

                <MenuHeader>
                    Full-Service Catering
                </MenuHeader>

                <MenuInfo color="#8F2626" letterSpacing="3px">
                    The Complete 4 Rivers catering experience
                </MenuInfo>

                <MenuContent>
                    Full-service catering is the ultimate dining experience offered by 4 Rivers for special events. Our friendly catering team will take care of everything from set up to clean up so you can enjoy your time with your guests without having to stress over the details.<br /><br />
                    The 4 Rivers Full-Service Catering Menu features many of the iconic 4 Rivers menu items that you can enjoy in our Smokehouses, items such as 4R Signature Angus Brisket, Pulled Pork, and St. Louis Style Ribs, but it also features a more robust selection of appetizers, sides, and desserts, such as our custom wedding cakes and dessert packages by <Link to="/4r-specialty-cakes" className="link">4R Specialty Cakes</Link>, not offered at our storefront locations.<br /><br />
                    We understand that no two events are the same. That’s why we’ve crafted our <a href={full_service_menu_pdf} target="_blank" className="link">full-service catering menu</a> so you can customize your event to your exact specifications.<br /><br />
                    4 Rivers’ full-service catering team is experienced in serving all types of events, from <Link to="/catering/wedding-catering" className="link">weddings</Link> and bar mitzvahs to concerts and office parties. No event is too big or too small.<br /><br />
                    Tap the button below to see a complete list of our 4 Rivers Full-Service Catering offerings.<br /><br />
                </MenuContent>

                <a href={menu_pdf} target="_blank">
                    <MenuButton colorBeige>See pdf menu</MenuButton>
                </a>


                <Link to="/catering/full-service">
                    <MenuButton colorBeige>Contact a catering expert</MenuButton>
                </Link>

            </MenuWrapperUnderline>

            <Image src={delivery_catering} width="100%" height="100%" />

            <MenuWrapperUnderline>

                <MenuHeader>
                    Catering Delivery
                </MenuHeader>

                <MenuInfo color="#8F2626" letterSpacing="3px">
                    4 Rivers Delivered Right to Your Door
                </MenuInfo>

                <MenuContent>
                    4 Rivers Delivery is the best way to feed a bunch! Ordering catering delivery from 4 Rivers is perfect for parties, meetings, graduations, or large gatherings of all sizes.<br /><br />
                    Choose among our pre-set packages, such as our Smokehouse 2×2 and Smokehouse 3×3, and we’ll bring your order straight to you.<br /><br />
                    <strong>4 Rivers Catering Delivery is FREE on orders of $150 or more within a 10-mile radius of a 4 Rivers Smokehouse.</strong><br /><br />
                    With 4 Rivers Delivery, enjoy your favorite Smokehouse menu items from the comfort of your home, office, or event location. Our <Link to="/catering/delivery-menu" className="link">Catering Delivery Menu</Link> features classics such as our 4R Signature Angus Brisket, Pulled Pork, Burnt Ends, St. Louis Style Ribs, and more. It also includes our cherished 4 Rivers homestyle sides, <Link to="/4r-specialty-cakes" className="link">desserts</Link>, and drinks. Customize your delivery order by adding our award-winning BBQ by the pound with our a la carte delivery options. Tap below for pricing information.<br /><br />
                    <Link to="/catering/delivery-menu/" className="link">4 Rivers Delivery Packages</Link> are priced per person. Tap below to see the menu or to contact a 4 Rivers catering expert.<br /><br />
                </MenuContent>

                <Link to="/catering/delivery-menu">
                    <MenuButton colorBeige>See delivery menu</MenuButton>
                </Link>

                <Link to="/catering/order-online">
                    <MenuButton colorBeige>Order catering delivery online</MenuButton>
                </Link>

                <Link to="/contact-4r-catering">
                    <MenuButton colorBeige>Contact a catering expert</MenuButton>
                </Link>

            </MenuWrapperUnderline>

            <Image src={dessert_bar} width="100%" height="100%" />

            <MenuWrapperUnderline>
                <MenuHeader>
                    Sweet Shop Dessert Catering
                </MenuHeader>

                <MenuInfo color="#8F2626">
                    Party on with 4 Rivers’ Signature Cakes, Pies, Bars, Cookies, & More
                </MenuInfo>

                <MenuContent>
                    No 4 Rivers trip is complete without a visit to the 4R Sweet Shop! The same is true for your 4 Rivers Catering experience.<br /><br />
                    Make any event a little sweeter with our <a href={menu_pdf} target="_blank" className="link">4 Rivers Sweet Shop Catering Menu</a> . Our Sweet Shop Catering menu includes many of our classic offerings you’ve come to know and love, such as Bayou Bars, Hello Dolly Bars, Buckeyes, Coconut Bombs, and chocolate-dipped Oreos.<br /><br />
                    It also features an extensive list of our more unique offerings such as our Signature Cakes, expertly decorated by our award-winning pastry chefs at <Link to="/4r-specialty-cakes" className="link">4R Specialty Cakes</Link> 4R Specialty Cakes, cake shots, cake balls, pop tarts, pies, pie shots, and more.<br /><br />
                    Tap below to see a complete list of our Sweet Shop Dessert Catering offerings.<br /><br />
                </MenuContent>

                <a href={menu_pdf} target="_blank">
                    <MenuButton colorBeige>See pdf menu</MenuButton>
                </a>

                <Link to="/contact-4r-catering">
                    <MenuButton colorBeige>Contact a catering expert</MenuButton>
                </Link>

            </MenuWrapperUnderline>

        </MenuContainer >
    )
}

export default Menu
