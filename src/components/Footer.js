import React from 'react';
import { Link } from 'react-router-dom'

import SocialFollow from './SocialFollow'
import logo_4R_bg from '../img/4R-logo-bg.jpg'
import arrow_right from '../img/arrowRight.png'

import {
    FooterContainer,
    FooterSiteMap,
    FooterSection,
    FooterLogoWrapper,
    FooterLink,
    FooterImageLogo,
    FooterText,
    FooterHeader,
    FooterList,
    FooterListItem,
    FooterALink,
    FooterSocialMediaWrapper,
    FooterCopyright,
    FooterSocialIcons,
    FooterSocialText,
    FooterContactText,
    FooterContactButton,
    FooterContactWrapper
} from './Footer/Footer.elements';
import { Button } from '../Styled Components/styled-components';


function Footer() {
    return (
        <FooterContainer>
            <FooterSiteMap>


                <FooterLogoWrapper>
                    <FooterLink lowercase>
                        <FooterImageLogo image={logo_4R_bg}>
                            <FooterText>Pitmaster loyalty Program</FooterText>
                        </FooterImageLogo>
                    </FooterLink>
                </FooterLogoWrapper>



                <FooterSection>
                    <FooterHeader>
                        <FooterLink underline white to="locations/">locations</FooterLink>
                    </FooterHeader>
                    <FooterList image={arrow_right}>
                        <FooterListItem><FooterLink to="/locations/tampa">Carrollwood</FooterLink></FooterListItem>
                        <FooterListItem><FooterLink to="/coral-springs">Coral Springs</FooterLink></FooterListItem>
                        <FooterListItem><FooterLink to="/daytona">Daytona</FooterLink></FooterListItem>
                        <FooterListItem> <FooterLink to="/ucf-east-orlando">East Orlando</FooterLink></FooterListItem>
                        <FooterListItem><FooterLink to="/uf-gainesville">Gainesville</FooterLink></FooterListItem>
                    </FooterList>
                </FooterSection>


                <FooterSection>
                    <FooterHeader>links</FooterHeader>
                    <FooterList image={arrow_right}>
                        <FooterListItem><FooterLink to="/press-releases">press releases</FooterLink></FooterListItem>
                        <FooterListItem><FooterLink to="/press">press coverage</FooterLink></FooterListItem>
                        <FooterListItem><FooterLink to="/careers">careers</FooterLink></FooterListItem>
                        <FooterListItem> <FooterLink to="/donation">donation requests</FooterLink></FooterListItem>
                        <FooterListItem><FooterLink to="/privacy-policy">privacy Policy</FooterLink></FooterListItem>
                        <FooterListItem><FooterLink to="/terms-of-use">terms of Use</FooterLink></FooterListItem>
                    </FooterList>
                </FooterSection>


                <FooterSection>
                    <FooterHeader>4 rivers family</FooterHeader>
                    <FooterList image={arrow_right}>
                        <FooterListItem><FooterLink to="/4r-signature-products">4r signature products</FooterLink></FooterListItem>
                        <FooterListItem><FooterALink href="https://www.asouthernaffair.com/">the coop</FooterALink></FooterListItem>
                        <FooterListItem><FooterALink href="https://www.4rspecialtycakes.com/">the sweet shop specialty cakes</FooterALink></FooterListItem>
                        <FooterListItem> <FooterALink href="https://www.disneysprings.com/dining/4-rivers-cantina-barbacoa-food-truck/">4r cantina barbacoa food truck</FooterALink></FooterListItem>
                        <FooterListItem><FooterALink href="https://www.4rootsfarm.org/">4rootsfarm</FooterALink></FooterListItem>
                    </FooterList>
                </FooterSection>


                <FooterSection>
                    <FooterHeader>contact</FooterHeader>

                    <FooterContactWrapper>
                        <FooterContactText >1-844-4RIVERS </FooterContactText>
                        <FooterContactText >(1-844-474-8377)</FooterContactText>
                    </FooterContactWrapper>

                    <Link to="/contact">
                        <FooterContactButton>Contact us</FooterContactButton>
                    </Link>
                </FooterSection>

            </FooterSiteMap>

            <FooterSocialMediaWrapper>
                <FooterCopyright>
                    <FooterSocialText >© 2020 4 Rivers Smokehouse</FooterSocialText>
                </FooterCopyright>

                <FooterSocialIcons>
                    <SocialFollow />
                </FooterSocialIcons>
            </FooterSocialMediaWrapper>
        </FooterContainer>
    )
}

export default Footer;
