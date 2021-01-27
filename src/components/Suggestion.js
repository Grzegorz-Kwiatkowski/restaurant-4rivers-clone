import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Button,
} from "../Styled Components/styled-components";

import suggestions_bg from "../img/catering/suggestions-bg.jpeg";

function Suggestion({ header, label, link }) {
  return (
    <div className="suggestion">
      <Parallax bgImage={suggestions_bg} strength={250}>
        <Container padding="100px">
          <Header fontSize="5em" letterSpacing="9px">
            {header}
          </Header>
          <Link to={link}>
            <Button>{label}</Button>
          </Link>
        </Container>
      </Parallax>
    </div>
  );
}

export default Suggestion;
