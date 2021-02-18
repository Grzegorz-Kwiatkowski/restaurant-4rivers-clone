import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Header, Info } from '../Styled Components/styled-components'
import './SubProduct.css'

function SubProduct({ header, price, image, link }) {
    return (
        <div className="subproduct">
            <Link to={link} className="subproduct__container">
                <Image src={image} width="100%" />
                <Header color="#8F2626" marginBottom="0px" marginTop="5px" fontSize="1.2em" fontFamily="PatuaOne">{header}</Header>
                <Info color="#000" marginTop="5px" fontFamily="PatuaOne" fontSize="1em">${price}</Info>
            </Link>

        </div>
    )
}

export default SubProduct
