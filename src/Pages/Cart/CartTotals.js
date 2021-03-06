import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { MainContext } from '../../Contexts/Contexts'
import { Header, Button, Th, Td, Table } from '../../Styled Components/styled-components'

import DeliveryOptions from './DeliveryOptions'


function CartTotals() {

    const context = useContext(MainContext);

    return (
        <div className="cartTotals">
            <Header color="#8F2626" fontSize="2.8em" smallLetter>Cart totals</Header>
            <Table >
                <tr>
                    <Th>Subtotal</Th>
                    <Td>${context.subtotal.toFixed(2)}</Td>
                </tr>
                <tr>
                    <Th>Shipping</Th>
                    <Td>
                        <DeliveryOptions />
                    </Td>
                </tr>
                <tr>
                    <Th>Tax</Th>
                    <Td>${context.tax}</Td>
                </tr>
                <tr>
                    <Th>Total</Th>
                    <Td>${context.total.toFixed(2)}</Td>
                </tr>
            </Table>
            <Link to="/checkout">
                <Button colorBeige marginTop="20px">Proceed to checkout</Button>
            </Link>

        </div>
    )
}

export default CartTotals
