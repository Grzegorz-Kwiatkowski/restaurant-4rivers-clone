import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import {
    FaqContainer,
    FaqParallaxWrapper,
    FaqParallaxHeader,
    FaqWrapper,
    FaqSectionUnderline,
    FaqSection,
    FaqHeader,
    FaqTitle,
    FaqText,
    FaqList,
    FaqListItem,
    FaqLink
} from './Faq.elements';


import catering_menu from '../../Documents/4R-Full-Service-Catering-Menu.pdf'
import allergen_list from '../../Documents/4R-Menu-Allergen-List.pdf'
import reheating_instructions from "../../Documents/Holiday-Reheating-Instructions.pdf"

import Advertisement from '../../components/Advertisement/Advertisement'

import bg_faq from '../../img/faq/bg_faq.jpg'



function Faq() {
    return (
        <FaqContainer>

            <Parallax
                bgImage={bg_faq}
                strength={150}
                bgImageStyle={{ width: "100%", height: "150%" }}
            >
                <FaqParallaxWrapper>

                    <FaqParallaxHeader>
                        FAQ
                    </FaqParallaxHeader>

                </FaqParallaxWrapper>

            </Parallax >


            <FaqWrapper>

                <FaqSectionUnderline>

                    <FaqHeader>
                        4Rewards FAQs
                    </FaqHeader>

                    <FaqTitle>
                        How did my visits transfer from the Pitmaster Loyalty Program
                        to the 4Rewards Loyalty Program?
                    </FaqTitle>

                    <FaqText>
                        For every visit in our previous loyalty system, we allocated 10
                        points in our new 4Rewards Loyalty Program. For example: If you
                        accumulated 5 visits in our Pitmaster Rewards Program, we automatically
                        transferred 50 points into your new 4Rewards account.
                    </FaqText>

                    <FaqTitle>
                        Who do I contact if I have questions about my 4Rewards Loyalty account?
                    </FaqTitle>

                    <FaqText>
                        For questions regarding your 4Rewards Loyalty account, please
                        email us at:
                    </FaqText>

                    <FaqList>
                        <FaqListItem>
                            <FaqLink href="">
                                4rewards@4rsmokehouse.com
                            </FaqLink>
                        </FaqListItem>
                    </FaqList>

                </FaqSectionUnderline>


                <FaqSectionUnderline>

                    <FaqHeader>
                        Dining
                    </FaqHeader>

                    <FaqTitle>
                        What are your hours?
                    </FaqTitle>

                    <FaqText>
                        We are open Monday through Saturday 11am – 8pm. We are usually
                        ready to serve those that come a little early and we never have
                        a hard closing time.
                    </FaqText>


                    <FaqTitle>
                        Are you a full service restaurant and do you take reservations?
                    </FaqTitle>

                    <FaqText>
                        We are a fast-casual dining establishment, and we do not take reservations.
                        But would be happy to accommodate large parties with advance notice by
                        calling 844-4RIVERS.
                    </FaqText>


                    <FaqTitle>
                        Do you have private rooms available?
                    </FaqTitle>

                    <FaqText>
                        Our restaurants are set up with communal picnic tables and family-style
                        seating. We do not have private rooms at our Smokehouses but do welcome
                        large groups to dine with us. Additionally, we have many options available
                        through our Catering Department if you’re looking for something more private.
                    </FaqText>


                    <FaqTitle>
                        Why are you closed on Sundays?
                    </FaqTitle>

                    <FaqText>
                        4 Rivers is a family-owned faith based restaurant and we feel Sundays
                        are a day for family and worship.
                    </FaqText>


                    <FaqTitle>
                        What are your Holiday Hours?
                    </FaqTitle>

                    <FaqText>
                        We are closed on the following holidays:
                        <br />
                        -New Year’s Day
                        <br />
                        -Thanksgiving
                        <br />
                        -Christmas Eve (After 5 FaqText.m.)
                        <br />
                        -Christmas Day
                    </FaqText>

                </FaqSectionUnderline>


                <FaqSectionUnderline>

                    <FaqHeader>
                        Carry-Out & Delivery
                    </FaqHeader>

                    <FaqTitle>
                        Do you deliver?
                    </FaqTitle>

                    <FaqText>
                        We provide delivery services through our Catering Department.
                        You can view our catering menu online. For catering orders,
                        please feel free to call 321-972-1888 or 1-855-368-7748 (ext 3).
                    </FaqText>

                    <FaqList>
                        <FaqListItem>
                            <FaqLink href={catering_menu} target="_blank">
                                View our catering menu
                            </FaqLink>
                        </FaqListItem>
                    </FaqList>

                    <FaqText>
                        Delivery is also available through UberEats, BiteSquad, Amazon Restaurants,
                        and DoorDash
                        *Delivery service varies by location
                    </FaqText>

                </FaqSectionUnderline>


                <FaqSectionUnderline>

                    <FaqHeader>
                        Our Food
                    </FaqHeader>

                    <FaqTitle>
                        Is your sauce gluten-free?
                    </FaqTitle>

                    <FaqText>
                        Yes, our sauce is a gluten-free product. We do offer allergen information
                        for all of our food, which is available through our menu.
                    </FaqText>


                    <FaqTitle>
                        Do you sell your BBQ sauces?
                    </FaqTitle>

                    <FaqText>
                        Yes, we do. Our sauces are available for purchase at all Smokehouse
                        locations and online.
                    </FaqText>

                    <FaqList>
                        <FaqListItem>
                            <FaqLink href={catering_menu} target="_blank">
                                View our online store
                            </FaqLink>
                        </FaqListItem>
                    </FaqList>

                    <FaqTitle>
                        Do you have nutritional information?
                    </FaqTitle>

                    <FaqText>
                        We do not have nutritional information for our menu items. We do
                        however offer allergen information which is available through our menu.
                    </FaqText>

                    <FaqList>
                        <FaqListItem>
                            <FaqLink href={allergen_list} target="_blank">
                                View our allergen list
                            </FaqLink>
                        </FaqListItem>
                    </FaqList>

                    <FaqTitle>
                        Do you have reheating instructions?
                    </FaqTitle>

                    <FaqText>
                        Yes, we do. A full list of reheating instructions is available through
                        our menu.
                    </FaqText>

                    <FaqList>
                        <FaqListItem>
                            <FaqLink href={reheating_instructions} target="_blank">
                                View our reheating instructions
                            </FaqLink>
                        </FaqListItem>
                    </FaqList>

                </FaqSectionUnderline>


                <FaqSection>

                    <FaqHeader>
                        Our Company
                    </FaqHeader>

                    <FaqTitle>
                        Do you franchise?
                    </FaqTitle>

                    <FaqText>
                        We are a family-owned company and do not have intentions of franchising.
                    </FaqText>


                    <FaqTitle>
                        Does 4 Rivers offer donations?
                    </FaqTitle>

                    <FaqText>
                        Yes, we do. Please contact our Donations Coordinator using our donation form.
                    </FaqText>

                    <FaqList>
                        <FaqListItem><Link to="/donation" className="linkUp">Contact us for donations</Link></FaqListItem>
                    </FaqList>

                    <FaqTitle>
                        What is the best way to contact 4 Rivers?
                    </FaqTitle>

                    <FaqText>
                        Please contact us through our contact form.<br /><br />
                        For all media and press inquiries please contact Bo Morris of
                    </FaqText><br />

                    <FaqList>
                        <FaqListItem>
                            <FaqLink href="https://story-farm.com/">
                                Story farm
                            </FaqLink>
                        </FaqListItem>
                    </FaqList>

                    <FaqText>
                        at bomorris@story-farm.com
                    </FaqText>

                    <FaqList>
                        <FaqListItem>
                            <Link to="/contact">
                                Contact us
                            </Link>
                        </FaqListItem>
                    </FaqList>

                </FaqSection>


            </FaqWrapper>

            <Advertisement header="Still have Questions ?" label="contact us" link="/contact" />

        </FaqContainer >
    )
}

export default Faq
