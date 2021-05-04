import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import {
    Button
} from "../../Styled Components/styled-components";
import {
    AdvertisementContainer,
    AdvertisementHeader,
    AdvertisementWrapper
} from './Advertisement.elements'

import advertisement_bg from '../../img/catering/suggestions-bg.jpeg'


function Advertisement({ header, label, link }) {
    return (
        <AdvertisementContainer>
            <Parallax
                bgImage={advertisement_bg}
                strength={200}
                bgImageStyle={{ width: "100%", height: "180%" }}
            >

                <AdvertisementWrapper>

                    <AdvertisementHeader>
                        {header}
                    </AdvertisementHeader>

                    <Link to={link}>
                        <Button>{label}</Button>
                    </Link>

                </AdvertisementWrapper>

            </Parallax>
        </AdvertisementContainer>
    );
}

export default Advertisement;
