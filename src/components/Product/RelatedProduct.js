import React from 'react'

import { Image } from '../../Styled Components/styled-components'

import {
    RelatedProductContainer,
    RelatedProductHeader,
    RelatedProductWrapper,
    RelatedProductInfo,
    RelatedProductLink
} from './RelatedProduct.elements'


function RelatedProduct({ header, price, image, link }) {
    return (
        <RelatedProductContainer>

            <RelatedProductLink to={link}>
                <RelatedProductWrapper>

                    <Image src={image} width="100%" />

                    <RelatedProductHeader>
                        {header}
                    </RelatedProductHeader>

                    <RelatedProductInfo>
                        ${price}
                    </RelatedProductInfo>

                </RelatedProductWrapper>
            </RelatedProductLink>

        </RelatedProductContainer>
    )
}

export default RelatedProduct