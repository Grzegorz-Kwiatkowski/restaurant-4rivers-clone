import React, { useState } from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import { adverts } from '../../data';

import {
    AboutContainer,
    AboutParallaxWrapper,
    AboutParallaxImage,
    AboutParallaxInfo,
    AboutHeader,
    AboutInfo,
    AboutWrapper,
    AboutArticle,
    AboutContent,
    AboutText,
    AboutButton,
    AboutParallaxFunFactWrapper,
    AboutParallaxFunFactTitle,
    AboutParallaxFunFactContent,
    AboutParallaxAwards,
    AboutImage,
    AboutAdverts,
    AboutVideo,
    AboutVideoWrapper
} from './About.elements'

import opener_bg_about from '../../img/about/opener_bg_about.jpg'
import opener_text_about from '../../img/about/opener_text_about.png'
import bg_about_funfact from '../../img/about/bg_about_funfact.jpg'
import about_award_cookinglight from '../../img/about/about_award_cookinglight.jpg'
import about_award_cowscabs from '../../img/about/about_award_cowscabs.jpg'
import about_award_foodnetwork from '../../img/about/about_award_foodnetwork.jpg'
import about_award_jamesbeard from '../../img/about/about_award_jamesbeard.jpg'
import about_award_meatopia from '../../img/about/about_award_meatopia.jpg'

import Advert from '../../components/Advert/Advert'


