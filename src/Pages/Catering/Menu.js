import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import {
    Header, Container, Info, Button, Image,
} from "../../Styled Components/styled-components";
import menu_pdf from '../../Documents/Sweetshop-Catering-Menu.pdf'
import full_service_menu_pdf from '../../Documents/4R-Full-Service-Catering-Menu.pdf'

import menu_service from '../../img/menu/menu-service.jpg'
import full_service_catering from '../../img/menu/full-service-catering.jpg'
import delivery_catering from '../../img/menu/delivery-catering.jpeg'
import dessert_bar from '../../img/menu/dessert-bar.jpg'

function Menu() {

    return (
        <div className="menu">

            <Parallax bgImage={menu_service} strength={250}>
                <Container
                    padding="80px"
                    className="home__sauces"
                    style={{ height: "100vh" }}>
                    <Header
                        className="underline--white"
                        fontSize="7em"
                        letterSpacing="12px">
                        Catering Menus
          </Header>
                    <Info letterSpacing="1px">
                        Full-Service, Delivery, Desserts & More
          </Info>

                    <Link to="/catering/order-online">
                        <Button marginTop="10px">Order catering online</Button>
                    </Link>
                    <Link to="/catering/contact-us">
                        <Button colorBeige>Talk to a catering expert</Button>
                    </Link>
                </Container>
            </Parallax>


            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header color="#000" fontFamily="PatuaOne" smallLetter>
                    4 Rivers Catering Menus
        </Header>
                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="3px">
                    From weddings to office parties, 4 Rivers Catering has got you covered
        </Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    First thing’s first: Which type of 4 Rivers Catering service are you interested in?
        </Info>

                <Link to="/holiday/menu">
                    <Button colorBeige>Christmas pick-up menu</Button>
                </Link>
                <Link to="/catering/#fullservice">
                    <Button colorBeige>Full service catering</Button>
                </Link>
                <Link to="/catering/#delivery">
                    <Button colorBeige>Catering delivery</Button>
                </Link>
                <a href="https://order.4rsmokehouse.com/#!/">
                    <Button colorBeige>
                        Pickup catering
                        </Button>
                </a>


                <Link to="/catering/#desserts">
                    <Button colorBeige marginBottom="35px">
                        Dessert catering
          </Button>
                </Link>
            </Container>


            <Image src={full_service_catering} width="100%" height="100%" />

            <Container id="fullservice" className="underline--gray" padding="40px 220px 40px 220px">
                <Header
                    color="#000"
                    fontFamily="PatuaOne"
                    smallLetter
                    fontSize="2.2em">
                    Full-Service Catering
  </Header>

                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="3px">
                    The Complete 4 Rivers catering experience
                </Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    Full-service catering is the ultimate dining experience offered by 4 Rivers for special events. Our friendly catering team will take care of everything from set up to clean up so you can enjoy your time with your guests without having to stress over the details.<br /><br />
                    The 4 Rivers Full-Service Catering Menu features many of the iconic 4 Rivers menu items that you can enjoy in our Smokehouses, items such as 4R Signature Angus Brisket, Pulled Pork, and St. Louis Style Ribs, but it also features a more robust selection of appetizers, sides, and desserts, such as our custom wedding cakes and dessert packages by <Link to="/4r-specialty-cakes" className="link">4R Specialty Cakes</Link>, not offered at our storefront locations.<br /><br />
                    We understand that no two events are the same. That’s why we’ve crafted our <a href={full_service_menu_pdf} target="_blank" className="link">full-service catering menu</a> so you can customize your event to your exact specifications.<br /><br />
                    4 Rivers’ full-service catering team is experienced in serving all types of events, from <Link to="/catering/wedding-catering" className="link">weddings</Link> and bar mitzvahs to concerts and office parties. No event is too big or too small.<br /><br />
                    Tap the button below to see a complete list of our 4 Rivers Full-Service Catering offerings.<br /><br />
                </Info>

                <a href={menu_pdf} target="_blank">
                    <Button colorBeige>
                        See pdf menu
                    </Button>
                </a>


                <Link to="/catering/full-service">
                    <Button marginBottom="30px" colorBeige>
                        Contact a catering expert
                    </Button>
                </Link>
            </Container>



            <Image src={delivery_catering} width="100%" height="100%" />

            <Container id="delivery" className="underline--gray" padding="40px 220px 40px 220px">
                <Header
                    color="#000"
                    fontFamily="PatuaOne"
                    smallLetter
                    fontSize="2.2em">
                    Catering Delivery
</Header>

                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="3px">
                    4 Rivers Delivered Right to Your Door
    </Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    4 Rivers Delivery is the best way to feed a bunch! Ordering catering delivery from 4 Rivers is perfect for parties, meetings, graduations, or large gatherings of all sizes.<br /><br />
     Choose among our pre-set packages, such as our Smokehouse 2×2 and Smokehouse 3×3, and we’ll bring your order straight to you.<br /><br />
                    <strong>4 Rivers Catering Delivery is FREE on orders of $150 or more within a 10-mile radius of a 4 Rivers Smokehouse.</strong><br /><br />
     With 4 Rivers Delivery, enjoy your favorite Smokehouse menu items from the comfort of your home, office, or event location. Our <Link to="/catering/delivery-menu" className="link">Catering Delivery Menu</Link> features classics such as our 4R Signature Angus Brisket, Pulled Pork, Burnt Ends, St. Louis Style Ribs, and more. It also includes our cherished 4 Rivers homestyle sides, <Link to="/4r-specialty-cakes" className="link">desserts</Link>, and drinks. Customize your delivery order by adding our award-winning BBQ by the pound with our a la carte delivery options. Tap below for pricing information.<br /><br />
                    <Link to="/catering/delivery-menu/" className="link">4 Rivers Delivery Packages</Link> are priced per person. Tap below to see the menu or to contact a 4 Rivers catering expert.<br /><br />
                </Info>

                <Link to="/catering/delivery-menu">
                    <Button colorBeige>
                        See delivery menu
        </Button>
                </Link>




                <Link to="/catering/order-online">
                    <Button colorBeige>
                        Order catering delivery online
                    </Button>
                </Link>

                <Link to="/contact-4r-catering">
                    <Button marginBottom="30px" colorBeige>Contact a catering expert</Button>
                </Link>
            </Container>



            <Image src={dessert_bar} width="100%" height="100%" />

            <Container id="desserts" className="underline--gray" padding="40px 220px 40px 220px">
                <Header
                    color="#000"
                    fontFamily="PatuaOne"
                    smallLetter
                    fontSize="2.2em">
                    Sweet Shop Dessert Catering
</Header>

                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="1px">
                    Party on with 4 Rivers’ Signature Cakes, Pies, Bars, Cookies, & More
</Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    No 4 Rivers trip is complete without a visit to the 4R Sweet Shop! The same is true for your 4 Rivers Catering experience.<br /><br />
            Make any event a little sweeter with our <a href={menu_pdf} target="_blank" className="link">4 Rivers Sweet Shop Catering Menu</a> . Our Sweet Shop Catering menu includes many of our classic offerings you’ve come to know and love, such as Bayou Bars, Hello Dolly Bars, Buckeyes, Coconut Bombs, and chocolate-dipped Oreos.<br /><br />
            It also features an extensive list of our more unique offerings such as our Signature Cakes, expertly decorated by our award-winning pastry chefs at <Link to="/4r-specialty-cakes" className="link">4R Specialty Cakes</Link> 4R Specialty Cakes, cake shots, cake balls, pop tarts, pies, pie shots, and more.<br /><br />
            Tap below to see a complete list of our Sweet Shop Dessert Catering offerings.<br /><br />
                </Info>

                <a href={menu_pdf} target="_blank">
                    <Button colorBeige>
                        See pdf menu
                    </Button>
                </a>



                <Link to="/contact-4r-catering">
                    <Button marginBottom="30px" colorBeige>Contact a catering expert</Button>
                </Link>
            </Container>

        </div >
    )
}

export default Menu
