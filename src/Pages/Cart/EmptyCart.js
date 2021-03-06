import React from 'react'

import { Info, WindowIcon, Wrapper, EmptyCartContainer } from '../../Styled Components/styled-components'


function EmptyCart() {
    return (
        <EmptyCartContainer >
            <Wrapper>
                <WindowIcon />
                <Info color="#A1A1A1" fontSize=".7em" marginLeft="10px" marginTop="0" marginBottom="0">Your cart is currently empty.</Info>
            </Wrapper>
        </EmptyCartContainer>
    )
}

export default EmptyCart
