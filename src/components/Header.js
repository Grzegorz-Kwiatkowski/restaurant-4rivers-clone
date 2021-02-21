import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Header.css'

import logo_4R from '../img/4R-logo.png';
import full_name_4R from '../img/4R-full-name.png'

import { MainContext } from '../Contexts/Contexts'


function Header() {
    const history = useHistory();
    return (
        <MainContext.Consumer>
            {context => {
                const { toggleOrderOnline } = context;
                return (
                    <div className="header">

                        <Link to="/">
                            <div className="header__logo">
                                <img src={logo_4R} alt="" />
                                <img className="header__fullName" src={full_name_4R} alt="" />
                            </div>
                        </Link>


                        <nav className="header__nav">
                            <ul className="header__list">
                                <li><Link to="/menu">menu</Link></li>
                                <li><Link to="/catering">catering</Link></li>
                                <li><Link to="/gift-cards">gift card</Link></li>
                                <li><Link to="/shop">shop</Link></li>
                                <li><a href="https://www.goldbelly.com/4-rivers-smokehouse" target="_blank">mail order</a></li>
                                <li><Link to="/loyalty">loyalty</Link></li>
                                <a className="header__orderOnline" onClick={toggleOrderOnline}><li>order online</li></a>
                            </ul>
                        </nav>


                        <div className="header__basketWrapper" onClick={(e) => history.push('/basket')} >
                            <div className="header__cart">
                                <p>Cart</p>
                            </div>
                            <div className="header__basket">
                                <span className="header__basketCount">0</span>
                                <ShoppingCartOutlinedIcon style={{ color: "#a37c3d", fontSize: 30 }} />
                            </div>
                        </div>
                    </div>
                )
            }}
        </MainContext.Consumer>
    )




}

export default Header
