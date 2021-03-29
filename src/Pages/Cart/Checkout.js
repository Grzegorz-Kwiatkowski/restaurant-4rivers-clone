import React, { useContext, useState } from 'react'

import StripeForm from './StripeForm'
import { MainContext } from '../../Contexts/Contexts'
import { Wrapper, HeaderWrapper, Header, CouponWrapper, Container, CheckoutLink, Input, TextWrapper, WindowIcon } from '../../Styled Components/styled-components'

import CheckoutForm from './CheckoutForm'





function Checkout({ stripe, history }) {

    const theme = useContext(MainContext);
    const [couponOpen, setCouponOpen] = useState(false);

    if (theme.addedToBasket.length === 0) {
        history.push('/');
        return null;
    }
    const handleCouponOpen = () => {
        setTimeout(() => setCouponOpen(!couponOpen), 500)
    }

    return (
        <Wrapper padding="50px 75px" >
            {!theme.payment_success && (
                <>
                    <HeaderWrapper>
                        <Header color="#8F2626" >Checkout</Header>
                    </HeaderWrapper>
                    <CouponWrapper>
                        <WindowIcon />
                        <TextWrapper color="gray" fontSize=".9em">Have a coupon?
                     <CheckoutLink onClick={handleCouponOpen}>Click here to enter your code</CheckoutLink>
                        </TextWrapper>
                    </CouponWrapper>
                    {couponOpen && (
                        <Container directionRow marginBottom="25px" alignItems="flex-end">
                            <Container alignItems="flex-start">
                                <label>If you have a coupon code, please apply it below  </label>
                                <Input width="50vw" type="text" placeholder="Coupon code" onChange={(e) => theme.handleCouponCode(e)} />
                            </Container>
                            <button colorBeige onClick={theme.deleteCouponCode}>Apply coupon</button>
                        </Container>
                    )}
                    <CheckoutForm />
                </>
            )}
            <StripeForm stripe={stripe} history={history} />




        </Wrapper>
    )
}

export default Checkout
