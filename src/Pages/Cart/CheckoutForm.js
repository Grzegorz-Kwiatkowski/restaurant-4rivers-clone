import React, { useContext, useState } from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { MainContext } from '../../Contexts/Contexts'

import YourOrder from './YourOrder'

import {
    CheckoutFormContainer,
    CheckoutFormLeftSide,
    CheckoutFormRightSide,
    CheckoutFormFieldWrapper,
    CheckoutFormLabel,
    CheckoutFormField,
    CheckoutFormHeader,
    CheckoutFormInfo
} from './CheckoutForm.elements'
import { TrendingUpOutlined } from '@material-ui/icons';


function CheckoutForm() {
    const context = useContext(MainContext);

    const [address, setAddress] = useState(true);


    return (
        <div checkoutForm>
            <Formik
                initialValues={{
                    isResidentialAddress: false,
                    firstName: '',
                    lastName: '',
                    companyName: '',
                    streetAddress: '',
                    optionalAddress: '',
                    townCity: '',
                    stateCountry: '',
                    capitol: '',
                    zip: '',
                    phone: '',
                    email: '',
                    differentAddress: false,
                    isResidentialAddress_2: false,
                    firstName_2: '',
                    lastName_2: '',
                    companyName_2: '',
                    streetAddress_2: '',
                    optionalAddress_2: '',
                    townCity_2: '',
                    stateCountry_2: '',
                    orderNotes: ''
                }}
                validationSchema={Yup.object({
                    isResidentialAddress: Yup.boolean(),
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    companyName: Yup.string()
                        .max(25, "Must be 25 characters or less"),
                    streetAddress: Yup.string()
                        .max(30, "Must be 30 characters or less")
                        .required('Required'),
                    optionalAddress: Yup.string()
                        .max(30, 'Must be 30 characters or less'),
                    townCity: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required('Required'),
                    state: Yup.string()
                        .required('Required'),
                    capitol: Yup.string(),
                    zip: Yup.string()
                        .required('Required'),
                    phone: Yup.string()
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    differentAddress: Yup.boolean(),
                    isResidentialAddress_2: Yup.boolean(),
                    firstName_2: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName_2: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    companyName_2: Yup.string()
                        .max(25, "Must be 25 characters or less"),
                    streetAddress_2: Yup.string()
                        .max(30, "Must be 30 characters or less")
                        .required('Required'),
                    optionalAddress_2: Yup.string()
                        .max(30, 'Must be 30 characters or less'),
                    townCity_2: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required('Required'),
                    state_2: Yup.string()
                        .required('Required'),
                    zip_2: Yup.string()
                        .required('Required'),
                    phone_2: Yup.string(),
                    orderNotes: Yup.string()
                        .max(150, "Must be 150 characters or less"),
                })}

                onSubmit={(values, { differentAddress }) => {
                    console.log(values)
                }}
            >

                {({ values, setFieldValue }) => (
                    <Form>



                        <CheckoutFormContainer>

                            <CheckoutFormLeftSide>

                                <CheckoutFormHeader>
                                    Billing details
                                </CheckoutFormHeader>

                                < CheckoutFormFieldWrapper directionRow>

                                    <CheckoutFormLabel>
                                        <CheckoutFormField type="checkbox" name="isResidentialAddress" />
                                        This is a Residential Address (optional)
                                    </CheckoutFormLabel>

                                </ CheckoutFormFieldWrapper>


                                < CheckoutFormFieldWrapper directionRow>

                                    < CheckoutFormFieldWrapper>
                                        <CheckoutFormLabel htmlFor="firstName" required={true}>First Name</CheckoutFormLabel>
                                        <CheckoutFormField name="firstName" type="text" />
                                    </ CheckoutFormFieldWrapper>

                                    < CheckoutFormFieldWrapper>
                                        <CheckoutFormLabel htmlFor="lastName" required={true}>Last Name</CheckoutFormLabel>
                                        <CheckoutFormField name="lastName" type="text" />
                                    </ CheckoutFormFieldWrapper>

                                </ CheckoutFormFieldWrapper>


                                < CheckoutFormFieldWrapper >

                                    <CheckoutFormLabel htmlFor="companyName" required={false}>Company name (optional)  </CheckoutFormLabel>
                                    <CheckoutFormField name="companyName" type="text" />

                                </ CheckoutFormFieldWrapper>


                                < CheckoutFormFieldWrapper>

                                    <CheckoutFormLabel required={TrendingUpOutlined}>Country / Region </CheckoutFormLabel>
                                    <CheckoutFormInfo>United States (US)</CheckoutFormInfo>

                                </ CheckoutFormFieldWrapper>


                                < CheckoutFormFieldWrapper>

                                    <CheckoutFormLabel htmlFor="streetAddress" required={true}>Street address</CheckoutFormLabel>
                                    <CheckoutFormField name="streetAddress" type="text" placeholder="House number and street name" />

                                    <CheckoutFormLabel htmlFor="optionalAddress" required={false}></CheckoutFormLabel>
                                    <CheckoutFormField name="optionalAddress" type="text" placeholder="Apartment,suite,unit,etc. (optional)" />

                                </ CheckoutFormFieldWrapper>


                                < CheckoutFormFieldWrapper>

                                    <CheckoutFormLabel htmlFor="townCity" required={true}>Town / City</CheckoutFormLabel>
                                    <CheckoutFormField name="townCity" type="text" />

                                </ CheckoutFormFieldWrapper>


                                < CheckoutFormFieldWrapper>

                                    <CheckoutFormLabel htmlFor="state" required={true}>State</CheckoutFormLabel>
                                    <CheckoutFormField component="select" name="state">
                                        {context.states.map(state => <option value={state.abbreviation}>{state.name}</option>)}
                                    </CheckoutFormField>

                                </ CheckoutFormFieldWrapper>


                                < CheckoutFormFieldWrapper>

                                    <CheckoutFormLabel htmlFor="zip" required={true}>Zip</CheckoutFormLabel>
                                    <CheckoutFormField name="zip" type="text" />

                                </ CheckoutFormFieldWrapper>


                                < CheckoutFormFieldWrapper>

                                    <CheckoutFormLabel htmlFor="phone" required={true}>Phone</CheckoutFormLabel>
                                    <CheckoutFormField name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />

                                </ CheckoutFormFieldWrapper>


                                < CheckoutFormFieldWrapper>

                                    <CheckoutFormLabel htmlFor="email" required={true}>Email Address</CheckoutFormLabel>
                                    <CheckoutFormField name="email" type="email" />

                                </ CheckoutFormFieldWrapper>

                            </CheckoutFormLeftSide>




                            <CheckoutFormRightSide>


                                < CheckoutFormFieldWrapper>

                                    <CheckoutFormLabel>
                                        <CheckoutFormField type="checkbox" name="differentAddress"
                                            checked={values.check}
                                            onChange={() => {
                                                setFieldValue("check", !values.check);
                                                setAddress(values.check);
                                            }}
                                        />
                                        Ship to a different address?
                                    </CheckoutFormLabel>

                                </ CheckoutFormFieldWrapper>


                                {!address && (
                                    <>
                                        < CheckoutFormFieldWrapper>

                                            <CheckoutFormLabel>
                                                <CheckoutFormField type="checkbox" name="isResidentialAddress_2" />
                                                This is a Residential Address (optional)
                                            </CheckoutFormLabel>

                                        </ CheckoutFormFieldWrapper>


                                        < CheckoutFormFieldWrapper directionRow>

                                            < CheckoutFormFieldWrapper>
                                                <CheckoutFormLabel htmlFor="firstName_2" required={true}>First Name</CheckoutFormLabel>
                                                <CheckoutFormField name="firstName_2" type="text" />
                                            </ CheckoutFormFieldWrapper>

                                            < CheckoutFormFieldWrapper marginLeft="10px">
                                                <CheckoutFormLabel htmlFor="lastName_2" required={true}>Last Name</CheckoutFormLabel>
                                                <CheckoutFormField name="lastName_2" type="text" />
                                            </ CheckoutFormFieldWrapper>

                                        </ CheckoutFormFieldWrapper>


                                        < CheckoutFormFieldWrapper>

                                            <CheckoutFormLabel htmlFor="companyName_2" required={false}>Company name (optional)</CheckoutFormLabel>
                                            <CheckoutFormField name="companyName_2" type="text" />

                                        </ CheckoutFormFieldWrapper>


                                        < CheckoutFormFieldWrapper>

                                            <CheckoutFormLabel required={true}>Country / Region </CheckoutFormLabel>
                                            <CheckoutFormInfo>United States (US)</CheckoutFormInfo>

                                        </ CheckoutFormFieldWrapper>


                                        < CheckoutFormFieldWrapper>

                                            <CheckoutFormLabel htmlFor="streetAddress_2" required={true}>Street address</CheckoutFormLabel>
                                            <CheckoutFormField name="streetAddress_2" type="text" placeholder="House number and street name" />

                                            <CheckoutFormLabel htmlFor="streetAddress_2" required={false}></CheckoutFormLabel>
                                            <CheckoutFormField name="optionalAddress_2" type="text" placeholder="Apartment,suite,unit,etc. (optional)" />

                                        </ CheckoutFormFieldWrapper>


                                        < CheckoutFormFieldWrapper>

                                            <CheckoutFormLabel htmlFor="townCity_2" required={true}>Town / City</CheckoutFormLabel>
                                            <CheckoutFormField name="townCity_2" type="text" />

                                        </ CheckoutFormFieldWrapper>


                                        < CheckoutFormFieldWrapper>

                                            <CheckoutFormLabel htmlFor="state_2" required={true}> State</CheckoutFormLabel>
                                            <CheckoutFormField as="select" name="state_2">
                                                {context.states.map(state => <option value={state.abbreviation}>{state.name}</option>)}
                                            </CheckoutFormField>

                                        </ CheckoutFormFieldWrapper>


                                        < CheckoutFormFieldWrapper>

                                            <CheckoutFormLabel htmlFor="zip_2" required={true}>Zip</CheckoutFormLabel>
                                            <CheckoutFormField name="zip_2" type="text" />

                                        </ CheckoutFormFieldWrapper>


                                        < CheckoutFormFieldWrapper>

                                            <CheckoutFormLabel htmlFor="phone_2" required={false}>Phone</CheckoutFormLabel>
                                            <CheckoutFormField name="phone_2" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />

                                        </ CheckoutFormFieldWrapper>
                                    </>
                                )}

                                < CheckoutFormFieldWrapper>

                                    <CheckoutFormLabel htmlFor="orderDetails" required={false}>Order notes (optional)</CheckoutFormLabel>
                                    <CheckoutFormField as="textarea" name="orderDetails"
                                        placeholder="Notes about your order , e.g special notes for delivery" />
                                    <ErrorMessage name="orderDetails" component="div" />

                                </ CheckoutFormFieldWrapper>


                            </CheckoutFormRightSide>

                        </CheckoutFormContainer>
                    </Form>
                )}
            </Formik>
            <YourOrder />
        </div>
    )
}

export default CheckoutForm
