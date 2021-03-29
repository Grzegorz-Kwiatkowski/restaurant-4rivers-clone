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
            <LocationLink href={link}>
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
                    <Link to={link}>
                        <LocationButton>{btnLabel}</LocationButton>
                    </Link>
                </LocationContent>
            </LocationLink>
        </LocationContainer>

    );
}

export default Location;
