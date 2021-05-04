import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { Link, useRouteMatch } from "react-router-dom";

import {
  CateringContainer,
  CateringHeader,
  CateringHeaderBig,
  CateringInfo,
  CateringButton,
  CateringWrapper,
  CateringParallaxContainer,
  CateringLocationWrapper
} from "./Catering.elements"

import {
  Container,
  Image,
} from "../../Styled Components/styled-components";

import { locations } from '../../data';

import Location from "../../components/Location/Location";
import Advertisement from '../../components/Advertisement/Advertisement'

import parallax_catering_bg from "../../img/catering/parallax-catering-bg.jpeg";
import team_members from "../../img/catering/team-members.jpeg";
import delivery_look from "../../img/catering/delivery-look.jpeg";
import food_truck from "../../img/catering/food-truck.jpeg";



function Catering() {

  const { url } = useRouteMatch();
  const [location, setLocation] = useState(locations);


  return (
    <CateringContainer>

      <Parallax
        bgImage={parallax_catering_bg}
        strength={250}
      >
        <CateringParallaxContainer>

          <CateringHeaderBig>
            BBQ Catering at Its Best
          </CateringHeaderBig>

          <CateringInfo fontUp white size="1.2rem" ls="3px">
            Offering expert services for <br />
            pickup, delivery, and full-service catering
          </CateringInfo>

          <Link to="/catering/order-online">
            <CateringButton>Order catering online</CateringButton>
          </Link>
          <Link to="/catering/contact-us">
            <CateringButton colorBeige>Talk to a catering expert</CateringButton>
          </Link>
        </CateringParallaxContainer>
      </Parallax>


      <CateringWrapper>

        <CateringHeader>
          Smokin' good catering for your next special event
        </CateringHeader>

        <CateringInfo >
          Need quick pick-up, large delivery, or full-service catering? 4 Rivers
          Smokehouse offers the best catering services for any occasion
          from{" "}
          <Link to={`${url}/wedding-catering`} className="link" >weddings</Link>
          , parties, office luncheons, & more.
        </CateringInfo>

        <Link to="/catering/order-online#delivery">
          <CateringButton colorBeige>Order catering delivery</CateringButton>
        </Link>
        <Link to="/catering/#fullservice">
          <CateringButton colorBeige>Full service catering</CateringButton>
        </Link>
        <Link to="/catering/#pricing">
          <CateringButton colorBeige>Menus & Pricing</CateringButton>
        </Link>
        <Link to="/catering/#locations">
          <CateringButton colorBeige >Catering locations</CateringButton>
        </Link>

      </CateringWrapper>


      <Container>
        <Image src={team_members} width="100%" height="100%" />
        <CateringWrapper>

          <CateringHeader>
            Full-Service Catering Experience
          </CateringHeader>

          <CateringInfo>
            From{" "}
            <Link to={`${url}/wedding-catering`} className="link">weddings</Link>{" "}
            , receptions, and graduation parties to corporate events, school
            functions, and sporting events,{" "}
            <Link to={`${url}/full-service`} className="link">
              4 Rivers full-service catering
            </Link>{" "}
            can do it all, big and small.
            <br />
            <br />
            4 Rivers fill-service catering offers the best catering experience
            anywhere with delicious food, expert event management, and friendly
            on-site staff. We’ll work with you every step of the way, and
            through every detail, to make sure your event goes off without a
            hitch.
            <br />
            <br />
            <Link to={`${url}/contact-us`} className="link">
              Contact a 4 Rivers catering expert online
            </Link>{" "}
            or give us a call today at 844-474-8377 so we can learn more about
            your special event and provide our premier catering experience that
            your guests are sure to love.
          </CateringInfo>

          <Link to="/catering/full-service">
            <CateringButton colorBeige>
              Learn more
            </CateringButton>
          </Link>

        </CateringWrapper>
      </Container>


      <Container>
        <Image src={delivery_look} width="100%" height="100%" />
        <CateringWrapper>

          <CateringHeader>
            Menus & Pricing
          </CateringHeader>

          <CateringInfo>
            Order the South’s Best BBQ for your next gathering or special event!
            Whether you’re ordering for home or the office, 4 Rivers BBQ
            catering is sure to please all your guests..
            <br />
            <br />
            4 Rivers catering offers a variety of{" "}
            <Link to={`${url}/menu`} className="link">
              catering menus
            </Link>{" "}
            and packages for pickup and delivery, making ordering for your event
            fast and easy. You can pick up your order from your local 4 Rivers
            Smokehouse packaged up and ready to go, or have us bring it to you.
            <br />
            <br />
            Our Smokehouse 2x2 and Smokehouse 3x3 packages include all of our
            award-winning slow-smoked barbecue meats as well as fresh homestyle
            sides and decadent{" "}
            <Link to="/4r-specialty-cakes" className="link">
              hand-made desserts
            </Link>
            . Each package is priced per person, so you can make sure there’s
            enough for everyone.
            <br />
            <br />
            If you’re looking for a custom package to meet your needs, we also
            offer an a la carte catering delivery menu as well.
            <br />
            <br />
            Have questions? Our expert catering team would be happy to help with
            any questions. You can contact us online or over the phone by
            calling 844-474-8377.
          </CateringInfo>

          <Link to="/catering/full-service">
            <CateringButton colorBeige>
              See a catering menu
            </CateringButton>
          </Link>

        </CateringWrapper>
      </Container>


      <Container>
        <Image src={food_truck} width="100%" height="100%" />
        <CateringWrapper>

          <CateringHeader>
            4 Rivers Catering Locations
          </CateringHeader>

          <CateringInfo>
            4 Rivers Catering offers it’s premier catering services to dozens of
            communities across Florida, from Tallahassee to Coral Springs and
            Daytona to Tampa, and everything in between. Whether you’re
            interested in a quick pick-up or full-service catering, 4 Rivers BBQ
            provides the best catering services anywhere in the state of
            Florida.
            <br />
            <br />
            You can even host your next event at one of our Smokehouses! Contact
            us online today or call us now so we can chat about reserving a
            private dining space for your next event.
          </CateringInfo>

        </CateringWrapper>
      </Container>


      <CateringLocationWrapper>
        {location.map((item) => (
          <Location
            key={item.id}
            id={item.id}
            header={item.name}
            address={item.address}
            city={item.city}
            image={item.image}
            btnLabel="Order online"
            link="http://google.pl"
          />
        ))}
      </CateringLocationWrapper>

      <Advertisement
        header="Ready for Dinner?"
        label="Find a location"
        link="/locations"
      />

    </CateringContainer>
  );
}

export default Catering;
