import React, { useContext } from 'react'
import { MainContext } from '../../Contexts/Contexts'
import {
    CartContainer,
    CartWrapper,
    CartHeader,
    CartTableWrapper,
    CartTable,
    CartInput,
    CartButton,
    CartTableHead,
    CartTableBodyContent,
    CartTableBodyCoupon
} from './Cart.elements';

import EmptyCart from './EmptyCart'
import CartContent from './CartContent'
import CartTotals from './CartTotals'





function Cart() {

    const context = useContext(MainContext);

    return (
        <CartContainer>

            <CartWrapper>

                <CartHeader>
                    Cart
                </CartHeader>

                {
                    context.addedToBasket.length > 0 ?
                        <CartTableWrapper>

                            <CartTable>
                                <CartTableHead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </CartTableHead>

                                <CartTableBodyContent>
                                    <CartContent />
                                </CartTableBodyContent>

                                <CartTableBodyCoupon>
                                    <tr>
                                        <td >
                                            <CartInput
                                                type="text"
                                                placeholder="Coupon code"
                                                isActive={context.couponActivated}
                                                onChange={(e) => context.handleCouponCode(e)}
                                            />

                                            <CartButton colorBeige onClick={context.deleteCouponCode}>
                                                Apply coupon
                                        </CartButton>
                                        </td>
                                    </tr>
                                </CartTableBodyCoupon>

                            </CartTable>

                            <CartTotals />

                        </CartTableWrapper>
                        :
                        <EmptyCart />
                }
            </CartWrapper>
        </CartContainer>
    )
}





export default Cart
