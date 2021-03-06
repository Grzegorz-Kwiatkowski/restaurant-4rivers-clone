import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { MainContext } from '../../Contexts/Contexts'

import { DeleteBtn, Image, Td } from '../../Styled Components/styled-components'



function FullCart() {

    const context = useContext(MainContext);

    const fullCartStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    }

    const addedProducts = context.addedToBasket.map(product => {
        return (
            <tr >
                <Td style={fullCartStyle}>
                    <DeleteBtn onClick={() => context.deleteFromBasket(product.id)}>X</DeleteBtn>
                    <Image src={Array.isArray(product.image) ? product.image[0] : product.image} width="50px" height="50px" />
                    <Link to={`/shop/` + context.changeString(product.header) + '/'} className="linkUp">{product.header}</Link>
                </Td>
                <Td>
                    ${product.price}
                </Td>
                <Td>
                    <input type="number" value={product.amount} onChange={(e) => context.onChange(product.id, e)} />
                </Td>
                <Td>
                    {(product.subtotal).toFixed(2)}
                </Td>
            </tr>
        )
    })

    return (
        <>
            { addedProducts}
        </>



    )






}

export default FullCart
