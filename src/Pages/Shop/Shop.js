import React, { Component } from 'react'
import { Parallax } from "react-parallax";

import Location from '../../components/Location'

import { Container, Header, Info } from '../../Styled Components/styled-components'
import './Shop.css'

import bbq_sauce_1 from '../../img/shop/BBQ-SAUCE-VARIETY-PACK-1.jpg'
import all_purpose_rub_1 from '../../img/shop/ALL-PURPOSE-RUB-1.jpg'
import bourbon_blended_1 from '../../img/shop/BOURBON-BLENDED-1.jpg'
import brisket_rub_1 from '../../img/shop/BRISKET-RUB-1.jpg'
import coffee_rub_1 from '../../img/shop/COFFEE-RUB-1.jpg'
import hot_barbecue_sauce_1 from '../../img/shop/HOT-BARBECUE-SAUCE-1.jpg'
import maple_bourbon_syrup_1 from '../../img/shop/Maple-Bourbon-Syrup-1.jpg'
import mustard_barbecue_sauce_1 from '../../img/shop/MUSTARD-BARBECUE-SAUCE-1.jpg'
import pitmaster_kit_1 from '../../img/shop/Pitmaster-Kit-1.jpg'
import signature_barbecue_sauce_1 from '../../img/shop/SIGNATURE-BARBECUE-SAUCE-1.jpg'
import shop_banner from '../../img/shop/shop-banner.jpg'
import { MainContext } from '../../Contexts/Contexts';




function Shop() {

    return (
        <div className="shop">

            <Parallax bgImage={shop_banner} strength={250}>
                <Container height="100vh" padding="0px 300px">
                    <Header fontSize="4em" letterSpacing="10px" fontFamily="PatuaOne" className="underline--white">From our family to yours</Header>
                    <Info>Enjoy 4 Rivers Sauces and Foods at Home, at Work and all year Round</Info>
                </Container>
            </Parallax>

            <Container padding="50px 0px">
                <Header color="#000" fontFamily="PatuaOne">Food & Sauces</Header>
            </Container>


            <MainContext.Consumer>
                {(context) => {
                    const { shopProducts, changeString } = context;

                    const foodAndSauces = shopProducts.filter(product => product.category === "food&sauces");
                    return (
                        <div className="shop__products">
                            {foodAndSauces.map(item => <Location id={item.id} name={item.header} price={item.priceInfo} image={Array.isArray(item.image) ? item.image[0] : item.image} btnLabel="view details" link={`/shop/` + changeString(item.header) + '/'} />)}
                        </div>
                    )
                }}
            </MainContext.Consumer>



            <Container padding="50px 0px">
                <Header color="#000" fontFamily="PatuaOne">Retail</Header>
            </Container>


            <MainContext.Consumer>
                {(context) => {
                    const { shopProducts, changeString } = context;
                    const retail = shopProducts.filter(product => product.category === "retail");

                    return (
                        <div className="shop__products">
                            {retail.map(item => <Location id={item.id} name={item.header} price={item.priceInfo} image={Array.isArray(item.image) ? item.image[0] : item.image} btnLabel="view details" link={`/shop/` + changeString(item.header) + '/'} />)}
                        </div>
                    )
                }}
            </MainContext.Consumer>




        </div>
    )


}

export default Shop
