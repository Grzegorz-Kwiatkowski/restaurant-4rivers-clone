import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, Wrapper, Image, Info } from '../../Styled Components/styled-components'
import payment_success from '../../img/another/payment_success.jpg'
import { MainContext } from '../../Contexts/Contexts'

function PaymentSuccesfull({ url }) {

    const context = useContext(MainContext);


    return (
        <Container>

            <Image src={payment_success} width="50vw" height="40vh" />

            <a href={url} onClick={() => { context.setPaymentSuccess(false) }}>
                <Info color="#90AE01" fontSize="1em" fontFamily="ArchivoBlack" marginBottom="15px">View Receipt</Info>
            </a>
            <Link to="/" onClick={() => { context.setPaymentSuccess(false) }}>
                <Info color="#4C9F1D" fontFamily="ArchivoBlack" fontSize="1em" marginTop="0px" letterSpacing="1px" marginBottom="15px">
                    Return to Home
                    </Info>
            </Link>

            <Link to="/shop" onClick={() => { context.setPaymentSuccess(false) }}>
                <Info color="#4C9F1D" fontFamily="ArchivoBlack" fontSize="1em" marginTop="0px" letterSpacing="1px">
                    Go to Shop
                    </Info>
            </Link>


        </Container>
    )
}

export default PaymentSuccesfull
