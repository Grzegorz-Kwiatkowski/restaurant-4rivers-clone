import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { MainContext } from '../../Contexts/Contexts'

import {
    CartTotalsContainer,
    CartTotalsHeader,
    CartTotalsWrapper,
    CartTotalsTable,
    CartTotalsButton,
    CartTotalsText,
    CartTotalsImage,
    CartTotalsDiscount,
    CartTotalsTotalWrapper
} from './CartTotals.elements';

import discount from '../../img/another/discount.png';


function CartTotals() {

    const context = useContext(MainContext);

    return (
        <CartTotalsContainer>

            <CartTotalsWrapper>


                <CartTotalsHeader>
                    Cart totals
                </CartTotalsHeader>

                <CartTotalsTable>
                    <tbody>


                        <tr>
                            <th>Subtotal</th>
                            <td>$ {context.subtotal}</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>USPS Priority :  ${context.delivery}</td>
                        </tr>
                        <tr>
                            <th>Tax</th>
                            <td>$ {context.tax}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>
                                <CartTotalsTotalWrapper>
                                    $ {context.totalPrice}
                                    <CartTotalsDiscount isActive={context.couponActivated}>
                                        <CartTotalsImage src={discount} />
                                        <CartTotalsText>-5%</CartTotalsText>
                                    </CartTotalsDiscount>
                                </CartTotalsTotalWrapper>
                            </td>
                        </tr>
                    </tbody>
                </CartTotalsTable>

                <Link to="/checkout">
                    <CartTotalsButton colorBeige>
                        Proceed to checkout
                    </CartTotalsButton>
                </Link>

            </CartTotalsWrapper>

        </CartTotalsContainer>
    )
}

export default CartTotals
