import React from 'react';
import { Link } from 'react-router-dom'

import SocialFollow from './SocialFollow'
import logo_4R_bg from '../img/4R-logo-bg.jpg'

import './Footer.css'


function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">

                <div className="footer__section" >
                    <div className="footer__loyalty">
                        <Link to="/loyalty" style={{ textDecoration: "none" }}>
                            <div className="footer__loyaltyBg" src={logo_4R_bg}>
                                <p>Pitmaster loyalty Program</p>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className="footer__section">

                    <h2 className="footer__header">
                        <Link to="locations/">locations</Link>
                    </h2>
                    <ul className="footer__list">
                        <li><Link to="/locations/tampa">Carrollwood</Link></li>
                        <li><Link to="/coral-springs">Coral Springs</Link></li>
                        <li><Link to="/daytona">Daytona</Link></li>
                        <li> <Link to="/ucf-east-orlando">East Orlando</Link></li>
                        <li><Link to="/uf-gainesville">Gainesville</Link></li>
                    </ul>
                </div>


                <div className="footer__section">
                    <h2 className="footer__header">links</h2>
                    <ul className="footer__list">
                        <li><Link to="/press-releases">press releases</Link></li>
                        <li><Link to="/press">press coverage</Link></li>
                        <li><Link to="/careers">careers</Link></li>
                        <li> <Link to="/donation">donation requests</Link></li>
                        <li><Link to="/privacy-policy">privacy Policy</Link></li>
                        <li><Link to="/terms-of-use">terms of Use</Link></li>
                    </ul>
                </div>


                <div className="footer__section">
                    <h2 className="footer__header">4 rivers family</h2>
                    <ul className="footer__list">
                        <li><Link to="/4r-signature-products">4r signature products</Link></li>
                        <li><a href="https://www.asouthernaffair.com/">the coop</a></li>
                        <li><a href="https://www.4rspecialtycakes.com/">the sweet shop specialty cakes</a></li>
                        <li> <a href="https://www.disneysprings.com/dining/4-rivers-cantina-barbacoa-food-truck/">4r cantina barbacoa food truck</a></li>
                        <li><a href="https://www.4rootsfarm.org/">4rootsfarm</a></li>
                    </ul>
                </div>


                <div className="footer__section">
                    <h2 className="footer__header">contact</h2>
                    <div className="footer__contact">
                        <p>1-844-4RIVERS </p>
                        <p>(1-844-474-8377)</p>
                    </div>
                    <Link to="/contact">
                        <button className="footer__contactBtn">Contact us</button>
                    </Link>
                </div>

            </div>

            <div className="footer__bottom">
                <div className="footer__copyright">
                    <p>© 2020 4 Rivers Smokehouse</p>
                </div>
                <div className="footer__socialMedia">
                    <SocialFollow />
                </div>
            </div>
        </div>
    )
}

export default Footer;
