import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {
    SocialFollowContainer,
    SocialFollowLink
} from './SocialFollow.elements'



function SocialFollow() {
    return (
        <SocialFollowContainer>

            <SocialFollowLink href="https://www.youtube.com/channel/UCIQMD4HoK5oPOXGnP8jg07w">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </SocialFollowLink>

            <SocialFollowLink href="https://www.facebook.com/4RSmokehouse">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </SocialFollowLink>

            <SocialFollowLink href="https://twitter.com/4RSmokehouse">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </SocialFollowLink>

            <SocialFollowLink href="https://www.facebook.com/4RSmokehouse">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </SocialFollowLink>

        </SocialFollowContainer>
    )
}

export default SocialFollow