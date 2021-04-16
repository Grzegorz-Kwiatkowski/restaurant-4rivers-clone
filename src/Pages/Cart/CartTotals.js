import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { MainContext } from '../../Contexts/Contexts'

import {
    CartTotalsContainer,
    CartTotalsHeader,
    CartTotalsWrapper,
    CartTotalsTable,
    CartTotalsButton
} from './CartTotals.elements';



function CartTotals() {

    const context = useContext(MainContext);

    return (
        <CartTotalsContainer>

            <CartTotalsWrapper>


                <CartTotalsHeader>
                    Cart totals
                </CartTotalsHeader>

                <CartTotalsTable>
                    <tr>
                        <th>Subtotal</th>
                        <td>$ {context.subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td>
                            {/* <DeliveryOptions /> */}
                        </td>
                    </tr>
                    <tr>
                        <th>Tax</th>
                        <td>$ {context.tax}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>$ {context.total.toFixed(2)}</td>
                    </tr>
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
