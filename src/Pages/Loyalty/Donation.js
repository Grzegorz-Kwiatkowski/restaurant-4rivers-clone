import React from 'react'
import { Parallax } from "react-parallax";

import {
    DonationContainer,
    DonationParallaxWrapper,
    DonationParallaxHeader,
    DonationWrapper,
    DonationHeader,
    DonationInfo,
    SpanBorder,
    DonationContent,
    DonationText,
    DonationList,
    DonationListItem
} from './Donation.elements';

import donation_bg from '../../img/donation/donation_bg.jpg'

function Donation() {
    return (

        <DonationContainer>

            <Parallax
                bgImage={donation_bg}
                strength={150}
                bgImageStyle={{ width: "100%", height: "150%" }}
            >

                <DonationParallaxWrapper>

                    <DonationParallaxHeader>
                        Donation Requests
                    </DonationParallaxHeader>

                </DonationParallaxWrapper>

            </Parallax>


            <DonationWrapper>

                <DonationHeader>
                    Thank you so much <br />for reaching out
                </DonationHeader>

                <DonationContent>

                    <DonationInfo>
                        <SpanBorder>
                            Unfortunately, COVID-19 has impacted our giving ability and all donations are
                            suspended at this time. Check back periodically for any updates to our donation
                            status.
                        </SpanBorder>
                    </DonationInfo>

                    <DonationText>
                        Thank you for thinking of 4Rivers Smokehouse. We are committed to supporting
                        organizations in our community through in-kind donations and reduced menu
                        pricing on fundraising events.
                    </DonationText>

                    <DonationText>
                        Our mission is simple – to use our God-given gifts to support the local community,
                        schools, and charity organizations. At the foundation, the 4Rivers brand is exceptional
                        products, community support and uncompromised honesty, integrity, and respect.
                    </DonationText>

                    <DonationText>
                        Please know that we do genuinely care and carefully consider all incoming requests,
                        however we will not be able to accommodate them all
                    </DonationText>

                    <DonationInfo>
                        <SpanBorder>
                            How to apply
                        </SpanBorder>
                    </DonationInfo>

                    <DonationText>
                        Please help us to determine if our mission to serve the community through your request
                        meets our giving guidelines by completing the online application form below. Please upload
                        your Tax Exempt Form and 501c3 certificate to the application. Your request will be reviewed
                        and a representative of 4Rivers Smokehouse will respond to your request via email or by
                        calling you directly.
                    </DonationText>

                    <DonationInfo>
                        <SpanBorder>
                            Time Needed
                        </SpanBorder>
                    </DonationInfo>

                    <DonationText>
                        We respectfully ask that you complete the Donation Request Form and give us no less
                        than two weeks to process your request and prefer at least one month before the date
                        of your event; failure to do so may impact our ability to meet your request.
                    </DonationText>

                    <DonationInfo>
                        <SpanBorder>
                            Our Focus
                        </SpanBorder>
                    </DonationInfo>

                    <DonationText>
                        Specifically, 4 Rivers provides assistance to organizations and individuals,
                        supporting the following initiatives:
                    </DonationText>

                    <DonationList>
                        <DonationListItem>Education & Child Development Program</DonationListItem>
                        <DonationListItem>Churches and Ministries</DonationListItem>
                        <DonationListItem>Non-Profits that focus on families in critical need and social services</DonationListItem>
                    </DonationList>

                    <DonationInfo>
                        <SpanBorder>
                            What does not apply
                        </SpanBorder>
                    </DonationInfo>

                    <DonationList>
                        <DonationListItem>Organizations that discriminate based on race, color, gender, religion, sexual orientation, national origin, age or disability</DonationListItem>
                        <DonationListItem>Political, legislative, or lobbying organizations</DonationListItem>
                        <DonationListItem>Individuals (scholarships, stipends, fellowships, personal assistance)</DonationListItem>
                        <DonationListItem>Non-school affiliated athletic teams or events</DonationListItem>
                        <DonationListItem>Salaries for nonprofit staffing</DonationListItem>
                    </DonationList>

                    <DonationText>
                        From everyone at 4Rivers Smokehouse, thank you for all you do to support
                        the community.
                    </DonationText>

                </DonationContent>

            </DonationWrapper>

        </DonationContainer>
    )
}

export default Donation
