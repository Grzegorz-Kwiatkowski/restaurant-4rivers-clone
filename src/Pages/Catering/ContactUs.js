import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import {
    ContactUsContainer,
    ContactUsHeader,
    ContactUsInfo,
    ContactUsButton,
    ContactUsWrapper
} from './ContactUs.elements'

import Advertisement from '../../components/Advertisement/Advertisement'

import team_members from '../../img/contact-us/team-members.jpg'


function ContactUs() {
    return (
        <ContactUsContainer>
            <Parallax
                bgImage={team_members}
                strength={150}
                bgImageStyle={{ width: "100%" }}
            >

                <ContactUsWrapper>

                    <ContactUsHeader>
                        Contact 4R Catering
                    </ContactUsHeader>

                    <ContactUsInfo>
                        Talk to a Catering Expert
                    </ContactUsInfo>

                    <Link to="/contact-4r-catering">
                        <ContactUsButton>Contact us online</ContactUsButton>
                    </Link>

                    <ContactUsButton colorBeige>Contact us by phone</ContactUsButton>

                </ContactUsWrapper>
            </Parallax>

            <Advertisement header="Catering Menu" label="See catering offerings" link="/catering/menu" />

        </ContactUsContainer>
    )
}

export default ContactUs
