import React, { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { GridSpinner } from "react-spinners-kit";
import { MainContext } from '../Contexts/Contexts'

import {
    StripeFormContainer,
    StripeFORMCardElement,
    StripeFORM,
    StripeFORMLabel,
    StripeFORMImage,
    StripeFORMWrapper,
    StripeFORMTitleWrapper,
    StripeFORMTitle,
    StripeFORMContentWrapper,
    StripeFORMTextWrapper,
    StripeFORMButtonWrapper,
    StripeFORMButton,
    StripeFormSpinnerWrapper
} from './StripeForm.elements';

import Checkout from '../Pages/Cart/Checkout';
import ContactForm from '../Pages/Cart/ContactForm';
import YourOrder from '../Pages/Cart/YourOrder';

import credit_card_payment from '../img/another/credit-card-payment.png';

import PaymentSuccess from '../components/PaymentSucces/PaymentSuccess'

export const StripeForm = () => {

    const [sendingForm, setSendingForm] = useState(false);
    const [formSent, setFormSent] = useState(false)
    const [error, setError] = useState(null);

    const stripe = useStripe();
    const elements = useElements();

    const context = useContext(MainContext);


    const [contactForm, setContactForm] = useState({
        customerContactForm: { values: null, validated: false }
    });


    const contactFormRef = React.useRef();

    async function handleSubmitDataForm(event) {
        await contactFormRef.current.Submit();
    }



    const handleChangeDataForm = (data) => {
        setContactForm({ ...contactForm, customerContactForm: data });
    }



    async function dataFormHandleSubmit() {
        await contactFormRef.current.Submit();
    }


    const handleSubmit = async (event) => {
        event.preventDefault();


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error && contactForm.customerContactForm.validated) {
            setSendingForm(true);
            console.log("Stripe 23 | token generated!", paymentMethod);

            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:8080/stripe/charge",
                    {
                        amount: context.totalPrice * 100,
                        id: id,
                    }
                );

                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                    localStorage.removeItem('addedToBasket');
                    setSendingForm(false);
                    setFormSent(true);
                    context.addedToBasket.length = 0;
                    console.log("CheckoutForm.js 25 | payment successful!");
                }
            } catch (error) {
                setSendingForm(false);
                setError(error);
                console.log("CheckoutForm.js 28 | ", error);
            }
        }
    };



    const cardStyle = {
        style: {

            base: {
                color: "#18325B",
                fontFamily: 'PatuaOne',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#18325B",
                    fontFamily: "Courgette",
                },
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };


    return (

        <StripeFormContainer>

            {!sendingForm && !formSent ? (
                <>
                    <Checkout />
                    <ContactForm onChange={handleChangeDataForm} refId={contactFormRef} />
                    <YourOrder />
                    <StripeFORM onSubmit={handleSubmit} >

                        <StripeFORMWrapper>

                            <StripeFORMTitleWrapper>

                                <StripeFORMTitle>
                                    Credit Card
                                </StripeFORMTitle>

                                <StripeFORMImage src={credit_card_payment} />

                            </StripeFORMTitleWrapper>

                            <StripeFORMContentWrapper>

                                <StripeFORMTextWrapper>
                                    <StripeFORMLabel>Card Number</StripeFORMLabel>
                                    <StripeFORMLabel>Expiration  / Card Security Code </StripeFORMLabel>
                                </StripeFORMTextWrapper>

                                <StripeFORMCardElement options={cardStyle} />

                            </StripeFORMContentWrapper>

                            <StripeFORMButtonWrapper>
                                <StripeFORMButton colorBeige
                                    onClick={dataFormHandleSubmit}>
                                    Place order
                            </StripeFORMButton>
                            </StripeFORMButtonWrapper>

                        </StripeFORMWrapper>
                    </StripeFORM>

                </>
            ) : (
                <>
                    {formSent ? (
                        <PaymentSuccess />
                    ) : (
                        <StripeFormSpinnerWrapper>
                            <GridSpinner size={90} color="#686769" loading={true} />
                        </StripeFormSpinnerWrapper>
                    )}
                </>
            )}

        </StripeFormContainer>

    );
};

export default StripeForm;