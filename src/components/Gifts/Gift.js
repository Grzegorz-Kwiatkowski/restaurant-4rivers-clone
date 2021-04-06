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
            <GiftLink href={link}>
                <GiftBackgroundRed></GiftBackgroundRed>

                <GiftHeader>{header}</GiftHeader>

                <GiftContent>
                    <GiftInfo>
                        {info}
                    </GiftInfo>
                    <Link to={link}>
                        <GiftButton>{btnLabel}</GiftButton>
                    </Link>
                </GiftContent>
            </GiftLink>
        </GiftContainer>

    );
}

export default Gift;
