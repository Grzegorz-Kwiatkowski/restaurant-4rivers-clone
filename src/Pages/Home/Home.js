import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import './Home.css'
import { Header, Info, Alink, Button, Image, Container } from '../../Styled Components/styled-components'

import carousel_hamburger_img from '../../img/home/carousel-hamurger-img.jpg'
import carousel_meals_img from '../../img/home/carousel-meals-img.jpg'
import carousel_meat_img from '../../img/home/carousel-meat_img.jpg'
import carousel_campus_img from '../../img/home/carousel_campus_img.jpg'
import loyalty_program_img from '../../img/home/loyalty-program-img.png'
import catering_text_img from '../../img/home/catering-text-img.png'
import shop_text_img from '../../img/home/shop-text-img.png'
import sauces_bg from '../../img/home/sauces-bg.jpg'
import loyalty_title from '../../img/home/loyalty-title.png'
import beginings_bg from '../../img/home/beginings-bg.jpg'
import beginings_title from '../../img/home/beginings-title.png'
import ourBeginings_text from '../../img/home/ourBeginings-text.png'
import goldbelly_logo from '../../img/home/goldbelly-logo.png'


function Home() {
    return (
        <div className="home">

            <div className="home__carousel">
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={carousel_meals_img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Header className="underline" fontSize="5em" letterSpacing="9px" >New holiday party packages</Header>
                            <Info colorWhite marginBottom>Party of 6 package $55 <br /> Party of 12 package $99 </Info>
                            <div className="home__carouselBtn">
                                <Alink href="https://togoorder.com/web?id=1671#!/">
                                    <Button big mr>Order for pickup</Button>
                                </Alink>
                                <Link to="/catering/order-online">
                                    <Button fontSize colorBeige>Order for delivery</Button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel_hamburger_img}
                            alt="Two slide"
                        />
                        <Carousel.Caption>
                            <Header className="underline" fontSize="5em" letterSpacing="9px">Gobble, Gobble !</Header>
                            <Info marginBottom >Stop missing out and start earning<br /> rewards today </Info>
                            <div className="home__carouselBtn">
                                <Alink href="https://togoorder.com/web?id=1671#!/">
                                    <Button >Order online</Button>
                                </Alink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel_meat_img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Image width="450px" height="300px" className="underline" marginBottom="40px" src={loyalty_program_img} />
                            <Info marginTop marginBottom >The pilgrim is sailing away soon <br /> Feast on yours before nov.28 </Info>
                            <div className="home__carouselBtn">
                                <Alink href="https://4rsmokehouse.myguestaccount.com/guest/enroll?card-template=jRsIsgd74CI%3d&template=11">
                                    <Button mr>Sign up now</Button>
                                </Alink>
                                <Alink href="https://4rsmokehouse.myguestaccount.com/guest/accountlogin">
                                    <Button colorBeige>Login to my account</Button>
                                </Alink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel_campus_img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Header className="underline" fontSize="5em" letterSpacing="9px">4 Roots farm campus</Header>
                            <Info marginTop marginBottom>Roundup your purchases and help support the development of our Orlando-based urban farm project The 4Roots Farm Campus</Info>
                            <div className="home__carouselBtn">
                                <Alink href="https://www.4rootsfarm.org/donate">
                                    <Button>Donate now</Button>
                                </Alink>
                                <Alink href="https://www.4rootsfarm.org/">
                                    <Button colorBeige>Learn more</Button>
                                </Alink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


            <Container padding="70px" className="home__bonusCard">
                <Header fontSize="5.5em" letterSpacing="15px">$ 5 bonus e-gift card</Header>
                <Info >For every $50 e-gift card purchase <br />starting on black friday</Info>
                <Link to="/gift-cards">
                    <Button>Order now</Button>
                </Link>
            </Container>



            <Container padding="120px" className="home__catering">
                <Image src={catering_text_img} />
                <Info >Bringing people together over great food.</Info>
                <Link to="/catering">
                    <Button colorBeige>View catering info</Button>
                </Link>
            </Container>



            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={sauces_bg}
                strength={250}
            >
                <Container padding="80px" className="home__sauces">
                    <Image width="60%" height="150px" src={shop_text_img} />
                    <Info >Sauces, Retail, Gift Cards, Turkeys & More</Info>
                </Container>
            </Parallax>


            <Container className="home__loyalty">
                <Image width="30%" height="15%" src={loyalty_title} />
                <Info mt>Pitmaster Loyalty Club</Info>
                <Link to="/loyalty">
                    <Button colorBeige>Find out more</Button>
                </Link>
            </Container>


            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={beginings_bg}
                strength={350}
            >
                <Container className="home__story">
                    <Image width="50%" height="15%" src={beginings_title} />
                    <Info>The story of 4 Rivers</Info>
                    <Link to="/about">
                        <Button colorBeige>Learn about 4R</Button>
                    </Link>
                </Container>

            </Parallax>


            <Container padding="40px" className="home__beginings">
                <Image marginBottom="40px" width="60%" src={ourBeginings_text} />
                <article className="home__beginingsContent">
                    <p>
                        4 Rivers Smokehouse was never supposed to be a restaurant. John Rivers fell in love with brisket after visiting his wife’s family in Texas. He then spent the better part of two decades perfecting his own dry rub and preparation techniques and frequently served his signature brisket at family functions and community events. Then in 2004, after hearing of a young girl who attended the same church as him had cancer, John Rivers was inspired to help raise funds for her treatment by doing the thing he knew best… Thus, the Barbecue Ministry was created.<br /><br />
                        The following years saw many more successful fundraisers put on by the Barbecue Ministry, which eventually led to the opening of The First 4 Rivers Smokehouse. Established in an old transmission shop on Fairbanks Avenue in Winter Park, FL. In 2009, the original 4 Rivers Smokehouse attracted herds of barbecue connoisseurs, who flocked to the neon “Hot Brisket Now” sign and seductive smell of slow smoked meats.<br /><br />
                        It wasn’t just the barbecue though. The southern homestyle sides and fresh bakery items soon get just as much attention as the smoked barbecue meats. That’s because John Rivers painstakingly searched for the best southern comfort food recipes and perfected them to complement his award-winning meats.<br /><br />
                        It wasn’t long until 4 Rivers had outgrown the original location and a larger smokehouse was necessary. The perfect location was available just a few blocks down across the street and so the current 4 Rivers Smokehouse Winter Park was built.<br /><br />
                    </p>
                    <p>
                        A second and third location were opened in Winter Garden and Longwood, respectively, but 4 Rivers maintained the same family-owned, homestyle dining experience and continued support from the community.<br /><br />
                        A Jacksonville native, the fifth location was close to John River’s heart. Bringing his thriving vision of BBQ and homestyle southern cooking back to his hometown of Jacksonville, but also the first foray into a new town was thrilling and terrifying at the same time. The location thrived and led 4 Rivers to look at other locations outside of the Orlando Metropolitan Area.<br /><br />
                        Gainesville was sixth location and the first 4 Rivers Smokehouse in a college town. UF home games bring lots of UF alums from Orlando, many of them 4R fans into town, but the school and local community also gave this location lots of love, inspiring the seventh location near UCF in east Orlando.<br /><br />
                        North Tampa’s Carrollwood location was next followed by Tallahassee, then South Tampa, Downtown Orlando’s City Hall breakfast, and lunch location, then Kissimmee by the theme parks, and Coral Springs down by Fort Lauderdale.<br /><br />
                        We’d like to invite you to experience the 4 Rivers Smokehouse difference in person. From our friendly staff to our delectable meats, our mouthwatering sides to our decadent desserts, see for yourself what all the fuss is about.
                    </p>
                </article>
            </Container>



            <Container className="home__goldbelly">
                <Header letterSpacing="15px" fontSize="5.5em">Now Shipping Nationwide with</Header>
                <Image width="600px" height="150px" src={goldbelly_logo} />
                <Alink href="https://www.goldbelly.com/4-rivers-smokehouse">
                    <Button >Ship nationwide now</Button>
                </Alink>
            </Container>
        </div>
    )
}

export default Home;
