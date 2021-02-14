import React from 'react'
import { Parallax } from "react-parallax";

import './MissedVisit.css'
import { Container, Header, Info, Image } from '../../Styled Components/styled-components'
import ContactForm from '../../components/ContactForm'

import parallax_bg from '../../img/missed-visit/parallax-bg.jpg'
import card_info from '../../img/missed-visit/card-info.jpg'

function MissedVisit() {
    return (
        <div className="missed-visit">

            <Parallax bgImage={parallax_bg} strength={350}>
                <Container padding="50px">
                    <Header fontSize="5.5em" letterSpacing="7px" >Add a visit</Header>
                </Container>
            </Parallax>

            <Container padding="50px">
                <Info color="#000" fontSize="1.3em" letterSpacing="1px" smallLetter>If you forgot to swipe your card on a visit, fill out this form for your points to be added to your account.</Info>
                <Image src={card_info} width="40%" />
                <ContactForm />
            </Container>
        </div>
    )
}

export default MissedVisit
