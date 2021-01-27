import React from "react";
import "./Location.css";
import {
  Header,
  Info,
  Button,
  Container,
} from "../Styled Components/styled-components";

function Location({ id, name, address, city, image }) {
  return (
    <div className="location" style={{ backgroundImage: "url(" + image + ")" }}>
      <div className="location__backgroundRed"></div>
      <Header className="location__header">{name}</Header>

      <Container padding="0px 20px 0px 20px" className="location__data">
        <div className="underline--white">
          <Info fontSize="1em" marginBottom="0px">
            {address}
          </Info>
          <Info fontSize="1em" marginTop="5px">
            {city}
          </Info>
        </div>

        <Button marginTop="25px">Order online</Button>
      </Container>
    </div>
  );
}

export default Location;
