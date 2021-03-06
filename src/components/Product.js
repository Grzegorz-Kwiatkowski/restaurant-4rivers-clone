import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import './Product.css'
import { Container, Image, Header, Info, Button } from '../Styled Components/styled-components';
import SubProduct from './SubProduct';

import Location from './Location'

import { MainContext } from '../Contexts/Contexts'

const Product = (props) => {


    const index = props.match.params.id;

    return (
        <MainContext.Consumer>
            {(context) => {
                const { allProducts, changeString, onChange, addToBasket, handlePrice } = context;

                const singleProduct = allProducts.filter(item => changeString(item.header) === index);
            
                const foodAndSauces = allProducts.filter(product => product.category === "food&sauces");
                const retail = allProducts.filter(product => product.category === "retail");

                let restOfRelatedFoodProducts = foodAndSauces.filter(product => changeString(product.header) !== index);
                let relatedFoodProducts = [];

                while (relatedFoodProducts.length < 4) {
                    let index = Math.floor(Math.random() * restOfRelatedFoodProducts.length);
                    relatedFoodProducts.push(restOfRelatedFoodProducts[index]);
                    relatedFoodProducts = Array.from(new Set(relatedFoodProducts));
                }


                let relatedRetailProducts = retail.filter(item => changeString(item.header) !== index);



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
                                {Array.isArray(singleProduct[0].price) ? (
                                    <div>
                                        <select
                                            disabled={Array.isArray(singleProduct[0].price) ? false : true}
                                            value={singleProduct[0].price}
                                            onChange={(e) => handlePrice(singleProduct[0].id, e)}

                                        >
                                            <option value="" hidden >{Array.isArray(singleProduct[0].price) ? "Choose an option" : singleProduct[0].price}</option>
                                            <option value={singleProduct[0].price[0]}>{singleProduct[0].price[0]}</option>
                                            <option value={singleProduct[0].price[1]}>{singleProduct[0].price[1]}</option>
                                        </select>
                                        <input type="number" min="1" onChange={(e) => onChange(singleProduct[0].id, e)} value={singleProduct[0].amount} />

                                    </div>
                                ) : ("")
                                }
                                <Button colorBeige onClick={() => addToBasket(singleProduct[0])}>Add to cart</Button>
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

        </MainContext.Consumer >
    )
}


export default Product 
