import React, { useContext } from 'react'

import { MainContext } from '../../Contexts/Contexts'
import { Table, Td, Th, Wrapper, Header } from '../../Styled Components/styled-components';


function YourOrder() {

    const theme = useContext(MainContext);

    const products = theme.addedToBasket.map(product => (<p>{`${product.header} - $ ${product.subtotal}`}</p>))

    return (
        <Wrapper>
            <Header color="#000" fontFamily="PatuaOne" smallLetter fontSize="1.6em">Your order</Header>
            <Table marginTop="20px" border>
                <tr>
                    <Th width="45vw">Product</Th>
                    <Td>
                        {products}
                    </Td>
                </tr>
                <tr>
                    <Th>Subtotal</Th>
                    <Td>${theme.subtotal}</Td>
                </tr>
                <tr>
                    <Th>Shipping</Th>
                    <Td>
                        <div onChange={theme.handleDelivery}>
                            <input type="radio" value="USPS First-Class" name="gender" /> USPS First-Class: $ {theme.delivery}<br />
                            <input type="radio" value="USPS Priority" name="gender" /> USPS Priority: $ {theme.delivery}<br />
                            <input type="radio" value="FedEx 2 Day" name="gender" /> FedEx 2 Day: $ {theme.delivery}<br />
                        </div>
                    </Td>
                </tr>
                <tr>
                    <Th>Tax</Th>
                    <Td>${theme.tax}</Td>
                </tr>
                <tr>
                    <Th>Total</Th>
                    <Td>${theme.total}</Td>
                </tr>
            </Table>

        </Wrapper>
    )
}

export default YourOrder
