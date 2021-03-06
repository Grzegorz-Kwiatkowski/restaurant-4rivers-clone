import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import "../../ss.scss"
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    injectStripe
} from 'react-stripe-elements'
import axios from 'axios'

import { MainContext } from '../../Contexts/Contexts'
import PaymentSuccesfull from './PaymentSuccesfull'




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
        return (
            <PaymentSuccesfull url={receiptUrl} />
        )
    }

    return (
        <div>
            <p>Total : {context.total}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Card details
          <CardNumberElement />
                </label>
                <br />
                <label>
                    Expiration date
          <CardExpiryElement />
                </label>
                <br />
                <label>
                    CVC
          <CardCVCElement />
                </label>
                <br />
                <button type="submit" onClick={() => context.setPaymentSuccess(true)}>
                    Pay
        </button>

            </form>



        </div >
    )

}

export default injectStripe(StripeForm)
