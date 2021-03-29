import React from 'react'
import { Parallax } from "react-parallax";

import { Container, Header, Info, Border } from '../../Styled Components/styled-components'
import './Donation.css'

import donation_bg from '../../img/donation/donation_bg.jpg'

function Donation() {
    return (
        <div className="donation">

            <Parallax bgImage={donation_bg} strength={350}>
                <Container style={{ height: "50vh" }}>
                    <Header fontSize="5em" letterSpacing="5px">Donation Requests</Header>
                </Container>
            </Parallax>

            <Container padding="50px 0px 50px 0px">

                <Header color="#000" fontFamily="PatuaOne" fontSize="2.2em">Thank you so much <br />for reaching out</Header>
                <div className="donation__content">
                    <Info color="#8F2626" fontSize="1.2em" fontFamily="PatuaOne" letterSpacing="2px" marginBottom="50px"><span style={{ display: "flex" }}>Unfortunately, COVID-19 has impacted our giving ability and all donations are suspended at this time. Check back periodically for any updates to our donation status.</span></Info>

                    <p>Thank you for thinking of 4Rivers Smokehouse. We are committed to supporting organizations in our community through in-kind donations and reduced menu pricing on fundraising events.</p><br />
                    <p>Our mission is simple – to use our God-given gifts to support the local community, schools, and charity organizations. At the foundation, the 4Rivers brand is exceptional products, community support and uncompromised honesty, integrity, and respect.</p><br />
                    <p>Please know that we do genuinely care and carefully consider all incoming requests, however we will not be able to accommodate them all</p><br /><br />

                    <Info color="#8F2626" fontSize="1.2em" fontFamily="PatuaOne" letterSpacing="2px" ><span>How to apply</span> </Info>

                    <p>Please help us to determine if our mission to serve the community through your request meets our giving guidelines by completing the online application form below. Please upload your Tax Exempt Form and 501c3 certificate to the application. Your request will be reviewed and a representative of 4Rivers Smokehouse will respond to your request via email or by calling you directly.</p><br />

                    <Info color="#8F2626" fontSize="1.2em" fontFamily="PatuaOne" letterSpacing="2px"><span>Time Needed</span> </Info>
                    <p>We respectfully ask that you complete the Donation Request Form and give us no less than two weeks to process your request and prefer at least one month before the date of your event; failure to do so may impact our ability to meet your request.</p><br />

                    <Info color="#8F2626" fontSize="1.2em" fontFamily="PatuaOne" letterSpacing="2px"><span>Our Focus</span> </Info>
                    <p>Specifically, 4 Rivers provides assistance to organizations and individuals, supporting the following initiatives:</p>
                    <ul className="donation__list">
                        <li>Education & Child Development Program</li>
                        <li>Churches and Ministries</li>
                        <li>Non-Profits that focus on families in critical need and social services</li>
                    </ul>
                    <br />

                    <Info color="#8F2626" fontSize="1.2em" fontFamily="PatuaOne" letterSpacing="2px"> <span>What does not apply</span></Info>
                    <ul className="donation__list">
                        <li>Organizations that discriminate based on race, color, gender, religion, sexual orientation, national origin, age or disability</li>
                        <li>Political, legislative, or lobbying organizations</li>
                        <li>Individuals (scholarships, stipends, fellowships, personal assistance)</li>
                        <li>Non-school affiliated athletic teams or events</li>
                        <li>Salaries for nonprofit staffing</li>
                    </ul>
                    <p>From everyone at 4Rivers Smokehouse, thank you for all you do to support the community.</p>



                </div>
            </Container>












        </div>
    )
}

export default Donation
