import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import { MainContext } from '../../Contexts/Contexts'

import {
    SelectedProductContainer,
    SelectedProductImage,
    SelectedProductContentWrapper,
    SelectedProductHeader,
    SelectedProductInfo,
    SelectedProductContent,
    SelectedProductButton,
    RelatedProducts,
    RelatedProductsHeaderWrapper,
    RelatedProductsHeader,
    SelectedProductWrapper,
    RelatedProductsSection
} from './SelectedProduct.elements'

import RelatedProduct from '../Product/RelatedProduct'



const SelectedProduct = (props) => {

    const index = props.match.params.id;
    const context = useContext(MainContext);
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(true)
        setTimeout(() => {
            setAnimate(false);
        }, 2000);
    }

    const { allProducts, changeString, addToBasket, addedToBasket } = context;

    const singleProduct = allProducts.filter(item => changeString(item.header) === index);


    for (let product of addedToBasket) {
        if (product.id === singleProduct[0].id)
            singleProduct[0].isAdded = true;
    }


    const foodAndSauces = allProducts.filter(product => product.category === "food&sauces");
    const retail = allProducts.filter(product => product.category === "retail");

    let restOfRelatedFoodProducts = foodAndSauces.filter(product => changeString(product.header) !== index);

    let relatedFoodProducts = [];

    while (relatedFoodProducts.length < 4) {
        let index = Math.floor(Math.random() * restOfRelatedFoodProducts.length);
        relatedFoodProducts.push(restOfRelatedFoodProducts[index]);
        if (relatedFoodProducts.length > 0) {
            relatedFoodProducts = Array.from(new Set(relatedFoodProducts));
        }
    }


    let relatedRetailProducts = retail.filter(item => changeString(item.header) !== index);

    const isArray = Array.isArray(singleProduct[0].image);


    return (
        <SelectedProductContainer>

            <SelectedProductWrapper clicked={animate}>

                <SelectedProductImage>

                    <Carousel
                        controls={isArray ? true : false}
                        fade={true}
                        slide={false}>

                        {isArray ? singleProduct[0].image.map((img, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                            : (
                                <Carousel.Item interval={3000} >
                                    <img
                                        className="d-block w-100"
                                        src={singleProduct[0].image}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )}
                    </Carousel>

                </SelectedProductImage>


                <SelectedProductContentWrapper>


                    <SelectedProductHeader>
                        {singleProduct[0].header}
                    </SelectedProductHeader>

                    <SelectedProductInfo>
                        {` $${singleProduct[0].price}`}
                    </SelectedProductInfo>

                    <SelectedProductContent>
                        {singleProduct[0].content}
                    </SelectedProductContent>

                    <SelectedProductButton colorBeige
                        onClick={() => addToBasket(singleProduct[0])} disabled={singleProduct[0].isAdded}>
                        Add to cart
                    </SelectedProductButton>

                </SelectedProductContentWrapper>

            </SelectedProductWrapper>


            <RelatedProductsHeaderWrapper>
                <RelatedProductsHeader>
                    Related products
                </RelatedProductsHeader>
            </RelatedProductsHeaderWrapper>


            <RelatedProducts onClick={handleClick}>
                {singleProduct[0].category === "retail" ? (
                    <>
                        {relatedRetailProducts.map(product =>
                            <RelatedProduct
                                key={product.id}
                                header={product.header}
                                price={product.price}
                                image={Array.isArray(product.image) ? product.image[0] : product.image}
                                link={`/shop/` + changeString(product.header) + '/'}
                            />)}
                    </>

                ) : (
                    <>
                        {relatedFoodProducts.map(product =>
                            <RelatedProduct
                                key={product.id}
                                header={product.header}
                                price={product.price}
                                image={Array.isArray(product.image) ? product.image[0] : product.image}
                                link={`/shop/` + changeString(product.header) + '/'}
                            />)}
                    </>

                )}
            </RelatedProducts>

        </SelectedProductContainer>
    )
}


export default SelectedProduct