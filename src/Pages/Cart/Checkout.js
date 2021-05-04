import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'

import { MainContext } from '../../Contexts/Contexts'

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



function Checkout() {

    const history = useHistory();
    const context = useContext(MainContext);
    const [couponOpen, setCouponOpen] = useState(false);

    if (context.addedToBasket.length === 0) {
        history.push('/shop');
        return null;
    }

    const handleCouponOpen = () => {
        setTimeout(() => setCouponOpen(!couponOpen), 500)
    }

    return (
        <CheckoutContainer>

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
                            isActive={context.couponActivated}
                            onChange={(e) => context.handleCouponCode(e)} />

                    </CouponOpenedWrapper>

                    <ApplyCouponButton
                        colorBeige
                        onClick={context.deleteCouponCode}>
                        Apply coupon
                            </ApplyCouponButton>

                </CouponOpenedContainer>
            )}

        </CheckoutContainer>
    )
}

export default Checkout
