import React from 'react'
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom'

import './Loyalty.css'
import { Container, Header, Info, Button, Image } from '../../Styled Components/styled-components'
import Suggestion from '../../components/Suggestion'

import meat from '../../img/loyalty/meat_img.jpg'
import loyalty_logo from '../../img/loyalty/loyalty-program-img.png'

function Loyalty() {
    return (
        <div className="loyalty">
            <Parallax bgImage={meat} strength={250}>
                <Container padding="80px" >
                    <Image src={loyalty_logo} width="350px" height="300px" />

                    <Info letterSpacing="1px">
                        Start earning bigger, better, and quicker rewards<br />
                        in just a few simple clicks
                    </Info>

                    <Link to="">
                        <Button colorBeige marginTop="10px">Sign up now</Button>
                    </Link>
                    <Link to="">
                        <Button >Login to my account</Button>
                    </Link>
                </Container>
            </Parallax>


            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header color="#000" fontFamily="PatuaOne" smallLetter>How to Join</Header>
                <Info fontFamily="PatuaOne" color="#8F2626" letterSpacing="2px">
                    Signing up only takes 1 minute!
                </Info>
                <Info fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    Stop missing out and start earning rewards today!<br /><br />
                Three convenient ways to sign up: <br />
                1. Register online here<br />
                2. Sign up at the register<br />
                3. Text 4RIVERS + your email to 73757<br /><br />
                Make sure to never miss a reward by updating your communication settings at sign up. <br />
                Exclusive 4R loyalty offers will be sent directly to your inbox or via text message to your phone.<br /><br />
                </Info>

                <Button colorBeige marginBottom="50px">Sign up now</Button>
            </Container>


            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header color="#000" fontFamily="PatuaOne" smallLetter>Registering an Existing 4R Loyalty Account</Header>
                <Info fontFamily="PatuaOne" color="#8F2626" letterSpacing="2px">
                    Good news! Your account has automatically been transferred
                </Info>
                <Info fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    To make things even easier, we went ahead and transferred your account (including your earned rewards) automatically into our new 4R Loyalty program.<br /><br />
                    Simply <Link to="" className="link">request a new password</Link> by using your card number or email. Then <Link to="" className="link">login</Link> to your account to check what kinds of rewards are waiting for you!<br /><br />
                    To see how your visits from our previous Pitmaster Loyalty Program transferred into points in our new 4Rewards Loyalty Program, visit our <Link to="/faq" className="link">FAQ page</Link>.<br /><br />
                </Info>

                <Button colorBeige marginBottom="50px">Login to my account now</Button>
            </Container>


            <Container className="underline--gray" padding="40px 220px 40px 220px">
                <Header color="#000" fontFamily="PatuaOne" smallLetter>Earning & Redeeming Rewards Points</Header>
                <Info fontFamily="PatuaOne" color="#8F2626" letterSpacing="2px">
                    Earning Rewards Points
                </Info>
                <Info fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
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
                </Info>
                <Info fontFamily="PatuaOne" color="#8F2626" letterSpacing="2px">Redeeming Rewards Points</Info>
                <Info marginBottom="50px" fontFamily="PatuaOne" smallLetter color="#000" letterSpacing="1px">
                    At this time, 4R Loyalty rewards can only be redeemed in-store and pick up for call-in orders.<br />
                Online redemption coming soon!<br /><br />
                To redeem your reward, provide your phone number or loyalty account number at checkout.<br />
                </Info>
            </Container>


            <Container padding="40px 220px 40px 220px">
                <Header color="#000" fontFamily="PatuaOne" smallLetter>Forgot to apply your loyalty account to your last purchase?</Header>
                <Info fontFamily="PatuaOne" color="#8F2626" letterSpacing="2px">
                    We can help with that!
                </Info>
                <Info fontFamily="PatuaOne"
                    smallLetter
                    color="#000"
                    letterSpacing="1px">
                    We can help add a visit to your loyalty account. Submit your visit information here or tap the button below.<br /><br />
                   If you questions regarding your 4Rewards loyalty account, contact us and one of our team members will be happy to assist you.<br /><br />
                </Info>
                <Link to="/loyalty/missed-visit/">
                    <Button colorBeige >Add a visit</Button>
                </Link>
            </Container>
            <Suggestion header="Hungry ?" label="Order online now" />

        </div >
    )
}

export default Loyalty;
