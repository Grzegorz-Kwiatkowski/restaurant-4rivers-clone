import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import {
    Header,
    Container,
    Info,
    Button
} from "../../Styled Components/styled-components";
import './Faq.css'

import catering_menu from '../../Documents/4R-Full-Service-Catering-Menu.pdf'
import allergen_list from '../../Documents/4R-Menu-Allergen-List.pdf'
import reheating_instructions from "../../Documents/Holiday-Reheating-Instructions.pdf"

import Suggestion from '../../components/Suggestion'

import bg_faq from '../../img/faq/bg_faq.jpg'



function Faq() {
    return (
        <div className="faq">

            <Parallax bgImage={bg_faq} strength={350}>
                <Container padding="40px">
                    <Header
                        fontSize="6em"
                        letterSpacing="12px">
                        FAQ
                    </Header>
                </Container>
            </Parallax >


            <Container>

                <section className="faq__section underline--gray">
                    <Header color="#000" fontFamily="PatuaOne" >4Rewards FAQs</Header>
                    <h2>How did my visits transfer from the Pitmaster Loyalty Program to the 4Rewards Loyalty Program?</h2>
                    <p>For every visit in our previous loyalty system, we allocated 10 points in our new 4Rewards Loyalty Program. For example: If you accumulated 5 visits in our Pitmaster Rewards Program, we automatically transferred 50 points into your new 4Rewards account.</p>

                    <h2>Who do I contact if I have questions about my 4Rewards Loyalty account? </h2>
                    <p>For questions regarding your 4Rewards Loyalty account, please email us at:</p>

                    <ul>
                        <li><a href="" className="link">4rewards@4rsmokehouse.com</a></li>
                    </ul>
                </section>

                <section className="faq__section underline--gray">
                    <Header color="#000" fontFamily="PatuaOne" >Dining</Header>

                    <h2>What are your hours? </h2>
                    <p>We are open Monday through Saturday 11am – 8pm. We are usually ready to serve those that come a little early and we never have a hard closing time.</p>

                    <h2>Are you a full service restaurant and do you take reservations?</h2>
                    <p>We are a fast-casual dining establishment, and we do not take reservations. But would be happy to accommodate large parties with advance notice by calling 844-4RIVERS.</p>

                    <h2>Do you have private rooms available?</h2>
                    <p>Our restaurants are set up with communal picnic tables and family-style seating. We do not have private rooms at our Smokehouses but do welcome large groups to dine with us. Additionally, we have many options available through our Catering Department if you’re looking for something more private.</p>

                    <h2>Why are you closed on Sundays?</h2>
                    <p>4 Rivers is a family-owned faith based restaurant and we feel Sundays are a day for family and worship.</p>

                    <h2>What are your Holiday Hours?</h2>
                    <p>

                        We are closed on the following holidays:
                        <br />
                        -New Year’s Day
                        <br />
                        -Thanksgiving
                        <br />
                        -Christmas Eve (After 5 p.m.)
                        <br />
                        -Christmas Day
                    </p>
                </section>


                <section className="faq__section underline--gray">
                    <Header color="#000" fontFamily="PatuaOne" >Carry-Out & Delivery</Header>
                    <h2>Do you deliver?</h2>
                    <p>We provide delivery services through our Catering Department. You can view our catering menu online. For catering orders, please feel free to call 321-972-1888 or 1-855-368-7748 (ext 3).</p>

                    <ul>
                        <li><a href={catering_menu} target="_blank" className="link">View our catering menu</a></li>
                    </ul>

                    <p>Delivery is also available through UberEats, BiteSquad, Amazon Restaurants, and DoorDash
                        *Delivery service varies by location</p>
                </section>


                <section className="faq__section underline--gray">
                    <Header color="#000" fontFamily="PatuaOne" >Our Food</Header>

                    <h2>Is your sauce gluten-free?</h2>
                    <p>Yes, our sauce is a gluten-free product. We do offer allergen information for all of our food, which is available through our menu.</p>

                    <h2>Do you sell your BBQ sauces?</h2>
                    <p>Yes, we do. Our sauces are available for purchase at all Smokehouse locations and online.</p>

                    <ul>
                        <li><a href={catering_menu} target="_blank" className="link">View our online store</a></li>
                    </ul>

                    <h2>Do you have nutritional information?</h2>
                    <p>We do not have nutritional information for our menu items. We do however offer allergen information which is available through our menu.</p>

                    <ul>
                        <li><a href={allergen_list} target="_blank" className="link">View our allergen list</a></li>
                    </ul>

                    <h2>Do you have reheating instructions?</h2>
                    <p>Yes, we do. A full list of reheating instructions is available through our menu.</p>

                    <ul>
                        <li><a href={reheating_instructions} target="_blank" className="link">View our reheating instructions</a></li>
                    </ul>
                </section>


                <section className="faq__section ">
                    <Header color="#000" fontFamily="PatuaOne" >Our Company</Header>

                    <h2>Do you franchise?</h2>
                    <p>We are a family-owned company and do not have intentions of franchising.</p>

                    <h2>Does 4 Rivers offer donations?</h2>
                    <p>Yes, we do. Please contact our Donations Coordinator using our donation form.</p>

                    <ul>
                        <li><Link to="/donation" className="link">Contact us for donations</Link></li>
                    </ul>

                    <h2>What is the best way to contact 4 Rivers?</h2>
                    <p>Please contact us through our contact form.<br /><br />
                    For all media and press inquiries please contact Bo Morris of </p><br />

                    <ul>
                        <li><a href="https://story-farm.com/" className="link">Story farm</a></li>
                    </ul>
                    <p>at bomorris@story-farm.com</p>

                    <ul>
                        <li><Link to="/contact" className="link">Contact us</Link></li>
                    </ul>
                </section>

            </Container>

            <Suggestion header="Still have Questions ?" label="contact us" link="/contact" />
        </div >
    )
}

export default Faq
