import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { StripeForm } from "./StripeForm";

const PUBLIC_KEY = "pk_test_51Hr3ALHek55xmiJpPLQJevprSIIrTj3wUIbwf5SgRVWMwZy6pBGU3ngEPojo2v24G8zSwTdeMYd0ibxjH2RXR07300jGnIchIc";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <StripeForm />
        </Elements>
    );
};

export default StripeContainer;