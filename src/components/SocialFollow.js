import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import './SocialFollow.css'


function SocialFollow() {
    return (
        <div className="socialIcons">
            <a href="https://www.youtube.com/channel/UCIQMD4HoK5oPOXGnP8jg07w"
                className="social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/4RSmokehouse"
                className="social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/4RSmokehouse"
                className=" social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.facebook.com/4RSmokehouse"
                className="social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    )
}

export default SocialFollow