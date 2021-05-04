import React, { useState } from 'react'


import { useHistory } from 'react-router'

import {
    PaymentSuccessContainer,
    PaymentSuccessImage,
    PaymentSuccessText,
    StrongText
} from './PaymentSuccess.elements'

import { ClassicSpinner } from "react-spinners-kit";

import payment_success from '../../img/another/payment_success.jpg'


function PaymentSuccess() {

    const history = useHistory();

    setTimeout(() => {
        history.push('/')
    }, 3000);

    return (
        <PaymentSuccessContainer>

            <PaymentSuccessImage src={payment_success} />
            <ClassicSpinner size={30} color="#8CD65E" loading={true} />;
            <PaymentSuccessText>
                Redirecting to the <StrongText>Home</StrongText> page.
            </PaymentSuccessText>

        </PaymentSuccessContainer>
    )
}

export default PaymentSuccess
