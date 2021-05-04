import React from "react";
import { Link } from 'react-router-dom'

import {
    AdvertBackgroundRed,
    AdvertContainer,
    AdvertHeader,
    AdvertContent,
    AdvertInfo,
    AdvertLink,
    AdvertButton
} from "./Advert.elements";


function Advert({ id, header, image, info, link, btnLabel }) {
    return (
        <AdvertContainer background={image}>
            <AdvertLink href={link}>
                <AdvertBackgroundRed></AdvertBackgroundRed>

                <AdvertHeader>{header}</AdvertHeader>

                <AdvertContent>
                    <AdvertInfo>
                        {info}
                    </AdvertInfo>
                    <AdvertLink href={link} target="_blank"  >
                        <AdvertButton>{btnLabel}</AdvertButton>
                    </AdvertLink>
                </AdvertContent>
            </AdvertLink>
        </AdvertContainer>

    );
}

export default Advert;
