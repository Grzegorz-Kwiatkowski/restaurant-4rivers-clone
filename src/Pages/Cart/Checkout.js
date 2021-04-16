import React, { useContext, useState } from 'react'

import StripeForm from './StripeForm'
import { MainContext } from '../../Contexts/Contexts'
import { Container, Input } from '../../Styled Components/styled-components'

import {
    CheckoutContainer,
    CheckoutHeaderWrapper,
    CheckoutHeader,
    CheckoutCouponWrapper,
    CheckoutWindowIcon,
    CheckoutCouponTextWrapper,
    CheckoutLink,
    CouponOpenedContainer,
    CouponOpenedWrapper,
    CouponOpenedLabel,
    CouponOpenedInput,
    ApplyCouponButton
} from './Checkout.elements'

import CheckoutForm from './CheckoutForm'



function Checkout({ stripe, history }) {

    const context = useContext(MainContext);
    const [couponOpen, setCouponOpen] = useState(false);

    if (context.addedToBasket.length === 0) {
        history.push('/');
        return null;
    }

    const handleCouponOpen = () => {
        setTimeout(() => setCouponOpen(!couponOpen), 500)
    }

    return (
        <CheckoutContainer>

            {!context.payment_success && (
                <>
                    <CheckoutHeaderWrapper>

                        <CheckoutHeader>
                            Checkout
                        </CheckoutHeader>

                    </CheckoutHeaderWrapper>

                    <CheckoutCouponWrapper>

                        <CheckoutWindowIcon />
                        <CheckoutCouponTextWrapper>
                            Have a coupon?
                            {" "}
                            <CheckoutLink onClick={handleCouponOpen}>
                                Click here to enter your code
                            </CheckoutLink>
                        </CheckoutCouponTextWrapper>

                    </CheckoutCouponWrapper>

                    {couponOpen && (

                        <CouponOpenedContainer>

                            <CouponOpenedWrapper>

                                <CouponOpenedLabel>
                                    If you have a coupon code, please apply it below
                                </CouponOpenedLabel>

                                <CouponOpenedInput
                                    type="text"
                                    placeholder="Coupon code"
                                    onChange={(e) => context.handleCouponCode(e)} />

                            </CouponOpenedWrapper>

                            <ApplyCouponButton
                                colorBeige
                                onClick={context.deleteCouponCode}>
                                Apply coupon
                            </ApplyCouponButton>

                        </CouponOpenedContainer>
                    )}
                    <CheckoutForm />
                </>
            )}

            <StripeForm stripe={stripe} history={history} />

        </CheckoutContainer>
    )
}

export default Checkout
