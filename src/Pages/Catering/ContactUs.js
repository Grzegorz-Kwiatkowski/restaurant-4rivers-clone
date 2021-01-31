import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'
import {
    Container,
    Header,
    Button,
    Info
} from "../../Styled Components/styled-components";
import Suggestion from '../../components/Suggestion'

import team_members from '../../img/contact-us/team-members.jpg'


function ContactUs() {
    return (
        <div className="contact-us">
            <Parallax bgImage={team_members} strength={250}>
                <Container
                    padding="80px"
                    className="home__sauces"
                    style={{ height: "100vh" }}
                >
                    <Header
                        className="underline--white"
                        fontSize="7em"
                        letterSpacing="12px">
                        Contact 4R Catering
          </Header>
                    <Info letterSpacing="1px">
                        Talk to a Catering Expert
          </Info>

                    <Link to="/contact-4r-catering">
                        <Button marginTop="10px">Contact us online</Button>
                    </Link>

                    <Button colorBeige>Contact us by phone</Button>

                </Container>
            </Parallax>

            <Suggestion header="Catering Menu" label="See catering offerings" link="/catering/menu" />

        </div>
    )
}

export default ContactUs
