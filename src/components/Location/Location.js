import React from "react";
import { Link } from 'react-router-dom'

import {
    LocationBackgroundRed,
    LocationContainer,
    LocationHeader,
    LocationContent,
    LocationUnderline,
    LocationInfo,
    LocationLink,
    LocationButton
} from "./Location.elements";


function Location({ id, header, image, address, city, link, btnLabel }) {
    return (
        <LocationContainer background={image}>

            <LocationBackgroundRed></LocationBackgroundRed>

            <LocationHeader>{header}</LocationHeader>

            <LocationContent>
                <LocationUnderline>
                    <LocationInfo>
                        {address}
                    </LocationInfo>
                    <LocationInfo>
                        {city}
                    </LocationInfo>
                </LocationUnderline>
                <LocationLink to={link}>
                    <LocationButton>{btnLabel}</LocationButton>
                </LocationLink>
            </LocationContent>

        </LocationContainer>

    );
}

export default Location;
