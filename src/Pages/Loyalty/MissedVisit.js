import React from 'react'
import { Parallax } from "react-parallax";

import {
    MissedVisitContainer,
    MissedVisitWrapper,
    MissedVisitHeader,
    MissedVisitInfo,
    MissedVisitImage
} from './MissedVisit.elements'

import ContactForm from '../../components/ContactForm/ContactForm'

import parallax_bg from '../../img/missed-visit/parallax-bg.jpg'
import card_info from '../../img/missed-visit/card-info.jpg'

function MissedVisit() {
    // const beerURL = "https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/56ec2ba9ebc2e3d12c0f";

    // fetch(beerURL)
    //     .then(response => response.json())
    //     .then(data => console.log(data))

    return (
        <MissedVisitContainer>

            <Parallax
                bgImage={parallax_bg}
                strength={150}
                bgImageStyle={{ width: "100%", height: "150%" }}>

                <MissedVisitWrapper>

                    <MissedVisitHeader>
                        Add a visit
                    </MissedVisitHeader>

                </MissedVisitWrapper>

            </Parallax>

            <MissedVisitWrapper>

                <MissedVisitInfo>
                    If you forgot to swipe your card on a visit, fill out this
                    form for your points to be added to your account.
                </MissedVisitInfo>

                <MissedVisitImage src={card_info} />
                <ContactForm />

            </MissedVisitWrapper>

        </MissedVisitContainer>
    )
}

export default MissedVisit
