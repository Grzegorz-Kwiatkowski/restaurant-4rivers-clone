import React from "react";
import { Link } from 'react-router-dom'

import {
    GiftBackgroundRed,
    GiftContainer,
    GiftHeader,
    GiftContent,
    GiftInfo,
    GiftLink,
    GiftButton
} from "./Gift.elements";


function Gift({ id, header, image, info, link, btnLabel }) {
    return (
        <GiftContainer background={image}>

            <GiftBackgroundRed></GiftBackgroundRed>

            <GiftHeader>{header}</GiftHeader>

            <GiftContent>
                <GiftInfo>
                    {info}
                </GiftInfo>
                <GiftLink to={link}>
                    <GiftButton>{btnLabel}</GiftButton>
                </GiftLink>
            </GiftContent>

        </GiftContainer>

    );
}

export default Gift;
