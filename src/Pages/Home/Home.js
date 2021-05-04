import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { Info, Alink, Button, Image } from '../../Styled Components/styled-components'

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
import bonus_cart_bg from '../../img/home/bonus-cart-bg.jpg'
import catering_bg from '../../img/home/catering-bg.jpg'
import loyalty_bg from '../../img/home/loyalty-bg.jpg'
import our_beginings_bg from '../../img/home/ourBeginings-bg.jpg'
import goldbelly_bg from '../../img/home/goldbelly-bg.jpg'

import {
    HomeContainer,
    HomeCarousel,
    HomeHeader,
    HomeInfo,
    HomeButtonWrapper,
    HomeBonusCard,
    HomeCatering,
    HomeSauces,
    HomeLoyalty,
    HomeStory,
    HomeBeginings,
    HomeBeginingsContent,
    HomeBeginingsText,
    HomeGoldbelly,
    HomeBigButton,
    HomeImage
} from './Home.elements';


function Home() {
    return (
        <HomeContainer>

            <HomeCarousel>

                <Carousel slide={false}>

                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={carousel_meals_img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <HomeHeader>New holiday party packages</HomeHeader>
                            <HomeInfo>Party of 6 package $55 <br /> Party of 12 package $99 </HomeInfo>

                            <HomeButtonWrapper>
                                <Alink href="https://togoorder.com/web?id=1671#!/">
                                    <HomeBigButton margin="0 1rem 0 0">Order for pickup</HomeBigButton>
                                </Alink>
                                <Link to="/catering/order-online">
                                    <HomeBigButton colorBeige>Order for delivery</HomeBigButton>
                                </Link>
                            </HomeButtonWrapper>

                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel_hamburger_img}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <HomeHeader >Gobble, Gobble !</HomeHeader>
                            <HomeInfo>Stop missing out and start earning<br /> rewards today </HomeInfo>

                            <HomeButtonWrapper>
                                <Alink href="https://togoorder.com/web?id=1671#!/">
                                    <HomeBigButton >Order online</HomeBigButton>
                                </Alink>
                            </HomeButtonWrapper>

                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel_meat_img}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <HomeImage width="20rem" height="12rem" src={loyalty_program_img} />
                            <HomeInfo>The pilgrim is sailing away soon <br /> Feast on yours before nov.28 </HomeInfo>

                            <HomeButtonWrapper>
                                <Alink href="https://4rsmokehouse.myguestaccount.com/guest/enroll?card-template=jRsIsgd74CI%3d&template=11">
                                    <HomeBigButton margin="0 1rem 0 0">Sign up now</HomeBigButton>
                                </Alink>
                                <Alink href="https://4rsmokehouse.myguestaccount.com/guest/accountlogin">
                                    <HomeBigButton colorBeige>Login to my account</HomeBigButton>
                                </Alink>
                            </HomeButtonWrapper>

                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel_campus_img}
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <HomeHeader>4 Roots farm campus</HomeHeader>
                            <HomeInfo>Roundup your purchases and help support the development of our Orlando-based urban farm project The 4Roots Farm Campus</HomeInfo>
                            <HomeButtonWrapper>
                                <Alink href="https://www.4rootsfarm.org/donate">
                                    <HomeBigButton margin="0 1rem 0 0">Donate now</HomeBigButton>
                                </Alink>
                                <Alink href="https://www.4rootsfarm.org/">
                                    <HomeBigButton colorBeige>Learn more</HomeBigButton>
                                </Alink>
                            </HomeButtonWrapper>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </HomeCarousel>


            <HomeBonusCard image={bonus_cart_bg}>
                <HomeHeader>$ 5 bonus e-gift card</HomeHeader>
                <Info margin=".5rem 0 2rem 0" fontSize="1rem">For every $50 e-gift card purchase <br />starting on black friday</Info>
                <Link to="/gift-cards">
                    <Button>Order now</Button>
                </Link>
            </HomeBonusCard>



            <HomeCatering image={catering_bg}>
                <Image src={catering_text_img} width="17rem" height="4rem" />
                <Info fontSize="1rem" smallLetter margin="1.5rem 0 2rem 0">Bringing people together over great food.</Info>
                <Link to="/catering">
                    <Button small colorBeige>View catering info</Button>
                </Link>
            </HomeCatering>



            <Parallax
                bgImage={sauces_bg}
                strength={150}
                bgImageStyle={{ width: "100%", height: "150%" }}
            >
                <HomeSauces>
                    <Image width="60%" height="150px" src={shop_text_img} />
                    <Info smallLetter letterSpacing="3px" margin=".7rem 0 .7rem 0" >Sauces, Retail, Gift Cards, Turkeys & More</Info>
                </HomeSauces>
            </Parallax>


            <HomeLoyalty image={loyalty_bg}>
                <Image width="22rem" height="4rem" src={loyalty_title} />
                <Info smallLetter margin="1rem 0 1.5rem 0">4Rewards Loyalty Program</Info>
                <Link to="/loyalty">
                    <Button small colorBeige>Sign up now</Button>
                </Link>
            </HomeLoyalty>


            <Parallax
                bgImage={beginings_bg}
                strength={150}
                bgImageStyle={{ width: "100%", height: "150%" }}
            >
                <HomeStory>
                    <HomeImage width="36rem" height="3.5rem" src={beginings_title} />
                    <Info margin="1rem 0 1.5rem 0" smallLetter>The story of 4 Rivers</Info>
                    <Link to="/about">
                        <Button small colorBeige>Learn about 4R</Button>
                    </Link>
                </HomeStory>

            </Parallax>


            <HomeBeginings image={our_beginings_bg}>
                <Image width="20rem" src={ourBeginings_text} />
                <HomeBeginingsContent>
                    <HomeBeginingsText>
                        4 Rivers Smokehouse was never supposed to be a restaurant. John Rivers fell in love with brisket after visiting his wife’s family in Texas. He then spent the better part of two decades perfecting his own dry rub and preparation techniques and frequently served his signature brisket at family functions and community events. Then in 2004, after hearing of a young girl who attended the same church as him had cancer, John Rivers was inspired to help raise funds for her treatment by doing the thing he knew best… Thus, the Barbecue Ministry was created.<br /><br />
                        The following years saw many more successful fundraisers put on by the Barbecue Ministry, which eventually led to the opening of The First 4 Rivers Smokehouse. Established in an old transmission shop on Fairbanks Avenue in Winter Park, FL. In 2009, the original 4 Rivers Smokehouse attracted herds of barbecue connoisseurs, who flocked to the neon “Hot Brisket Now” sign and seductive smell of slow smoked meats.<br /><br />
                        It wasn’t just the barbecue though. The southern homestyle sides and fresh bakery items soon get just as much attention as the smoked barbecue meats. That’s because John Rivers painstakingly searched for the best southern comfort food recipes and perfected them to complement his award-winning meats.<br /><br />
                        It wasn’t long until 4 Rivers had outgrown the original location and a larger smokehouse was necessary. The perfect location was available just a few blocks down across the street and so the current 4 Rivers Smokehouse Winter Park was built.<br /><br />
                    </HomeBeginingsText>
                    <HomeBeginingsText>
                        A second and third location were opened in Winter Garden and Longwood, respectively, but 4 Rivers maintained the same family-owned, homestyle dining experience and continued support from the community.<br /><br />
                        A Jacksonville native, the fifth location was close to John River’s heart. Bringing his thriving vision of BBQ and homestyle southern cooking back to his hometown of Jacksonville, but also the first foray into a new town was thrilling and terrifying at the same time. The location thrived and led 4 Rivers to look at other locations outside of the Orlando Metropolitan Area.<br /><br />
                        Gainesville was sixth location and the first 4 Rivers Smokehouse in a college town. UF home games bring lots of UF alums from Orlando, many of them 4R fans into town, but the school and local community also gave this location lots of love, inspiring the seventh location near UCF in east Orlando.<br /><br />
                        North Tampa’s Carrollwood location was next followed by Tallahassee, then South Tampa, Downtown Orlando’s City Hall breakfast, and lunch location, then Kissimmee by the theme parks, and Coral Springs down by Fort Lauderdale.<br /><br />
                        We’d like to invite you to experience the 4 Rivers Smokehouse difference in person. From our friendly staff to our delectable meats, our mouthwatering sides to our decadent desserts, see for yourself what all the fuss is about.
                    </HomeBeginingsText>
                </HomeBeginingsContent>
            </HomeBeginings>



            <HomeGoldbelly image={goldbelly_bg}>
                <HomeHeader>Now Shipping Nationwide with</HomeHeader>
                <Image width="24rem" height="5rem" src={goldbelly_logo} margin="1.5rem 0 2rem 0" />
                <Alink href="https://www.goldbelly.com/4-rivers-smokehouse">
                    <Button small >Ship nationwide now</Button>
                </Alink>
            </HomeGoldbelly>
        </HomeContainer >
    )
}

export default Home;
