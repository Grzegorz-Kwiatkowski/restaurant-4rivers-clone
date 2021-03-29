import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import {
    Header,
    Container,
    Info,
    Button,
    Image,
} from "../../Styled Components/styled-components";
import menu_pdf from '../../Documents/Sweetshop-Catering-Menu.pdf'

import wedding_cakes from '../../img/specialty-cakes/wedding-cakes.jpg'
import custom_wedding_cake from '../../img/specialty-cakes/custom-wedding-cake.jpg'
import theme_cakes_white from '../../img/specialty-cakes/theme-cakes-white.jpg'
import themed_cakes_carrot from '../../img/specialty-cakes/themed-cakes-carrot.jpg'
import cakes_cup_cakes from '../../img/specialty-cakes/cakes-cup-cakes.jpg'

function SpecialtyCakes() {
    return (
        <div className="specialty-cakes">

            <Parallax bgImage={wedding_cakes} strength={250}>
                <Container
                    padding="80px"
                    className="home__sauces"
                    style={{ height: "100vh" }}
                >
                    <Header
                        className="underline--white"
                        fontSize="7em"
                        letterSpacing="12px">
                        4R Specialty Cakes
          </Header>
                    <Info letterSpacing="1px">
                        Custom Cakes for Weddings and Special Events
          </Info>

                    <a href="https://www.4rspecialtycakes.com/contact">
                        <Button marginTop="10px">Contact us online</Button>
                    </a>

                    <Link to="/catering/contact-us">
                        <Button colorBeige>Contact us by phone</Button>
                    </Link>
                </Container>
            </Parallax>


            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header color="#000" fontFamily="PatuaOne" smallLetter marginBottom="0px">
                    4R Specialty Cakes
        </Header>
                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="1px"
                    fontSize="1.4em"
                    marginTop="5px">
                    Custom cakes & desserts by the Sweet Shop at 4 Rivers
        </Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    From the team behind the 4 Rivers Sweet Shop, 4R Specialty Cakes serves up the sweetest custom desserts for weddings, parties, and special events.<br /><br />
                    Based out of Winter Park Florida, 4R Specialty Cakes serves custom cakes and desserts to communities all throughout Florida, from Jacksonville to Miami and Daytona to Tampa Bay.<br /><br />
                    Let our award-winning pastry chefs help you create the perfect custom cake or dessert for your wedding, baby shower, baptism, graduation, birthday, or special event. Tap below for more information.<br /><br />

                </Info>

                <a href="#wedding-cakes">
                    <Button colorBeige>Wedding cakes</Button>
                </a>
                <a href="#themed-cakes">
                    <Button colorBeige>Themed cakes</Button>
                </a>
                <a href="#signature-cakes">
                    <Button colorBeige>Signature cakes</Button>
                </a>
                <a href="#desserts">
                    <Button colorBeige marginBottom="35px">Desserts & Confections</Button>
                </a>

            </Container>

            <Image src={custom_wedding_cake} width="100%" height="100%" />



            <Container id="wedding-cakes" className="underline--gray" padding="40px 220px 40px 220px" >
                <Header color="#000" fontFamily="PatuaOne" smallLetter marginBottom="0px" fontSize="2.7em">
                    Custom Wedding Cakes
        </Header>
                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="1px"
                    fontSize="1.4em"
                    marginTop="5px">
                    Making Your Sweetest Dreams Come to Life
        </Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    Who doesn’t love this part of wedding planning?<br /><br />
                    4R Specialty Cakes is here to help create the perfect customized cake for your wedding. With an extensive list of flavor offerings, fillings, frostings, and serving sizes, our talented pastry chefs can do it all.<br /><br />
                    Contact our team today to start creating your dream wedding cake that perfectly matches the theme and design of your wedding.<br /><br />
                </Info>

                <Link to="">
                    <Button colorBeige>Contact us online</Button>
                </Link>
                <Link to="">
                    <Button colorBeige>Contact us by phone</Button>
                </Link>

            </Container>


            <Image src={theme_cakes_white} width="100%" height="100%" />

            <Container id="themed-cakes" className="underline--gray" padding="40px 220px 40px 220px">
                <Header
                    color="#000"
                    fontFamily="PatuaOne"
                    smallLetter
                    fontSize="2.2em">
                    Themed Cakes
  </Header>

                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="1px"
                    marginTop="1px"
                    fontSize="1.4em">
                    A beautiful cake for every occasion
                    </Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px"
                >
                    With 4R Specialty Cakes themed cakes, it’s easy to bring any celebration to life.
                     <br />
                    <br />
                    From baby showers and graduation parties to baptisms and birthday parties, it’s easy to find the perfect cake for any special gathering.nt.
                </Info>
                <a href="https://www.4rspecialtycakes.com/theme-cakes">
                    <Button colorBeige>See current offerings</Button>
                </a>
            </Container>


            <Image src={themed_cakes_carrot} width="100%" height="100%" />

            <Container id="signature-cakes" className="underline--gray" padding="40px 220px 40px 220px">
                <Header
                    color="#000"
                    fontFamily="PatuaOne"
                    smallLetter
                    fontSize="2.2em">
                    Signature Cakes
</Header>

                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="1px"
                    marginTop="1px"
                    fontSize="1.3em">
                    The Cakes You’ve Come to Know and Love from the 4R Sweet Shop
        </Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px"
                >
                    Our 4R Specialty Cakes team has made some delicious creations over the years in the 4 Rivers Sweet Shop.<br /><br />
                    From our Quintessential Chocolate Cake to our classic Carrot Cake, our signature cake offerings highlight the best of the best from the 4R Sweet Shop.<br /><br />
                    Bring one of your Sweet Shop favorites home today by contacting our team. Got a Sweet Shop favorite not listed on our current offerings? We’d be glad to make one special just for you.<br /><br />
                    Tap below to see our offerings and to contact one of our talented Sweet Shop pastry chefs.<br /><br />

                </Info>
                <a href="https://www.4rspecialtycakes.com/signature-cakes">
                    <Button colorBeige>See current offerings</Button>
                </a>
            </Container>


            <Image src={cakes_cup_cakes} width="100%" height="100%" />

            <Container id="desserts" className="underline--gray" padding="40px 220px 40px 220px">
                <Header
                    color="#000"
                    fontFamily="PatuaOne"
                    smallLetter
                    fontSize="2.2em">
                    Custom Desserts & Confections
</Header>

                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="1px"
                    marginTop="1px"
                    fontSize="1.3em">
                    Custom Cupcakes, Cookies, Pies, Dessert Bars, & More
</Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px"
                >
                    Our team at 4R Specialty Cakes can also create tons of custom confections, beyond cakes, perfect for any gathering.<br />
           Check out our <a href={menu_pdf} target="_blank" className="link">Sweet Shop Catering Menu</a> to see our full list of dessert packages and offerings, including dessert bars (such as brownies, Bayou bars, and Hello Dolly bars), mini cupcakes, pies, pie shots, pop tarts, dipped Oreos, cake balls, mini cookies, cake shots, and more.<br /><br />
           Questions? Our expert pastry chefs would be happy to walk you through our extensive list of custom dessert offerings to help make your next special event a little sweeter.<br /><br />

                </Info>
                <a href="https://www.4rspecialtycakes.com/contact">
                    <Button colorBeige>Contact us online</Button>
                </a>
                <Button colorBeige>Contact us by phone</Button>


            </Container>

        </div >
    )
}

export default SpecialtyCakes
