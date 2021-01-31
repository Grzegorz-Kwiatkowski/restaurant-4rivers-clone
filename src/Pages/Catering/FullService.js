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
import Suggestion from '../../components/Suggestion'

import full_service from '../../img/full-service/full-service.jpg'
import full_service_catering from '../../img/full-service/full-service-catering.jpg'
import rivers_patio from '../../img/full-service/4-rivers-patio.jpg'
function FullService() {
    return (
        <div className="full-service">

            <Parallax bgImage={full_service} strength={250}>
                <Container
                    padding="80px"
                    className="home__sauces"
                    style={{ height: "100vh" }}
                >
                    <Header
                        className="underline--white"
                        fontSize="7em"
                        letterSpacing="12px">
                        Full-Service Catering
          </Header>
                    <Info letterSpacing="1px">
                        The Complete 4 Rivers Catering Experience
          </Info>

                    <Link to="/contact-4r-catering">
                        <Button marginTop="10px">Contact us online</Button>
                    </Link>

                    <Button colorBeige>Contact us by phone</Button>

                </Container>
            </Parallax>



            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header color="#000" fontFamily="PatuaOne" smallLetter marginBottom="0px">
                    Wedding Catering by 4 Rivers
        </Header>
                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="1px"
                    fontSize="1.4em"
                    marginTop="5px">
                    From cocktail hour to passed appetizers and dinner service to dessert
        </Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    4 Rivers Wedding Catering provides couples the complete catering experience with fully customizable packages and an extensive menu offerings spanning from award-winning BBQ and Southern comfort classics to <Link to="/4r-specialty-cakes" className="link">custom wedding cakes and dessert packages</Link> and more.<br /><br />
                   Choose 4 Rivers Catering for all your wedding event needs including wedding receptions, rehearsal dinners, engagement parties, and bridal showers.<br /><br />
                   4 Rivers Wedding Catering offers a wide range of services from bartending to champagne toasts and passed hors d’oeuvres to dinner service. We can serve your guest to your exact specifications including passed, plated, or family-style.<br /><br />
                   Tap below to learn more about <Link to="/catering/wedding-catering" className="link">4 Rivers Wedding Catering</Link>.<br /><br />
                </Info>

                <Link to="/catering/wedding-catering">
                    <Button colorBeige>Learn more</Button>
                </Link>

                <Link to="/catering/vendor-list">
                    <Button colorBeige>Vendor list</Button>
                </Link>
            </Container>


            <Image src={full_service_catering} width="100%" height="100%" />
            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header color="#000" fontFamily="PatuaOne" smallLetter marginBottom="0px">
                    4 Rivers Corporate Event Catering
        </Header>
                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="1px"
                    fontSize="1.4em"
                    marginTop="5px">
                    Treat your team to the South’s Best BBQ
        </Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    Let 4 Rivers be your partner in planning your next corporate event.<br /><br />
                  With a wide-selection of menu offerings, including many vegan and vegetarian options, it’s easy to please everyone with 4 Rivers Catering.<br /><br />
                  Contact us today to schedule 4 Rivers BBQ for your next corporate event.<br /><br />

                </Info>

                <Link to="/catering/contact-us">
                    <Button colorBeige>Contact a catering expert</Button>
                </Link>

                <Link to="/catering/menu">
                    <Button colorBeige>See a menu</Button>
                </Link>
            </Container>


            <Image src={rivers_patio} width="100%" height="100%" />
            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header color="#000" fontFamily="PatuaOne" smallLetter marginBottom="0px">
                    Host a Patio Party at 4 Rivers
        </Header>
                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="1px"
                    fontSize="1.4em"
                    marginTop="5px">
                    Smokin’ good times start here
        </Info>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    4 Rivers is the perfect place to throw a party!<br /><br />
              Our open-air patios offer guests a private event space to gather and celebrate any occasion.<br /><br />
              Contact us today to learn more about how you can rent a 4 Rivers patio space for your next special event.<br /><br />
                </Info>

                <Link to="/catering/contact-us">
                    <Button colorBeige>Contact a catering expert</Button>
                </Link>
            </Container>

            <Suggestion header="Catering Menu" label="See catering offerings" link="/catering/menu" />
        </div>
    )
}

export default FullService
