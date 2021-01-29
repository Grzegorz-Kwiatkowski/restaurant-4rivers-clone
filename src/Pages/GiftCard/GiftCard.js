import React,{useState} from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

import "./GiftCard.css";
import {
  Header,
  Info,
  Button,
  Container,
} from "../../Styled Components/styled-components";

import ribs from "../../img/gift-cards/ribs.jpeg";
import ribs_2 from '../../img/gift-cards/ribs-2.jpeg'
import gift_card from '../../img/gift-cards/gift-card.jpeg'
import fried_meat from '../../img/gift-cards/fried-meat.jpeg'

import Suggestion from "../../components/Suggestion";
import Location from '../../components/Location'

function GiftCard() {

  const [gift,setGift] = useState([
    {
      id:1,
      header:"Purchase e-gift card",
      info:"Order a gift card online and email it quickly and easily to your friend or loved one.",
      image:ribs_2,
      btnLabel:"Purchase e-gift card",
      
    },
    {
      id:2,
      header:"Purchase gift card",
      info:"Mail a 4Rivers Gift Card to a family member or friend. ",
      image:gift_card,
      btnLabel:"Purchase gift card"
    },
    {
      id:3,
      header:"Check your balance",
      info:"Use your card number to check the balance on your 4Rivers Gift Card. If your card is showing as  'Invalid Card Number' please, contact us via email.",
      image:fried_meat,
      btnLabel:"Check your balance"
    }
  ]);
  return (
    <div className="gift-card">
      <Parallax bgImage={ribs} strength={250}>
        <Container padding="150px">
          <Header
            className="underline--white"
            fontSize="7em"
            letterSpacing="12px">
            4 Rivers Gift Cards
          </Header>

          <Container padding="0px 230px 0px 230px">
            <Info letterSpacing="2px">
              Expertly Smoked BBQ has never been easier to gift to a friend or
              loved one
            </Info>
            <div>
              <Button colorBeige marginRight="5px">
                Purchase e-gift card
              </Button>
              <Button>Purchase gift card</Button>
            </div>
            <Button colorBeige>Check your balance</Button>
            <Info
              letterSpacing="1px"
              fontSize=".9em"
              padding="0px 10px 0px 10px">
              If your card is showing as “Invalid Card Number,” please email us
              to check your balance.
            </Info>
          </Container>
        </Container>
      </Parallax>

      <Container padding="30px 0px 30px 0px">
        <Header color="#000" smallLetter letterSpacing="5px">
          From our Smoker to your Inbox or Mailbox
        </Header>
        <Info
          color="#8F2626"
          letterSpacing="0px"
          fontSize="1em"
          marginTop="0px">
          4R Gift Cards are the perfect gift for any occasion
        </Info>
        <article className="gift-card__info">
          <p>
            Shop now for the quickest way to gift 4 Rivers award-winning BBQ to
            your friends or loved ones.
          </p>
          <p>
            Our{" "}
            <Link to="" className="link">
              4 Rivers E-Gift Cards
            </Link>{" "}
            are fast and easy to order, easily sent to anyone digitally with a
            few simple clicks directly to their inbox. Additionally, physical{" "}
            <Link to="" className="link">
              4R Gift Cards
            </Link>{" "}
            can be purchased online and shipped anywhere in the United States.
          </p>
          <p>
            Shop now for the quickest way to gift 4 Rivers award-winning BBQ to
            your friends or loved ones.
          </p>
          <p>
            Of course, you can always purchase 4 Rivers Gift Cards at your local
            Smokehouse. See all the ways to buy below.
          </p>
        </article>
      </Container>

      <div className="gift-card__giftOptions">
        {gift.map(item=><Location key={item.id} image={item.image} name={item.header} info={item.info} btnLabel={item.btnLabel}/>)}
      </div>
      <Suggestion header="Hungry Now ?" label="Order online" link="" />
    </div>
  );
}

export default GiftCard;
