import React, { useContext, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { MainContext } from '../../Contexts/Contexts'

import YourOrder from './YourOrder'
import { FormContainer, FormLeftColumn, FormRightColumn, InputWrapper, Header } from '../../Styled Components/styled-components';


function CheckoutForm() {
    const theme = useContext(MainContext);

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
                        <FormContainer>

                            <FormLeftColumn>

                                <Header color="#000"
                                    smallLetter
                                    fontFamily="PatuaOne"
                                    fontSize="1.5em"
                                    marginTop="0px"
                                >Billing details</Header>

                                <InputWrapper directionRow>
                                    <label>
                                        <Field type="checkbox" name="isResidentialAddress" />
                                        This is a Residential Address (optional)
                                    </label>
                                </InputWrapper>

                                <InputWrapper directionRow>
                                    <InputWrapper>
                                        <label htmlFor="firstName">First Name</label>
                                        <Field name="firstName" type="text" />
                                    </InputWrapper>

                                    <InputWrapper marginLeft="10px">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field name="lastName" type="text" />
                                    </InputWrapper>
                                </InputWrapper>

                                <InputWrapper >
                                    <label htmlFor="companyName">Company name (optional)  </label>
                                    <Field name="companyName" type="text" />
                                </InputWrapper>

                                <InputWrapper>
                                    <h5>Country / Region </h5>
                                    <h4>{theme.isUsaLocationActive ? "United States (US)" : "Select a country /region ..."}</h4>
                                </InputWrapper>

                                <InputWrapper>
                                    <label htmlFor="streetAddress">Street address</label>
                                    <Field name="streetAddress" type="text" placeholder="House number and street name" />

                                    <label htmlFor="optionalAddress"></label>
                                    <Field name="optionalAddress" type="text" placeholder="Apartment,suite,unit,etc. (optional)" />
                                </InputWrapper>

                                <InputWrapper>
                                    <label htmlFor="townCity">Town / City</label>
                                    <Field name="townCity" type="text" />
                                </InputWrapper>

                                <InputWrapper>
                                    <label htmlFor="state">State</label>
                                    <Field component="select" name="state">
                                        {theme.states.map(state => <option value={state.abbreviation}>{state.name}</option>)}
                                    </Field>
                                </InputWrapper>

                                <InputWrapper>
                                    <label htmlFor="zip">Zip</label>
                                    <Field name="zip" type="text" />
                                </InputWrapper>

                                <InputWrapper>
                                    <label htmlFor="phone">Phone</label>
                                    <Field name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
                                </InputWrapper>

                                <InputWrapper>
                                    <label htmlFor="email">Email Address</label>
                                    <Field name="email" type="email" />
                                </InputWrapper>
                            </FormLeftColumn>



                            <FormRightColumn>

                                <InputWrapper>
                                    <label>
                                        <Field type="checkbox" name="differentAddress"
                                            checked={values.check}
                                            onChange={() => {
                                                setFieldValue("check", !values.check);
                                                setAddress(values.check);
                                            }}
                                        />
                                        Ship to a different address?
                                    </label>
                                </InputWrapper>

                                {!address && (
                                    <>
                                        <InputWrapper>
                                            <label>
                                                <Field type="checkbox" name="isResidentialAddress_2" />
                                                This is a Residential Address (optional)
                                            </label>
                                        </InputWrapper>

                                        <InputWrapper directionRow>
                                            <InputWrapper>
                                                <label htmlFor="firstName_2">First Name</label>
                                                <Field name="firstName_2" type="text" />
                                            </InputWrapper>

                                            <InputWrapper marginLeft="10px">
                                                <label htmlFor="lastName_2">Last Name</label>
                                                <Field name="lastName_2" type="text" />
                                            </InputWrapper>
                                        </InputWrapper>

                                        <InputWrapper>
                                            <label htmlFor="companyName_2">Company name (optional)</label>
                                            <Field name="companyName_2" type="text" />
                                        </InputWrapper>

                                        <InputWrapper>
                                            <h5>Country / Region </h5>
                                            <h4>{theme.isUsaLocationActive ? "United States (US)" : "Select a country /region ..."}</h4>
                                        </InputWrapper>

                                        <InputWrapper directionRow>
                                            <InputWrapper>
                                                <label htmlFor="streetAddress_2">Street address</label>
                                                <Field name="streetAddress_2" type="text" placeholder="House number and street name" />
                                                <Field name="optionalAddress_2" type="text" placeholder="Apartment,suite,unit,etc. (optional)" />
                                            </InputWrapper>
                                        </InputWrapper>

                                        <InputWrapper>
                                            <label htmlFor="townCity_2">Town / City</label>
                                            <Field name="townCity_2" type="text" />
                                        </InputWrapper>

                                        <InputWrapper>
                                            <label htmlFor="state_2"> State</label>
                                            <Field as="select" name="state_2">
                                                {theme.states.map(state => <option value={state.abbreviation}>{state.name}</option>)}
                                            </Field>
                                        </InputWrapper>

                                        <InputWrapper>
                                            <label htmlFor="zip_2">Zip</label>
                                            <Field name="zip_2" type="text" />
                                        </InputWrapper>

                                        <InputWrapper>
                                            <label htmlFor="phone_2">Phone</label>
                                            <Field name="phone_2" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
                                        </InputWrapper>
                                    </>
                                )}

                                <InputWrapper>
                                    <label htmlFor="orderDetails">Order notes (optional)</label>
                                    <Field as="textarea" name="orderDetails"
                                        placeholder="Notes about your order , e.g special notes for delivery" />
                                    <ErrorMessage name="orderDetails" component="div" className="errorMsg" />
                                </InputWrapper>

                            </FormRightColumn>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
            <YourOrder />
        </div>
    )
}

export default CheckoutForm
