import React from "react";
import { Link } from 'react-router-dom'

import {
    ProductBackgroundRed,
    ProductContainer,
    ProductHeader,
    ProductContent,
    ProductInfo,
    ProductLink,
    ProductButton
} from "./Product.elements";


function Product({ id, header, image, price, link, btnLabel }) {
    return (
        <ProductContainer background={image}>

            <ProductBackgroundRed></ProductBackgroundRed>

            <ProductHeader>{header}</ProductHeader>

            <ProductContent>
                <ProductInfo>
                    {price}
                </ProductInfo>
                <ProductLink to={link}>
                    <ProductButton>{btnLabel}</ProductButton>
                </ProductLink>
            </ProductContent>

        </ProductContainer>

    );
}

export default Product;
