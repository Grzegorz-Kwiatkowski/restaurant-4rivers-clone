import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { gifts } from '../../data';

import {
  GiftCardContainer,
  GiftCardParallaxWrapper,
  GiftCardParallaxHeader,
  GiftCardParallaxContent,
  GiftCardButton,
  GiftCardParallaxButtonWrapper,
  GiftCardParallaxSecondInfo,
  GiftCardParallaxFirstInfo,
  GiftCardWrapper,
  GiftCardHeader,
  GiftCardInfo,
  GiftCardArticle,
  GiftCardText,
  GiftCardOffers
} from './GiftCard.elements'

import ribs from "../../img/gift-cards/ribs.jpeg";
import Advertisement from '../../components/Advertisement/Advertisement';
import Gift from '../../components/Gifts/Gift'


function GiftCard() {

  const [gift, setGift] = useState(gifts);

  return (
    <GiftCardContainer>

      <Parallax bgImage={ribs} strength={250}>

        <GiftCardParallaxWrapper>

          <GiftCardParallaxHeader>
            4 Rivers Gift Cards
          </GiftCardParallaxHeader>


          <GiftCardParallaxContent>

            <GiftCardParallaxFirstInfo>
              Expertly Smoked BBQ has never been easier to gift to a friend or
              loved one
            </GiftCardParallaxFirstInfo>

            <GiftCardParallaxButtonWrapper >

              <GiftCardButton colorBeige >
                Purchase e-gift card
              </GiftCardButton>

              <GiftCardButton>
                Purchase gift card
              </GiftCardButton>

            </GiftCardParallaxButtonWrapper>

            <GiftCardButton colorBeige>
              Check your balance
            </GiftCardButton>

            <GiftCardParallaxSecondInfo>
              If your card is showing as “Invalid Card Number,” please email us
              to check your balance.
            </GiftCardParallaxSecondInfo>

          </GiftCardParallaxContent>

        </GiftCardParallaxWrapper>

      </Parallax>


      <GiftCardWrapper>

        <GiftCardHeader>
          From our Smoker to your Inbox or Mailbox
        </GiftCardHeader>

        <GiftCardInfo>
          4R Gift Cards are the perfect gift for any occasion
        </GiftCardInfo>

        <GiftCardArticle>

          <GiftCardText>
            Shop now for the quickest way to gift 4 Rivers award-winning BBQ to
            your friends or loved ones.
          </GiftCardText>

          <GiftCardText>
            Our{" "}
            <Link to="" className="link"> 4 Rivers E-Gift Cards  </Link>{" "}
                are fast and easy to order, easily sent to anyone digitally with a
                few simple clicks directly to their inbox. Additionally, physical{" "}
            <Link to="" className="link">4R Gift Cards</Link>{" "}
            can be purchased online and shipped anywhere in the United States.
          </GiftCardText>

          <GiftCardText>
            Shop now for the quickest way to gift 4 Rivers award-winning BBQ to
            your friends or loved ones.
          </GiftCardText>

          <GiftCardText>
            Of course, you can always purchase 4 Rivers Gift Cards at your local
            Smokehouse. See all the ways to buy below.
          </GiftCardText>

        </GiftCardArticle>

      </GiftCardWrapper>


      <GiftCardOffers>
        {gift.map(gift => <Gift key={gift.id} image={gift.image} header={gift.header} info={gift.info} btnLabel={gift.btnLabel} />)}
      </GiftCardOffers>

      <Advertisement header="Hungry Now ?" label="Order online" link="" />
    </GiftCardContainer>
  );
}

export default GiftCard;
