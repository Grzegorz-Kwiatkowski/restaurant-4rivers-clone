import React, { useState } from 'react'
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "yup-phone";

import valid from 'card-validator'

import { Button } from '../Styled Components/styled-components'

import './ContactForm.css'


function ContactForm() {

    const locations = ["Carrolwood", "Coral Springs", "Daytona", "Gainesville", "Jacksonville", "Kissimmee", "Longwood", "Orange Park", "South Tampa", "Tallahassee", "The COOP", "UCF", "Winter Park", "Winter Garden"];
    const initialValues = {
        location: '',
        dateField: '',
        checkNumber: 0,
        orderDetails: '',
        subTotal: 0,
        loyaltyCardNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }




    return (
        <Formik

            initialValues={initialValues}

            validationSchema={Yup.object({
                location: Yup.string()
                    .required("This field is required."),
                dateField: Yup.date()
                    .required("This field is required."),
                checkNumber: Yup.number()
                    .max(16)
                    .required("This field is required."),
                orderDetails: Yup.string()
                    .max(150, "Must be more than 150 characters or less")
                    .required('This field is required.'),
                subTotal: Yup.number()
                    .min(1, "Must be number bigger than 1")
                    .required("This field is required."),
                loyaltyCardNumber: Yup.string()
                    .test('test-number', // this is used internally by yup
                        'Credit Card number is invalid', //validation message
                        value => valid.number(value).isValid) // return true false based on validation
                    .required("This field is required."),
                firstName: Yup.string()
                    .min(3, "Must be more than 3 characters")
                    .max(20, "Must be less than 20 characters")
                    .required("This field is required."),
                lastName: Yup.string()
                    .min(3, "Must be more than 3 characters")
                    .max(20, "Must be less than 20 characters")
                    .required("This field is required."),
                email: Yup.string()
                    .email('Invalid email address')
                    .required("This field is required."),
                phone: Yup.string()
                    .phone("PL", true)
                    .required("This field is required."),
            })}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values)
                    setSubmitting(false);
                }, 400);

            }}
        >

            <Form className="form-container">

                <div className="location field">
                    <label htmlFor="location">Location</label><br />
                    <Field as="select" name="location" >
                        {locations.map((item) => (
                            <option className="aaa" value={item}>{item}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="location" component="div" className="errorMsg" />
                </div>
                <div className="date field">
                    <label htmlFor="dateField">Date</label>
                    <Field type="date" name="dateField" />
                    <ErrorMessage name="dateField" component="div" className="errorMsg" />
                </div>
                <div className="check-number field">
                    <label htmlFor="checkNumber">Check Number</label>
                    <Field type="text" name="checkNumber" />
                    <ErrorMessage name="checkNumber" component="div" className="errorMsg" />
                </div>
                <div className="order-details field">
                    <label htmlFor="orderDetails">Order Details</label>
                    <Field as="textarea" name="orderDetails" rows="5" />
                    <ErrorMessage name="orderDetails" component="div" className="errorMsg" />
                </div>
                <div className="sub-total field">
                    <label htmlFor="subTotal">Sub Total</label>
                    <Field type="text" name="subTotal" />
                    <ErrorMessage name="subTotal" component="div" className="errorMsg" />
                </div>
                <div className="loyalty-card-number field">
                    <label htmlFor="loyaltyCardNumber">Loyalty Card Number</label>
                    <Field type="text" name="loyaltyCardNumber" />
                    <ErrorMessage name="loyaltyCardNumber" component="div" className="errorMsg" />
                </div>
                <div className="first-name field">
                    <label htmlFor="firstName">First name</label>
                    <Field type="text" name="firstName" />
                    <ErrorMessage name="firstName" component="div" className="errorMsg" />
                </div>
                <div className="last-name field">
                    <label htmlFor="lastName">Last name</label>
                    <Field type="text" name="lastName" />
                    <ErrorMessage name="lastName" component="div" className="errorMsg" />
                </div>
                <div className="email field">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" className="errorMsg" />
                </div>
                <div className="phone field">
                    <label htmlFor="phone">Phone</label>
                    <Field type="tel" name="phone" />
                    <ErrorMessage name="phone" component="div" className="errorMsg" />
                </div>
                <div className="button field">
                    <Button colorBeige type="submit" width="50%">Submit</Button>
                </div>






            </Form>
        </ Formik>
    )
}


export default ContactForm
