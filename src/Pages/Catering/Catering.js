import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { faYahoo } from "@fortawesome/free-brands-svg-icons";

import "./Catering.css";
import {
  Header,
  Container,
  Info,
  Button,
  Image,
} from "../../Styled Components/styled-components";
import Location from "../../components/Location";
import Suggestion from "../../components/Suggestion";

import parallax_catering_bg from "../../img/catering/parallax-catering-bg.jpeg";
import team_members from "../../img/catering/team-members.jpeg";
import delivery_look from "../../img/catering/delivery-look.jpeg";
import food_truck from "../../img/catering/food-truck.jpeg";
import carrollwood from "../../img/catering/carrollwood.jpeg";
import coral_springs from "../../img/catering/coral-springs.jpeg";
import daytona from "../../img/catering/daytona.jpeg";
import gainesville from "../../img/catering/gainesville.jpeg";
import jacksonville from "../../img/catering/jacksonville.jpeg";
import kissimee from "../../img/catering/kissimmee.jpeg";
import longwood from "../../img/catering/longwood.jpeg";
import orange_park from "../../img/catering/orange-park.jpeg";
import south_tampa from "../../img/catering/south-tampa.jpeg";
import tallahassee from "../../img/catering/tallahassee.jpeg";
import east_orlando from "../../img/catering/UCF-east-orlando.jpeg";
import winter_garden from "../../img/catering/winter-garden.jpeg";
import winter_park from "../../img/catering/winter-park.jpeg";

