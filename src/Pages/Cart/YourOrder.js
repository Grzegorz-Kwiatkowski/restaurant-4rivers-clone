import React, { useContext } from 'react'

import { MainContext } from '../../Contexts/Contexts'

import {
    YourOrderContainer,
    YourOrderHeader,
    YourOrderTable,
    YourOrderInfo,
    YourOrderTotalWrapper,
    YourOrderDiscount,
    YourOrderImage,
    YourOrderText
} from './YourOrder.elements'

import discount from '../../img/another/discount.png'


function YourOrder() {

    const context = useContext(MainContext);

    const productHeaders = context.addedToBasket.map(product => (<span key={product.id}>{`${product.header}`}<br /></span>));
    const productSubtotals = context.addedToBasket.map(product => (<span key={product.id}>{` $ ${(product.subtotal).toFixed(2)}`}<br /></span>));

    return (
        <YourOrderContainer>

            <YourOrderHeader>
                Your order
            </YourOrderHeader>

            <YourOrderTable>
                <tbody>
                    <tr>
                        <th>Products</th>
                        <td>
                            Subtotal
                    </td>
                    </tr>
                    <tr>
                        <th>
                            <YourOrderInfo>{productHeaders}</YourOrderInfo></th>
                        <td>
                            <YourOrderInfo>{productSubtotals}</YourOrderInfo>
                        </td>
                    </tr>
                    <tr>
                        <th>Subtotal</th>
                        <td>${context.subtotal}</td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td>USPS Priority : ${context.delivery}</td>
                    </tr>
                    <tr>
                        <th>Tax</th>
                        <td>${context.tax}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>
                            <YourOrderTotalWrapper>
                                ${context.totalPrice}
                                <YourOrderDiscount isActive={context.couponActivated}>
                                    <YourOrderImage src={discount} />
                                    <YourOrderText>-5%</YourOrderText>
                                </YourOrderDiscount>
                            </YourOrderTotalWrapper>

                        </td>
                    </tr>
                </tbody>
            </YourOrderTable>

        </YourOrderContainer>
    )
}

export default YourOrder
