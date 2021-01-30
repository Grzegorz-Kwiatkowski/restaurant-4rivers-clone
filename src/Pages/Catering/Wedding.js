import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import { Container, Header, Info, Button, Image } from '../../Styled Components/styled-components'

import wedding_catering from '../../img/catering/wedding/wedding-catering.jpg'
import wedding_catering_services from '../../img/catering/wedding/wedding-catering-services.jpg'
import the_branch_offerings from '../../img/catering/wedding/the-branch-offerings.jpg'
import white_cakes from '../../img/catering/wedding/white-cakes.jpg'

function Wedding() {
    return (
        <div className="wedding">

            <Parallax bgImage={wedding_catering} strength={250}>
                <Container
                    padding="80px"
                    className="home__sauces"
                    style={{ height: "100vh" }}>
                    <Header
                        className="underline--white"
                        fontSize="7em"
                        letterSpacing="12px">
                        Wedding Catering
          </Header>
                    <Info letterSpacing="1px">
                        From wedding receptions & rehearsal dinners to cocktail hour & dinner service. <br />
                    4 Rivers can do it all.
          </Info>

                    <Link to="/catering/order-online">
                        <Button marginTop="10px">Contact us online</Button>
                    </Link>
                    <Link to="/catering/contact-us">
                        <Button colorBeige>Contact us by phone</Button>
                    </Link>
                </Container>
            </Parallax>


            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header color="#000" fontFamily="PatuaOne" smallLetter fontSize="2.5em">
                    Your Dream Wedding Starts Here
        </Header>
                <Info
                    fontFamily="PatuaOne"
                    color="#8F2626"
                    letterSpacing="1px">
                    4 Rivers Wedding Catering Offers Services to Fit Your Exact Needs
        </Info>

                <Info fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    With more than 10 years of catering expertise, it’s easy to say that our team at 4 Rivers excels at creating unforgettable wedding experiences. With extensive menu offerings, customizable wedding packages, and hands-on catering specialists who care, we’re honored to be one of the most sought-after wedding caterers in our great state of Florida.<br /><br />
                    Because of the high volume of weddings that 4 Rivers caters every year, we’re excited to share that we’ve launched a full-service wedding division called <Link to="/the-branch-by-4-rivers" className="link">The Branch by 4 Rivers</Link> , which offers a more hands-on approach to planning a wedding and features our first venue partnership with <a href="https://www.brambletreeestate.com/" className="link">Bramble Tree Estate</a>. <br /><br />
                    With 4 Rivers Smokehouse locations from Tallahassee to Coral Springs, Daytona Beach to Tampa Bay, 4 Rivers can cater weddings just about anywhere in Florida.<br /><br />
                    Contact our catering team <Link to="/contact-4r-catering/" className="link">online</Link>, by email, or by phone today to get started planning.<br /><br />
                </Info>
                <Link to="/catering/wedding-catering">
                    <Button colorBeige>Get a quote</Button>
                </Link>
                <Link to="/catering/vendor-list">
                    <Button colorBeige>Vendor list</Button>
                </Link>

            </Container>



            <Image src={wedding_catering_services} width="100%" height="100%" />

            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header
                    color="#000"
                    fontFamily="PatuaOne"
                    smallLetter
                    fontSize="2.2em">
                    Wedding Services
          </Header>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    4 Rivers Wedding Catering offers clients the complete full-service experience, catering to all types of wedding events from wedding receptions to rehearsal dinners to bridal showers and more. Our team is here to make planning easy, so you don’t have to stress the little details. We’ll take care of everything! <br /><br />
                       4 Rivers Wedding Catering service events typically include: <br />
                    <strong>Wedding Receptions </strong><br />
                    <strong>Rehearsal Dinners </strong><br />
                    <strong>Engagement Parties </strong><br />
                    <strong>& Bridal Showers </strong><br />
                    <br />
                    <br />
                    <br />
                    <h2>Service Options</h2>
                    <br />
                    <br />
                        4 Rivers offers many different service styles and packages, so you can fulfill your exact needs. <br /><br />
                        We do everything from bartending and champagne toasts to dinner service and custom wedding cakes (fulfilled by our award-winning pastry chefs at <Link to="/4r-specialty-cakes" className="link">4R Specialty Cakes</Link>). We can also serve your guests to meet your exact needs including passed, plated, or family-style offerings. <br /><br />
                    <Link to="/catering/menu" className="link">Customize your menu</Link> by adding a 4 Rivers action station! Our most popular offering, of course, is our Signature Angus Brisket Carving Station, but we also feature taco bars, dessert bars, or even crawfish boils. Whatever your need, 4 Rivers can make it happen. <br /><br />
                        Tap below for more details on our <Link to="/catering/menu" className="link">offerings and services</Link>. <br /><br />
                </Info>

                <Link to="/catering/menu">
                    <Button colorBeige>
                        See a menu
            </Button>
                </Link>
                <Link to="/catering/contact-us">
                    <Button colorBeige>
                        Contact a catering expert
            </Button>
                </Link>


            </Container>





            <Image src={the_branch_offerings} width="100%" height="100%" />

            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header
                    color="#000"
                    fontFamily="PatuaOne"
                    smallLetter
                    fontSize="2.2em">
                    The Branch by 4 Rivers
          </Header>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    The Branch by 4 Rivers was established in 2017 by John and Monica Rivers as a full-service wedding experience showcasing the elegant side of 4 Rivers Smokehouse<br /><br />
                            In early 2020, <Link to="/the-branch-by-4-rivers" className="link">The Branch by 4 Rivers</Link> and Bramble Tree Estate came together to offer the best full-service wedding and special event venue in Orlando, pairing the beauty of Bramble Tree Estate with the special event expertise and culinary prowess of 4 Rivers Restaurant Group. <br />
                            Thus, The Branch at Bramble Tree Estate was born. <br />
                    <br />
                            The Branch at Bramble Tree Estate is the first exclusive venue partnership under The Branch by 4 Rivers umbrella with hopes to expand to other venues around the state of Florida. <br /><br />
                </Info>

                <Link to="/the-branch-by-4-rivers">
                    <Button colorBeige>
                        Learn more
            </Button>
                </Link>
            </Container>


            <Image src={white_cakes} width="100%" height="100%" />

            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header
                    color="#000"
                    fontFamily="PatuaOne"
                    smallLetter
                    fontSize="2.2em">
                    4R Specialty Cakes
          </Header>

                <Info
                    fontFamily="PatuaOne"
                    smallLetter
                    color="#8F2626"
                    letterSpacing="1px">
                    Custom Wedding and Themed Cakes by 4 Rivers
                </Info>

                <Info fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    <Link to="/4r-specialty-cakes" className="link">4R Specialty Cakes</Link> was created to make your sweetest dreams come to life. From custom wedding cakes and birthday cakes to pies and wedding dessert packages, our award-winning pastry chefs can do it all.<br /><br />
                    No cake dream is too big or too small. Our pastry chefs love to be challenged and will help you create a delicious masterpiece perfect for your wedding or special event.<br /><br />
                    4R Specialty Cakes is based out of Orlando, Florida, but can deliver custom wedding cakes to many venues across the state of Florida.<br /><br />
                    Tap below to see pictures of some custom wedding cakes we’re really proud of or to get in touch with our team at <Link to="/4r-specialty-cakes" className="link">4R Specialty Cakes</Link>.<br /><br />
                </Info>

                <a href="https://www.4rspecialtycakes.com/custom-cakes">
                    <Button colorBeige>
                        See gallery
            </Button>
                </a>
                <a href="https://www.4rspecialtycakes.com/contact">
                    <Button colorBeige>
                        Contact 4R specialty cakes
            </Button>
                </a>

            </Container>

        </div >
    )
}

export default Wedding

