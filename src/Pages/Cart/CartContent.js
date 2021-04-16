import React, { useContext } from 'react'

import { MainContext } from '../../Contexts/Contexts'

import {
    CartContentTrashBin,
    CartContentImage,
    CartContentTrashBinWrapper,
    CartContentLink,
    CartContentTrashBinMobileWrapper,
    CartContentTrashBinTableRow
} from './CartContent.elements';


function CartContent() {

    const context = useContext(MainContext);

    const fullCartStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    }

    const addedProducts = context.addedToBasket.map(product => {
        return (
            <>
                <CartContentTrashBinTableRow>
                    <th>
                        <CartContentTrashBinMobileWrapper>
                            <CartContentTrashBin onClick={() => context.deleteFromBasket(product.id)} />
                        </CartContentTrashBinMobileWrapper>
                    </th>
                </CartContentTrashBinTableRow>

                <tr>
                    <th>Product</th>
                    <td style={fullCartStyle}>
                        <CartContentTrashBinWrapper>
                            <CartContentTrashBin onClick={() => context.deleteFromBasket(product.id)} />
                        </CartContentTrashBinWrapper>

                        <CartContentImage src={Array.isArray(product.image) ? product.image[0] : product.image} />
                        <CartContentLink to={`/shop/` + context.changeString(product.header) + '/'}>
                            {product.header}
                        </CartContentLink>
                    </td>

                    <th>Price</th>
                    <td>
                        ${product.price}
                    </td>

                    <th>Quantity</th>
                    <td>
                        <input size="2" type="number" value={product.amount} onChange={(e) => context.onChange(product.id, e)} />
                    </td>

                    <th>Subtotal</th>
                    <td>
                        {(product.subtotal).toFixed(2)}
                    </td>
                </tr>
            </>

        )
    })


    return (
        <>
            { addedProducts}
        </>



    )






}

export default CartContent
