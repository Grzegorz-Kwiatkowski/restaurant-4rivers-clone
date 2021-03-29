import React, { useContext } from 'react'

import { MainContext } from '../../Contexts/Contexts'
import { Header, Container, Button, CartWrapper, Table, Th } from '../../Styled Components/styled-components'


import EmptyCart from './EmptyCart'
import FullCart from './FullCart'
import CartTotals from './CartTotals'





function Cart() {

    const context = useContext(MainContext);

    return (
        <Container>
            <CartWrapper>
                <Header color="#8F2626">Cart</Header>
                {
                    context.addedToBasket.length > 0 ?
                        <div className="fullCart">
                            <Table rules="rows" >
                                <tr>
                                    <Th>Product</Th>
                                    <Th>Price</Th>
                                    <Th>Quantity</Th>
                                    <Th>Subtotal</Th>
                                </tr>
                                <FullCart />
                                <tr>
                                    <td >
                                        <input type="text" placeholder="Coupon code" onChange={(e) => context.handleCouponCode(e)} />
                                        <Button colorBeige onClick={context.deleteCouponCode}>Apply coupon</Button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </Table>

                            <CartTotals />
                        </div>
                        :
                        <EmptyCart />
                }
            </CartWrapper>
        </Container>
    )
}





export default Cart
