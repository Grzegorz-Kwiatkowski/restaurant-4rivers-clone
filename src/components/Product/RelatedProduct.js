import React from 'react'

import {
    RelatedProductContainer,
    RelatedProductHeader,
    RelatedProductWrapper,
    RelatedProductInfo,
    RelatedProductLink,
    RelatedProductImage
} from './RelatedProduct.elements'


function RelatedProduct({ header, price, image, link }) {
    return (
        <RelatedProductContainer>

            <RelatedProductLink to={link}>
                <RelatedProductWrapper>

                    <RelatedProductImage src={image} />

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