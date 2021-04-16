import React, { useState, useContext } from 'react'
import axios from 'axios'

import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    injectStripe
} from 'react-stripe-elements'

import {
    StripeFormContainer,
    StripeFormFieldWrapper,
    StripeFormFieldsWrapper,
    StripeFormLabel,
    StripeFormButton,
    StripeFormWrapper,
    StripeFormTitleWrapper,
    StripeFormTitle,
    StripeFormImage,
    StripeFormButtonWrapper,
    StripeCardNumberElement,
    StripeCardExpiryElement,
    StripeCardCVCElement
} from './StripeForm.elements'


import { MainContext } from '../../Contexts/Contexts'
import PaymentSuccesfull from './PaymentSuccesfull'

import creditCardsImg from '../../img/another/creditcards.png'


const StripeForm = ({ stripe, history }) => {

    const context = useContext(MainContext);
    const [receiptUrl, setReceiptUrl] = useState('')



    const handleSubmit = async event => {
        event.preventDefault()

        const { token } = await stripe.createToken({
            name: 'customer name'
        })

        const order = await axios.post('http://localhost:7000/api/stripe/charge', {
            amount: context.total.toString().replace('.', ''),
            source: token.id,
            receipt_email: 'customer@example.com'
        })

        setReceiptUrl(order.data.charge.receipt_url);

    }

    if (receiptUrl) {
        console.log("ReceiptUrl : ")
        console.log(receiptUrl);
        return (
            <PaymentSuccesfull url={receiptUrl} />
        )
    }

    return (
        <StripeFormContainer>

            <StripeFormTitleWrapper>
                <StripeFormTitle>
                    Credit Card
            </StripeFormTitle>
                <StripeFormImage src={creditCardsImg} />
            </StripeFormTitleWrapper>

            <StripeFormWrapper>

                <form onSubmit={handleSubmit}>
                    <StripeFormFieldWrapper>

                        <StripeFormLabel>Card Number </StripeFormLabel>
                        <StripeCardNumberElement placeholder="**** **** **** **** " />

                    </StripeFormFieldWrapper>


                    <StripeFormFieldsWrapper>

                        <StripeFormFieldWrapper>

                            <StripeFormLabel>Expiration (MM/YY)</StripeFormLabel>
                            <StripeCardExpiryElement />

                        </StripeFormFieldWrapper>

                        <StripeFormFieldWrapper>

                            <StripeFormLabel>Card Security Code </StripeFormLabel>
                            <StripeCardCVCElement />

                        </StripeFormFieldWrapper>

                    </StripeFormFieldsWrapper>
                </form>

            </StripeFormWrapper>

            <StripeFormButtonWrapper>
                <StripeFormButton colorBeige
                    type="submit"
                    onClick={() => context.setPaymentSuccess(true)}>
                    Place order
                </StripeFormButton>
            </StripeFormButtonWrapper>


        </StripeFormContainer>
    )

}

export default injectStripe(StripeForm)
