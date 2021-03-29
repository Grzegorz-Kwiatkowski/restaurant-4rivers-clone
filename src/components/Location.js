import React from "react";

import {
  Header,
  Info,
  Button,
  Container,
} from "../Styled Components/styled-components";
import { Link } from 'react-router-dom'


function Location({ id, name, address, city, image, info, btnLabel, price, link }) {
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
          <Info fontSize="1em" marginTop="0px" marginBottom="0px">
            {price}
          </Info>
          <Info smallLetter fontSize=".8em">{info}</Info>
        </div>
        <Link to={link}>
          <Button marginTop="25px">{btnLabel}</Button>
        </Link>
      </Container>
    </div>
  );
}

export default Location;
