import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import {
    Info,
    Button,
    Image,
} from "../../Styled Components/styled-components";

import {
    FullServiceContainer,
    FullServiceWrapper,
    FullServiceHeaderUnderline,
    FullServiceWrapperUnderline,
    FullServiceButton,
    FullServiceInfo,
    FullServiceContent,
    FullServiceHeader,
    FullServiceParallaxInfo
} from './FullService.elements'

import Advertisement from '../../components/Advertisement/Advertisement'

import full_service from '../../img/full-service/full-service.jpg'
import full_service_catering from '../../img/full-service/full-service-catering.jpg'
import rivers_patio from '../../img/full-service/4-rivers-patio.jpg'


function FullService() {
    return (
        <FullServiceContainer>

            <Parallax bgImage={full_service} strength={250}>

                <FullServiceWrapper>
                    <FullServiceHeaderUnderline>
                        Full-Service Catering
                    </FullServiceHeaderUnderline>

                    <FullServiceParallaxInfo>
                        The Complete 4 Rivers Catering Experience
                    </FullServiceParallaxInfo>

                    <Link to="/contact-4r-catering">
                        <FullServiceButton marginTop="10px">Contact us online</FullServiceButton>
                    </Link>

                    <FullServiceButton colorBeige>Contact us by phone</FullServiceButton>

                </FullServiceWrapper>
            </Parallax>



            <FullServiceWrapperUnderline>

                <FullServiceHeader>
                    Wedding Catering by 4 Rivers
                </FullServiceHeader>

                <FullServiceInfo>
                    From cocktail hour to passed appetizers and dinner service to dessert
                </FullServiceInfo>

                <FullServiceContent>
                    4 Rivers Wedding Catering provides couples the complete catering experience with fully customizable packages and an extensive menu offerings spanning from award-winning BBQ and Southern comfort classics to <Link to="/4r-specialty-cakes" className="link">custom wedding cakes and dessert packages</Link> and more.<br /><br />
                   Choose 4 Rivers Catering for all your wedding event needs including wedding receptions, rehearsal dinners, engagement parties, and bridal showers.<br /><br />
                   4 Rivers Wedding Catering offers a wide range of services from bartending to champagne toasts and passed hors d’oeuvres to dinner service. We can serve your guest to your exact specifications including passed, plated, or family-style.<br /><br />
                   Tap below to learn more about <Link to="/catering/wedding-catering" className="link">4 Rivers Wedding Catering</Link>.<br /><br />
                </FullServiceContent>

                <Link to="/catering/wedding-catering">
                    <FullServiceButton colorBeige>Learn more</FullServiceButton>
                </Link>

                <Link to="/catering/vendor-list">
                    <FullServiceButton colorBeige>Vendor list</FullServiceButton>
                </Link>

            </FullServiceWrapperUnderline>


            <Image src={full_service_catering} width="100%" height="100%" />


            <FullServiceWrapperUnderline>

                <FullServiceHeader>
                    4 Rivers Corporate Event Catering
                </FullServiceHeader>

                <FullServiceInfo>
                    Treat your team to the South’s Best BBQ
                </FullServiceInfo>

                <FullServiceContent>
                    Let 4 Rivers be your partner in planning your next corporate event.<br /><br />
                  With a wide-selection of menu offerings, including many vegan and vegetarian options, it’s easy to please everyone with 4 Rivers Catering.<br /><br />
                  Contact us today to schedule 4 Rivers BBQ for your next corporate event.<br /><br />
                </FullServiceContent>

                <Link to="/catering/contact-us">
                    <FullServiceButton colorBeige>Contact a catering expert</FullServiceButton>
                </Link>

                <Link to="/catering/menu">
                    <FullServiceButton colorBeige>See a menu</FullServiceButton>
                </Link>

            </FullServiceWrapperUnderline>


            <Image src={rivers_patio} width="100%" height="100%" />


            <FullServiceWrapperUnderline>

                <FullServiceHeader>
                    Host a Patio Party at 4 Rivers
                 </FullServiceHeader>

                <FullServiceInfo>
                    Smokin’ good times start here
                </FullServiceInfo>

                <FullServiceContent>
                    4 Rivers is the perfect place to throw a party!<br /><br />
                    Our open-air patios offer guests a private event space to gather and celebrate any occasion.<br /><br />
                    Contact us today to learn more about how you can rent a 4 Rivers patio space for your next special event.<br /><br />
                </FullServiceContent>

                <Link to="/catering/contact-us">
                    <Button colorBeige>Contact a catering expert</Button>
                </Link>

            </FullServiceWrapperUnderline>

            <Advertisement header="Catering Menu" label="See catering offerings" link="/catering/menu" />
        </FullServiceContainer>
    )
}

export default FullService
