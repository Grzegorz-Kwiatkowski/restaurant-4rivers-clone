import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import './Product.css'
import { Container, Image, Header, Info } from '../Styled Components/styled-components';
import SubProduct from './SubProduct';

import Location from './Location'

import { ShopContext } from '../Contexts/Contexts'

const Product = (props) => {


    const index = props.match.params.id;

    return (
        <ShopContext.Consumer>
            {(context) => {
                const { shopProducts, changeString } = context;

                const singleProduct = shopProducts.filter(item => changeString(item.header) === index);
                const foodAndSauces = shopProducts.filter(product => product.category === "food&sauces");
                const retail = shopProducts.filter(product => product.category === "retail");

                let relatedFoodProducts = [];
                while (relatedFoodProducts.length < 4) {
                    let index = Math.floor(Math.random() * foodAndSauces.length);
                    if (relatedFoodProducts.indexOf(relatedFoodProducts[index]) === -1)
                        relatedFoodProducts.push(foodAndSauces[index])
                }

                let relatedRetailProducts = retail.filter(item => changeString(item.header) !== index);

                console.log("Related products")
                console.log(relatedRetailProducts)
                const isArray = Array.isArray(singleProduct[0].image);

                return (
                    <Container padding="100px 0px">
                        <div className="product">
                            <div className="product__image">
                                <Carousel controls={isArray ? true : false} fade={true} slide={false}>

                                    {isArray ? singleProduct[0].image.map(img => (
                                        <Carousel.Item >
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
                                            // <Image src={singleProduct[0].image} />
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
                            </div>

                            <div className="product__content">
                                <Header color="#8F2626" marginBottom="0px" marginTop="0px">{singleProduct[0].header}</Header>
                                <Info color="#000" marginTop="5px" fontSize="1.7em">{` $${singleProduct[0].price}`}</Info>
                                <Info color="#000" fontSize=".8em" textAlign="left" marginTop="0px" fontFamily="PatuaOne">
                                    {singleProduct[0].content}
                                </Info>
                            </div>

                )
                    </div>

                        <Container padding="35px 0px" className="underlineTop--gray" width="80%">
                            <Header color="#000" fontFamily="PatuaOne">Related products</Header>
                        </Container>


                        <div className="product__relatedProducts">
                            {singleProduct[0].category === "retail" ? (
                                <>
                                    {relatedRetailProducts.map(item => <SubProduct header={item.header} price={item.price} image={Array.isArray(item.image) ? item.image[0] : item.image} link={`/shop/` + changeString(item.header) + '/'} />)}

                                </>

                            ) : (
                                    <>
                                        {relatedFoodProducts.map(item => <SubProduct header={item.header} price={item.price} image={Array.isArray(item.image) ? item.image[0] : item.image} link={`/shop/` + changeString(item.header) + '/'} />)}

                                    </>

                                )}
                        </div>
                    </Container>
                )
            }
            }

        </ShopContext.Consumer >
    )
}


export default Product 