function About() {

    const [aboutAdverts, setAdverts] = useState(adverts);
    return (
        <AboutContainer>

            <Parallax bgImage={opener_bg_about} strength={250}>

                <AboutParallaxWrapper>

                    <AboutParallaxImage src={opener_text_about} />
                    <AboutParallaxInfo>
                        It all started in a garage
                    </AboutParallaxInfo>

                </AboutParallaxWrapper>

            </Parallax>

            <AboutWrapper>


                <AboutArticle>
                    <AboutInfo>
                        “<strong>4 Rivers had its humble beginnings.</strong>
                    Just me, a smoker, and an age-old challenge—cooking brisket."
                    </AboutInfo>
                    <AboutContent>
                        <AboutText>
                            John Rivers never set out to create the most successful BBQ chain in
                            Florida. He’s not a classically trained chef or graduate of culinary
                            school. It was in Texas that he found the two loves of his life: his
                            wife and the delicate art of brisket. And it’s been those very two
                            godsends that inspired 4 Rivers as we know it.
                        </AboutText>

                        <AboutText>
                            John spent 20 years in the healthcare industry before retiring as president
                            of a billion-dollar company. During that time, he had the opportunity to
                            travel the country, honing his taste and talent for brisket perfection.
                            As he soaked up the flavors and practices of ‘cue fare countrywide, John’s
                            dream of de-regionalizing BBQ was born.
                        </AboutText>

                    </AboutContent>

                    <AboutVideoWrapper>
                        <AboutVideo
                            width="880"
                            height="520"
                            src="https://www.youtube.com/embed/6S8rdn5DVLY"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </AboutVideo>
                    </AboutVideoWrapper>

                </AboutArticle>


                <AboutArticle>
                    <AboutInfo>
                        “<strong>This was never supposed to be a restaurant.</strong>
                        My definition of helping meant doing what felt most natural
                        when comfort was in order—feed those in need."
                    </AboutInfo>
                    <AboutContent>
                        <AboutText>
                            4 Rivers Smokehouse began with the launch of the “Barbecue Ministry”
                            in 2004, when John hosted a cookout fundraiser to support a local
                            family whose young daughter was battling cancer. This one event
                            resulted in a passion for supporting local schools, churches, and
                            charitable organizations, and a few years later, smoking thousands
                            of pounds of meat out of a garage just wouldn’t cut it anymore.
                        </AboutText>

                        <AboutText>
                            After trials, tribulations, and a whole lot of burnt ends, we finally
                            flipped that “Hot Brisket Now” sign on in October of 2009. Within the
                            first hour, a line had formed out the door…and then around the corner.
                        </AboutText>
                        <AboutText>
                            Today, we have several locations across the state of Florida, with plans
                            for continued expansion and more than 1,000 amazing folks on our 4 Rivers
                            team. Most importantly, the Barbecue Ministry remains our foundation and
                            focus, and will until the cows come home.
                        </AboutText>

                    </AboutContent>
                </AboutArticle>
            </AboutWrapper>


            <Parallax bgImage={bg_about_funfact} strength={150}>

                <AboutParallaxFunFactWrapper>

                    <AboutParallaxFunFactTitle>
                        Fun Fact:
                        </AboutParallaxFunFactTitle>

                    <AboutParallaxFunFactContent>
                        <strong>Why four Rivers?</strong> In short, it represents our family, John, Monica (wife),
                        Jared (son) and Cameron (daughter). But they also appreciate the
                        serendipitous double meaning with Genesis 2:10, where four rivers
                        branch from that which flows out of Eden. Now you know!
                        </AboutParallaxFunFactContent>
                </AboutParallaxFunFactWrapper>

            </Parallax>


            <AboutWrapper>
                <AboutArticle>
                    <AboutHeader>
                        Awards & Recognition
                    </AboutHeader>
                    <AboutContent>
                        <AboutText>
                            Rivers’ concept immediately attracted local and national recognition,
                            with two invitations to cook at the prestigious James Beard House in
                            NYC, four consecutive invitations to present at the 2011 – 2014
                            Food Network South Beach Wine & Food Festival, and appearances on
                            NBC and FOX morning shows. He’s also been celebrated by USA Today,
                            Paula Deen Magazine, FOOD Magazine, Cooking Light, Food & Wine,
                            Cigar Aficionado, Restaurant Business, and TravelandLesiure.com,
                            and named a finalist for the 2013 Florida Ernst and Young Entrepreneur
                            of the Year Award. In 2014, John Rivers published The Southern Cowboy
                            Cookbook, a kitchen masterpiece that’s destined to become a classic.
                        </AboutText>
                    </AboutContent>


                    <AboutParallaxAwards>
                        <AboutImage src={about_award_foodnetwork} />
                        <AboutImage src={about_award_cowscabs} />
                        <AboutImage src={about_award_jamesbeard} />
                        <AboutImage src={about_award_meatopia} />
                        <AboutImage src={about_award_cookinglight} />
                    </AboutParallaxAwards>
                </AboutArticle>


                <AboutArticle>
                    <AboutHeader>
                        Our Mission & Purpose
                    </AboutHeader>
                    <AboutContent>
                        <AboutText>
                            We exist to use our God-given gifts to support the local community through
                            exceptional products, steadfast customer service, and uncompromised integrity.
                        </AboutText>
                    </AboutContent>
                </AboutArticle>


                <AboutArticle>
                    <AboutHeader>
                        Community Involvement
                    </AboutHeader>
                    <AboutContent>
                        <AboutText>
                            At the heart of our culture is a keen appetite for contributing back into
                            the growth of the community, and with roots in ministry, we’re dedicated
                            to supporting those in need. Good food and good people will build a stronger,
                            safer, and kinder community. Join us in backing the multitude of impactful
                            charitable organizations in our area, including Coalition for the Homeless,
                            Arnold Palmer Medical Center, Foundation for Foster Children, Elevate Orlando,
                            and the Florida Hospital and Foundation.
                        </AboutText>

                        <Link to="/donation">
                            <AboutButton colorBeige>
                                View Donation<br /> Request Form
                        </AboutButton>
                        </Link>

                    </AboutContent>
                </AboutArticle>


                <AboutArticle>
                    <AboutHeader>
                        Our New Endeavors
                    </AboutHeader>
                    <AboutInfo>
                        Something savory, something sweet.More ways
                        than one to get your fill.
                    </AboutInfo>
                    <AboutContent>
                        <AboutText>
                            Don’t get us wrong, we love the Smokehouse to pieces. But in honor of our
                            family’s roots, we’re adding to the stack with Southern comfort foods at
                            The COOP and from-scratch desserts made by The Sweet Shop.
                        </AboutText>
                    </AboutContent>
                </AboutArticle>


                <AboutArticle>
                    <AboutHeader>
                        Community Recognition
                    </AboutHeader>

                    <AboutContent>
                        <AboutText>
                            In summer of 2017, the Rosen School of Hospitality honored Chef John Rivers
                            by inducting him into the Central Florida Hospitality Hall of Fame. This video,
                            created by the university, was put together and played at The Pineapple
                            Ball as a tribute to John. We are very humbled and grateful for this recognition.
                        </AboutText>
                    </AboutContent>


                    <AboutVideoWrapper>
                        <AboutVideo width="880" height="520"
                            src="https://www.youtube.com/embed/ei2vOzgQPVk"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </AboutVideo>
                    </AboutVideoWrapper>

                </AboutArticle>

            </AboutWrapper>


            <AboutAdverts>
                {aboutAdverts.map(advert => <Advert key={advert.id} image={advert.image} header={advert.header} info={advert.info} btnLabel={advert.btnLabel} link={advert.link} />)}
            </AboutAdverts>

        </AboutContainer>
    )
}

export default About
