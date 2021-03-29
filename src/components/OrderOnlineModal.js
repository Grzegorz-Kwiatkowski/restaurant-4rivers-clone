import React from 'react'
import './OrderOnlineModal.css'
import { Header, Container, Button, Info } from '../Styled Components/styled-components'
import { MainContext } from '../Contexts/Contexts'
import pickup_icon from '../img/order-online/pickup-icon.png'
import catering_icon from '../img/order-online/catering-icon.png'

import { Link } from 'react-router-dom'

function OrderOnlineModal() {
    return (
        <MainContext.Consumer>
            {context => {
                const { isOpenOrderOnline, toggleOrderOnline } = context;

                return (
                    <div className={isOpenOrderOnline ? "orderOnline showModal" : "orderOnline"}>
                        <div className="orderOnline__darkBackground"></div>
                        <div className="orderOnline__content">
                            <Header fontFamily="PatuaOne" color="#90887C" letterSpacing="7px" className="orderOnline__header">Order online</Header>
                            <div className="orderOnline__options">

                                <div className="orderOnline__item">
                                    <img src={pickup_icon} />
                                    <Header color="#fff" letterSpacing="5px">Pick-up & Delivery</Header>
                                    <Info color="#fff" fontSize=".8em" marginTop="2px" marginBottom="30px">(Order & Eat Today! Full Smokehouse menu available)</Info>
                                    <a href="https://order.4rsmokehouse.com/#!/" target="_blank">
                                        <Button fontBig colorBeige width="100%" height="20%">Place order</Button>
                                    </a>
                                </div>

                                <div className="orderOnline__item">
                                    <p className="orderOnline__text">OR</p>
                                </div>

                                <div className="orderOnline__item">
                                    <img src={catering_icon} />
                                    <Header color="#fff" letterSpacing="5px">Catering Delivery</Header>
                                    <Info color="#fff" fontSize=".8em" marginTop="2px" marginBottom="30px">(24-Hour Notice - Catering Menus and Offerings, $125 minimum)</Info>
                                    <Link to="/catering/order-online">
                                        <Button fontBig colorBeige width="100%" height="20%">Place order</Button>
                                    </Link>
                                </div>

                            </div>
                            <button className="orderOnline__btnClose" onClick={toggleOrderOnline}>X</button>

                        </div>

                    </div >
                )
            }}

        </MainContext.Consumer >

    )
}

export default OrderOnlineModal
