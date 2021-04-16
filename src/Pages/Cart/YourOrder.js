import React, { useContext } from 'react'

import { MainContext } from '../../Contexts/Contexts'

import {
    YourOrderContainer,
    YourOrderHeader,
    YourOrderTable,
    YourOrderInfo
} from './YourOrder.elements'


function YourOrder() {

    const context = useContext(MainContext);

    const productHeaders = context.addedToBasket.map(product => (<p>{`${product.header}`}</p>));
    const productSubtotals = context.addedToBasket.map(product => (<p>{` $ ${product.subtotal}`}</p>));

    return (
        <YourOrderContainer>

            <YourOrderHeader>
                Your order
            </YourOrderHeader>

            <YourOrderTable>
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
                    <td>

                    </td>
                </tr>
                <tr>
                    <th>Tax</th>
                    <td>${context.tax}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>${context.total}</td>
                </tr>
            </YourOrderTable>

        </YourOrderContainer>
    )
}

export default YourOrder
