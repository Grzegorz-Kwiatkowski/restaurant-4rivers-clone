import React from 'react'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import "yup-phone";

import {
    FormContainer,
    FormLabel,
    LocationField,
    DateField,
    CheckNumberField,
    OrderDetailsField,
    SubTotalField,
    CardNumberField,
    FirstNameField,
    LastNameField,
    EmailField,
    PhoneField,
    ButtonField,
    MyField,
    MyErrorMessage,
    SmallText,
} from './ContactForm.element'

import valid from 'card-validator'

import { Button } from '../../Styled Components/styled-components'



function ContactForm() {

    const locations = ["Carrolwood", "Coral Springs", "Daytona", "Gainesville", "Jacksonville", "Kissimmee", "Longwood", "Orange Park", "South Tampa", "Tallahassee", "The COOP", "UCF", "Winter Park", "Winter Garden"];
    const initialValues = {
        location: 'Carrolwood',
        dateField: '',
        checkNumber: 0,
        orderDetails: 'sdfdsfdsdfsdf sfsdfsd',
        subTotal: '',
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


        >

            {({ errors, touched, isValid, dirty, isSubmitting }) => (

                <FormContainer onSubmit={e => {
                    e.preventDefault();
                    console.log("isValid", isValid);
                    console.log("dirty", dirty);
                    console.log("IsSubmitting : ", isSubmitting);
                    console.log("Errors", errors)
                    isValid &&
                        alert("Handle your custom method instead here");
                }}>

                    <LocationField>
                        <FormLabel htmlFor="location">Location</FormLabel>
                        <Field as="select" name="location" >
                            {locations.map((item) => (
                                <option key={(Math.random() * 1000)} value={item}>{item}</option>
                            ))}
                        </Field>
                        <MyErrorMessage name="location" component="div" />
                    </LocationField>

                    <DateField>
                        <FormLabel htmlFor="dateField">Date</FormLabel>
                        <MyField
                            type="date"
                            name="dateField"
                            error={touched.dateField && errors.dateField}
                        />
                        <MyErrorMessage name="dateField" component="div" />
                    </DateField>

                    <CheckNumberField>
                        <FormLabel htmlFor="checkNumber">Check Number</FormLabel>
                        <MyField
                            type="number"
                            name="checkNumber"
                            error={touched.checkNumber && errors.checkNumber}
                        />
                        <MyErrorMessage name="checkNumber" component="div" />
                    </CheckNumberField>

                    <OrderDetailsField>
                        <FormLabel htmlFor="orderDetails">Order Details</FormLabel>
                        <MyField
                            as="textarea"
                            name="orderDetails"
                            rows="5"
                            error={touched.orderDetails && errors.orderDetails}
                        />
                        <MyErrorMessage name="orderDetails" component="div" />
                    </OrderDetailsField>

                    <SubTotalField>
                        <FormLabel htmlFor="subTotal">Sub Total</FormLabel>
                        <MyField type="text" name="subTotal"
                            error={touched.subTotal && errors.subTotal} />
                        <MyErrorMessage name="subTotal" component="div" />
                    </SubTotalField>

                    <CardNumberField>
                        <FormLabel htmlFor="loyaltyCardNumber">Loyalty Card Number</FormLabel>
                        <MyField
                            type="text"
                            name="loyaltyCardNumber"
                            error={touched.loyaltyCardNumber && errors.loyaltyCardNumber}
                        />
                        <MyErrorMessage name="loyaltyCardNumber" component="div" />
                    </CardNumberField>

                    <FirstNameField errors={errors}>
                        <FormLabel htmlFor="firstName">Name</FormLabel>
                        <MyField
                            type="text"
                            name="firstName"
                            error={touched.firstName && errors.firstName}
                        />
                        <SmallText>First</SmallText>
                        <MyErrorMessage name="firstName" component="div" />
                    </FirstNameField>

                    <LastNameField>
                        <FormLabel htmlFor="lastName">&nbsp;</FormLabel>
                        <MyField
                            type="text"
                            name="lastName"
                            error={touched.lastName && errors.lastName}
                        />
                        <SmallText>Last</SmallText>
                        <MyErrorMessage name="lastName" component="div" />
                    </LastNameField>

                    <EmailField>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <MyField
                            type="email"
                            name="email"
                            error={touched.email && errors.email}
                        />
                        <MyErrorMessage name="email" component="div" />
                    </EmailField>

                    <PhoneField>
                        <FormLabel htmlFor="phone">Phone</FormLabel>
                        <MyField
                            type="tel"
                            name="phone"
                            error={touched.phone && errors.phone}
                        />
                        <SmallText>Phone format : xxx-xxx-xxx</SmallText>
                        <MyErrorMessage name="phone" component="div" />
                    </PhoneField>

                    <ButtonField>
                        <Button colorBeige type="submit" width="50%">Submit</Button>
                    </ButtonField>

                </FormContainer>
            )}
        </ Formik>
    )
}


export default ContactForm
