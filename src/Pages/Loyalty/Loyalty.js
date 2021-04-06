import React from 'react'
import { Parallax } from "react-parallax";
import { Link, useRouteMatch } from 'react-router-dom'


import { Button, Image } from '../../Styled Components/styled-components'

import {
    LoyaltyContainer,
    LoyaltyParallaxWrapper,
    LoyaltyButton,
    LoyaltyParallaxInfo,
    LoyaltyUnderlineWrapper,
    LoyaltyWrapper,
    LoyaltyHeader,
    LoyaltyInfo,
    LoyaltyContent
} from './Loyalty.elements';

import Advertisement from '../../components/Advertisement/Advertisement'

import meat from '../../img/loyalty/meat_img.jpg'
import loyalty_logo from '../../img/loyalty/loyalty-program-img.png'


function Loyalty() {

    const { url } = useRouteMatch();

    return (
        <LoyaltyContainer>

            <Parallax bgImage={meat} strength={250}>

                <LoyaltyParallaxWrapper>

                    <Image src={loyalty_logo} width="17rem" height="15rem" />

                    <LoyaltyParallaxInfo>
                        Start earning bigger, better, and quicker rewards<br />
                        in just a few simple clicks
                    </LoyaltyParallaxInfo>

                    <Link to="">
                        <LoyaltyButton colorBeige>
                            Sign up now
                        </LoyaltyButton>
                    </Link>

                    <Link to="">
                        <LoyaltyButton>
                            Login to my account
                        </LoyaltyButton>
                    </Link>

                </LoyaltyParallaxWrapper>

            </Parallax>


            <LoyaltyUnderlineWrapper>

                <LoyaltyHeader>
                    How to Join
                </LoyaltyHeader>

                <LoyaltyInfo>
                    Signing up only takes 1 minute!
                </LoyaltyInfo>

                <LoyaltyContent>
                    Stop missing out and start earning rewards today!<br /><br />
                    Three convenient ways to sign up: <br />
                    1. Register online here<br />
                    2. Sign up at the register<br />
                    3. Text 4RIVERS + your email to 73757<br /><br />
                    Make sure to never miss a reward by updating your communication settings at sign up. <br />
                    Exclusive 4R loyalty offers will be sent directly to your inbox or via text message to your phone.<br /><br />
                </LoyaltyContent>

                <LoyaltyButton colorBeige>
                    Sign up now
                </LoyaltyButton>

            </LoyaltyUnderlineWrapper>



            <LoyaltyUnderlineWrapper>

                <LoyaltyHeader>
                    Registering an Existing 4R Loyalty Account
                </LoyaltyHeader>

                <LoyaltyInfo>
                    Good news! Your account has automatically been transferred
                </LoyaltyInfo>

                <LoyaltyContent>
                    To make things even easier, we went ahead and transferred your account (including your earned rewards) automatically into our new 4R Loyalty program.<br /><br />
                    Simply <Link to="" className="link">request a new password</Link> by using your card number or email. Then <Link to="" className="link">login</Link> to your account to check what kinds of rewards are waiting for you!<br /><br />
                    To see how your visits from our previous Pitmaster Loyalty Program transferred into points in our new 4Rewards Loyalty Program, visit our <Link to="/faq" className="link">FAQ page</Link>.<br /><br />
                </LoyaltyContent>

                <LoyaltyButton colorBeige >Login to my account now</LoyaltyButton>

            </LoyaltyUnderlineWrapper>


            <LoyaltyUnderlineWrapper>

                <LoyaltyHeader>
                    Earning & Redeeming Rewards Points
                </LoyaltyHeader>

                <LoyaltyInfo>
                    Earning Rewards Points
                </LoyaltyInfo>

                <LoyaltyContent>
                    Created with you in mind, we want our members to feel the 4R love with each visit.<br />
                    Rewards are now better and quicker than ever before. Here’s a breakdown of the system:<br />
                    1. $1 = 1 point*<br />
                    2. Earn a $5 reward for every 75 points accumulated<br />
                    3. Free dessert during your birthday month<br />
                    4. Earned rewards expire after 45 days<br />
                    <br /><br />
                    In addition, 4Rewards members will also earn exclusive rewards such as double point days, limited time offers, BOGOs & discounts, early access to new specials, and much more!<br />
                    Earn 4Rewards Loyalty points in-store and over phone (when paying at pickup). Earning points via online ordering is coming soon!<br /><br />
                    *Up to a maximum of 750 points per transaction.<br /><br />
                </LoyaltyContent>

                <LoyaltyInfo>
                    Redeeming Rewards Points
                </LoyaltyInfo>

                <LoyaltyContent>
                    At this time, 4R Loyalty rewards can only be redeemed in-store and pick up for call-in orders.<br />
                    Online redemption coming soon!<br /><br />
                    To redeem your reward, provide your phone number or loyalty account number at checkout.<br />
                </LoyaltyContent>


            </LoyaltyUnderlineWrapper>


            <LoyaltyWrapper>

                <LoyaltyHeader>
                    Forgot to apply your loyalty account to your last purchase?
                </LoyaltyHeader>

                <LoyaltyInfo>
                    We can help with that!
                </LoyaltyInfo>

                <LoyaltyContent>
                    We can help add a visit to your loyalty account. Submit your visit information here or tap the button below.<br /><br />
                   If you questions regarding your 4Rewards loyalty account, contact us and one of our team members will be happy to assist you.<br /><br />
                </LoyaltyContent>

                <Link to={`${url}/missed-visit`}>
                    <LoyaltyButton colorBeige >Add a visit</LoyaltyButton>
                </Link>

            </LoyaltyWrapper>

            <Advertisement header="Hungry ?" label="Order online now" link="https://order.4rsmokehouse.com/" />

        </LoyaltyContainer >
    )
}

export default Loyalty;
