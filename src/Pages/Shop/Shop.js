import React, { useContext } from 'react'
import { Parallax } from "react-parallax";

import Product from '../../components/Product/Product'
import { MainContext } from '../../Contexts/Contexts'

import {
    ShopContainer,
    ShopParallaxWrapper,
    ShopParallaxHeader,
    ShopParallaxInfo,
    ShopWrapper,
    ShopHeader,
    ShopProducts
} from './Shop.elements'

import shop_banner from '../../img/shop/shop-banner.jpg'





function Shop() {

    const context = useContext(MainContext);

    const { shopProducts, changeString } = context;
    const foodAndSauces = shopProducts.filter(product => product.category === "food&sauces");
    const retail = shopProducts.filter(product => product.category === "retail");

    return (

        <ShopContainer>

            <Parallax bgImage={shop_banner} strength={250}>

                <ShopParallaxWrapper>

                    <ShopParallaxHeader>
                        From our family to yours
                    </ShopParallaxHeader>

                    <ShopParallaxInfo>
                        Enjoy 4 Rivers Sauces and Foods at Home, at Work and all year Round
                    </ShopParallaxInfo>

                </ShopParallaxWrapper>

            </Parallax>


            <ShopWrapper>

                <ShopHeader>
                    Food & Sauces
                </ShopHeader>

            </ShopWrapper>


            <ShopProducts>
                {foodAndSauces.map(item => <Product
                    id={item.id}
                    header={item.header}
                    price={item.priceInfo}
                    image={Array.isArray(item.image) ? item.image[0] : item.image}
                    btnLabel="view details"
                    link={`/shop/` + changeString(item.header) + '/'} />)}
            </ShopProducts>


            <ShopWrapper>

                <ShopHeader>
                    Retail
                </ShopHeader>

            </ShopWrapper>


            <ShopProducts>
                {retail.map(item => <Product
                    id={item.id}
                    header={item.header}
                    price={item.priceInfo}
                    image={Array.isArray(item.image) ? item.image[0] : item.image}
                    btnLabel="view details"
                    link={`/shop/` + changeString(item.header) + '/'} />)}
            </ShopProducts>

        </ShopContainer>
    )
}

export default Shop
