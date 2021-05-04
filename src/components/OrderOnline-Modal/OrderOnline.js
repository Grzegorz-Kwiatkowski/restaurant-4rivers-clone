import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Header, Container, Button, Info } from '../../Styled Components/styled-components'
import { MainContext } from '../../Contexts/Contexts'

import {
    OrderOnlineContainer,
    OrderOnlineDarkBg,
    OrderOnlineContent,
    OrderOnlineOptions,
    OrderOnlineItem,
    OrderOnlineBtnClose,
    OrderOnlineButton,
    OrderOnlineHeader,
    OrderOnlineInfo,
    OrderOnlineText
} from './OrderOnline.elements';

import pickup_icon from '../../img/order-online/pickup-icon.png'
import catering_icon from '../../img/order-online/catering-icon.png'
import meat from '../../img/loyalty/meat_img.jpg'


function OrderOnline() {

    const context = useContext(MainContext);

    return (

        <OrderOnlineContainer
            isOpen={context.isOpenOrderOnline}
            image={meat}>

            <OrderOnlineDarkBg></OrderOnlineDarkBg>

            <OrderOnlineContent>

                <Header fontFamily="PatuaOne" color="#90887C" letterSpacing="7px" className="orderOnline__header">Order online</Header>
                <OrderOnlineOptions>

                    <OrderOnlineItem>

                        <img src={pickup_icon} />
                        <OrderOnlineHeader>Pick-up & Delivery</OrderOnlineHeader>
                        <OrderOnlineInfo>
                            (Order & Eat Today! Full Smokehouse menu available)
                        </OrderOnlineInfo>
                        <a href="https://order.4rsmokehouse.com/#!/" target="_blank">
                            <OrderOnlineButton colorBeige>Place order</OrderOnlineButton>
                        </a>

                    </OrderOnlineItem>

                    <OrderOnlineItem>
                        <OrderOnlineText>OR</OrderOnlineText>
                    </OrderOnlineItem>

                    <OrderOnlineItem>

                        <img src={catering_icon} />
                        <OrderOnlineHeader>Catering Delivery</OrderOnlineHeader>
                        <OrderOnlineInfo>
                            (24-Hour Notice - Catering Menus and Offerings, $125 minimum)
                        </OrderOnlineInfo>
                        <Link to="/catering/order-online">
                            <OrderOnlineButton colorBeige>Place order</OrderOnlineButton>
                        </Link>

                    </OrderOnlineItem>

                </OrderOnlineOptions>
                <OrderOnlineBtnClose onClick={context.toggleOrderOnline}>X</OrderOnlineBtnClose>

            </OrderOnlineContent>
        </OrderOnlineContainer>
    )
}

export default OrderOnline;
