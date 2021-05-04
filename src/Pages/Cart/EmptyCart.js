import React from 'react'

import {
    EmptyCartContainer,
    EmptyCartWrapper,
    WindowIcon,
    EmptyCartInfo
} from './EmptyCart.elements';

function EmptyCart() {
    return (
        <EmptyCartContainer>
            <EmptyCartWrapper>
                <WindowIcon />
                <EmptyCartInfo >Your cart is currently empty.</EmptyCartInfo>
            </EmptyCartWrapper>
        </EmptyCartContainer>
    )
}

export default EmptyCart