function Catering() {
  const [location, setLocation] = useState([
    {
      id: 1,
      name: "Carrollwood",
      address: "14330 N Dale Mabry Hwy",
      city: "Tampa FL 33618",
      image: carrollwood,
    },
    {
      id: 2,
      name: "Coral Springs",
      address: "2660 North University Drive",
      city: "Coral Springs FL 33065",
      image: coral_springs,
    },
    {
      id: 3,
      name: "Daytona",
      address: "1866 Victory Cir",
      city: "Daytona Beach FL 32114",
      image: daytona,
    },
    {
      id: 4,
      name: "Gainesville",
      address: "3262 SW 35th Blvd",
      city: "Gainesville FL 32608",
      image: gainesville,
    },
    {
      id: 5,
      name: "Jacksonville",
      address: "9220 Baymeadows Road",
      city: "Jacksonville FL 32256",
      image: jacksonville,
    },
    {
      id: 6,
      name: "Kissimmee",
      address: "874 W Osceola Pkwy",
      city: "Kissimmee FL 34741",
      image: kissimee,
    },
    {
      id: 7,
      name: "Longwood",
      address: "1869 West State Road 434",
      city: "Longwood FL 32750",
      image: longwood,
    },
    {
      id: 8,
      name: "Orange Park",
      address: "220 Park Ave",
      city: "Orange Park FL 32073",
      image: orange_park,
    },
    {
      id: 9,
      name: "South Tampa",
      address: "623 South MacDill Avenue",
      city: "Tampa FL 33609",
      image: south_tampa,
    },
    {
      id: 10,
      name: "Tallahassee",
      address: "1817 Thomasville Road Ste.100",
      city: "Tallahassee Florida 32303",
      image: tallahassee,
    },
    {
      id: 11,
      name: "UCF-East Orlando",
      address: "11764 University Blvd",
      city: "Orlando FL 32817",
      image: east_orlando,
    },
    {
      id: 12,
      name: "Winter Garden",
      address: "1047 South Dillard Street",
      city: "Winter Garden FL 34787",
      image: winter_garden,
    },
    {
      id: 13,
      name: "Winter Park",
      address: "1600 West Fairbanks Avenue",
      city: "Winter Park FL 32789",
      image: winter_park,
    },
  ]);

  return (
    <div className="catering">
      <Parallax bgImage={parallax_catering_bg} strength={250}>
        <Container
          padding="80px"
          className="home__sauces"
          style={{ height: "100vh" }}>
          <Header
            className="underline--white"
            fontSize="7em"
            letterSpacing="12px">
            BBQ Catering at Its Best
          </Header>
          <Info letterSpacing="1px">
            Offering expert services for <br />
            pickup, delivery, and full-service catering
          </Info>

          <Link to="/catering/order-online">
            <Button marginTop="10px">Order catering online</Button>
          </Link>
          <Link to="/catering/contact-us">
            <Button colorBeige>Talk to a catering expert</Button>
          </Link>
        </Container>
      </Parallax>

      <Container className="underline--gray" padding="40px 220px 40px 220px">
        <Header color="#000" fontFamily="PatuaOne" smallLetter>
          Smokin' good catering for your next special event
        </Header>
        <Info
          fontFamily="PatuaOne"
          smallLetter
          color="#000"
          letterSpacing="1px">
          Need quick pick-up, large delivery, or full-service catering? 4 Rivers
          Smokehouse offers the best <br /> catering services for any occasion
          from{" "}
          <Link className="link" to="/catering/wedding-catering">
            weddings
          </Link>
          , parties, office luncheons, & more.
        </Info>
        <Link to="/catering/order-online#delivery">
          <Button colorBeige>Order catering delivery</Button>
        </Link>
        <Link to="/catering/#fullservice">
          <Button colorBeige>Full service catering</Button>
        </Link>
        <Link to="/catering/#pricing">
          <Button colorBeige>Menus & Pricing</Button>
        </Link>
        <Link to="/catering/#locations">
          <Button colorBeige marginBottom="35px">
            Catering locations
          </Button>
        </Link>
      </Container>

      <Container>
        <Image src={team_members} width="100%" height="100%" />

        <Container className="underline--gray" padding="40px 220px 40px 220px">
          <Header
            color="#000"
            fontFamily="PatuaOne"
            smallLetter
            fontSize="2.2em">
            Full-Service Catering Experience
          </Header>

          <Info
            fontFamily="PatuaOne"
            smallLetter
            color="#000"
            letterSpacing="1px">
            From{" "}
            <Link to="/catering/wedding-catering" className="link">
              weddings
            </Link>{" "}
            , receptions, and graduation parties to corporate events, school
            functions, and sporting events,{" "}
            <Link tp="/catering/full-service" className="link">
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
            <Link to="/catering/contact-us" className="link">
              Contact a 4 Rivers catering expert online
            </Link>{" "}
            or give us a call today at 844-474-8377 so we can learn more about
            your special event and provide our premier catering experience that
            your guests are sure to love.
          </Info>

          <Link to="/catering/full-service">
            <Button marginBottom="30px" colorBeige>
              Learn more
            </Button>
          </Link>
        </Container>
      </Container>

      <Container>
        <Image src={delivery_look} width="100%" height="100%" />

        <Container className="underline--gray" padding="40px 220px 40px 220px">
          <Header
            color="#000"
            fontFamily="PatuaOne"
            smallLetter
            fontSize="2.2em">
            Menus & Pricing
          </Header>

          <Info
            fontFamily="PatuaOne"
            smallLetter
            color="#000"
            letterSpacing="1px">
            Order the South’s Best BBQ for your next gathering or special event!
            Whether you’re ordering for home or the office, 4 Rivers BBQ
            catering is sure to please all your guests..
            <br />
            <br />4 Rivers catering offers a variety of{" "}
            <Link to="/catering/menu" className="link">
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
          </Info>

          <Link to="/catering/full-service">
            <Button marginBottom="30px" colorBeige>
              See a catering menu
            </Button>
          </Link>
        </Container>
      </Container>

      <Container>
        <Image src={food_truck} width="100%" height="100%" />

        <Container className="underline--gray" padding="40px 220px 40px 220px">
          <Header
            color="#000"
            fontFamily="PatuaOne"
            smallLetter
            fontSize="2.2em">
            4 Rivers Catering Locations
          </Header>

          <Info
            fontFamily="PatuaOne"
            smallLetter
            color="#000"
            letterSpacing="1px">
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
          </Info>
        </Container>
      </Container>

      <div className="catering__locationsWrapper">
        {location.map((item) => (
          <Location
            id={item.id}
            name={item.name}
            address={item.address}
            city={item.city}
            image={item.image}
          />
        ))}
      </div>

      <Suggestion
        header="Ready for Dinner ?"
        label="Find a location"
        link="/locations"
      />
    </div>
  );
}

export default Catering;
