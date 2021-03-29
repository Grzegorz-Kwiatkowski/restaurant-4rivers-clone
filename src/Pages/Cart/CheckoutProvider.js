import React from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import Checkout from './Checkout'

function CheckoutProvider({ history }) {
    return (
        <StripeProvider apiKey="pk_test_51Hr3ALHek55xmiJpX1brRBrIwSYNBWZY4KxU3TnX96fp9VlHlrt2jNcKpniqKlJEvMbi84jFRz3nRFHurLnRd7gl00Vm54vbJ5">
            <Elements>
                <Checkout history={history} />
            </Elements>
        </StripeProvider>
    )
}

export default CheckoutProvider
