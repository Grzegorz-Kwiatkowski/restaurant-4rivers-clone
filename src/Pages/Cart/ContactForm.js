import React, { useContext, useState } from 'react'
import { useFormik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { states } from '../../data';

import { AiFillCaretDown } from "react-icons/ai";

import {
    ContactFormLabel,
    ContactFormContainer,
    ContactFormFieldWrapper,
    ContactFormInput,
    ContactFormHeader,
    ContactFormLeftSide,
    ContactFormRightSide,
    ContactFormSelect,
    ContactFormInfo,
} from './ContactForm.elements';

import { MainContext } from '../../Contexts/Contexts'




const ContactForm = ({ onChange, refId }) => {

    const context = useContext(MainContext);
    const formStates = states;
    const [isOpen, setIsOpen] = useState(true);

    const formik = useFormik({
        initialValues: {
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
            isDifferentAddress: false,
            isDifferentResidentialAddress: false,
            differentFirstName: '',
            differentLastName: '',
            differentCompanyName: '',
            differentStreetAddress: '',
            differentOptionalAddress: '',
            differentTownCity: '',
            differentStateCountry: '',
            differentCapitol: '',
            differentZip: '',
            differentPhone: '',
            differentEmail: '',
        },
        validationSchema:
            Yup.object().shape({
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
                    .max(40, "Must be 30 characters or less")
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

                isDifferentAddress: Yup.boolean(),
                isDifferentResidentialAddress: Yup.boolean(),
                differentFirstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .when("isDifferentAddress", {
                        is: true,
                        then: Yup.string().required("Required"),
                        otherwise: Yup.string()
                    }),
                differentLastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .when("isDifferentAddress", {
                        is: true,
                        then: Yup.string().required("Required"),
                        otherwise: Yup.string()
                    }),
                differentCompanyName: Yup.string()
                    .max(25, "Must be 25 characters or less"),
                differentStreetAddress: Yup.string()
                    .max(30, "Must be 30 characters or less")
                    .when("isDifferentAddress", {
                        is: true,
                        then: Yup.string().required("Required"),
                        otherwise: Yup.string()
                    }),
                differentOptionalAddress: Yup.string()
                    .max(30, 'Must be 30 characters or less'),
                differentTownCity: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .when("isDifferentAddress", {
                        is: true,
                        then: Yup.string().required("Required"),
                        otherwise: Yup.string()
                    }),
                differentState: Yup.string()
                    .when("isDifferentAddress", {
                        is: true,
                        then: Yup.string().required("Required"),
                        otherwise: Yup.string()
                    }),
                differentZip: Yup.string()
                    .when("isDifferentAddress", {
                        is: true,
                        then: Yup.string().required("Required"),
                        otherwise: Yup.string()
                    }),
                differentPhone: Yup.string(),
                orderNotes: Yup.string()
                    .max(150, "Must be 150 characters or less"),
            }),
        onSubmit: () => {
            watchForm();
            formik.resetForm();

        }
    });

    React.useImperativeHandle(refId, () => ({
        Submit: async () => {
            await formik.submitForm();
        }
    }));


    function watchForm() {
        if (onChange) {

            onChange({
                values: formik.values,
                validated: formik.isSubmitting
                    ? Object.keys(formik.errors).length === 0
                    : false
            });
        }
    }

    const touched = formik.touched;
    const errors = formik.errors;
    const isActive = !formik.values.isDifferentAddress;
    console.log("ContactForm : ");
    console.log(formik.errors);

    return (

        <form ref={refId}>


            <ContactFormContainer>

                <ContactFormLeftSide>

                    <ContactFormHeader>
                        Billing details
                    </ContactFormHeader>

                    < ContactFormFieldWrapper directionRow>

                        <ContactFormLabel>
                            <ContactFormInput type="checkbox" name="isResidentialAddress"
                                {...formik.getFieldProps('isResidentialAddress')} />
                                         This is a Residential Address (optional)
                                     </ContactFormLabel>

                    </ ContactFormFieldWrapper>


                    < ContactFormFieldWrapper directionRow>

                        < ContactFormFieldWrapper>
                            <ContactFormLabel htmlFor="firstName" required={true}>First Name</ContactFormLabel>
                            <ContactFormInput
                                name="firstName"
                                type="text"
                                {...formik.getFieldProps('firstName')}
                                error={touched.firstName && errors.firstName}
                                success={touched.firstName && !errors.firstName}
                            />

                        </ ContactFormFieldWrapper>

                        < ContactFormFieldWrapper>

                            <ContactFormLabel htmlFor="lastName" required={true}>Last Name</ContactFormLabel>
                            <ContactFormInput
                                name="lastName"
                                type="text"
                                {...formik.getFieldProps('lastName')}
                                error={touched.lastName && errors.lastName}
                                success={touched.lastName && !errors.lastName} />
                        </ ContactFormFieldWrapper>

                    </ ContactFormFieldWrapper>

                    < ContactFormFieldWrapper >

                        <ContactFormLabel htmlFor="companyName" required={false}>Company name (optional)  </ContactFormLabel>
                        <ContactFormInput
                            name="companyName"
                            type="text"
                            {...formik.getFieldProps('companyName')}
                            error={touched.companyName && errors.companyName}
                            success={touched.companyName && !errors.companyName} />

                    </ ContactFormFieldWrapper>

                    < ContactFormFieldWrapper>

                        <ContactFormLabel >Country / Region </ContactFormLabel>
                        <ContactFormInfo>United States (US)</ContactFormInfo>

                    </ ContactFormFieldWrapper>

                    < ContactFormFieldWrapper>

                        <ContactFormLabel htmlFor="streetAddress" required={true}>Street address</ContactFormLabel>
                        <ContactFormInput
                            name="streetAddress"
                            type="text"
                            {...formik.getFieldProps('streetAddress')}
                            placeholder="House number and street name"
                            error={touched.streetAddress && errors.streetAddress}
                            success={touched.streetAddress && !errors.streetAddress} />

                        <ContactFormLabel htmlFor="optionalAddress" required={false}></ContactFormLabel>
                        <ContactFormInput
                            name="optionalAddress"
                            type="text"
                            {...formik.getFieldProps('optionalAddress')}
                            placeholder="Apartment,suite,unit,etc. (optional)"
                        />

                    </ ContactFormFieldWrapper>

                    < ContactFormFieldWrapper>

                        <ContactFormLabel htmlFor="townCity" required={true}>Town / City</ContactFormLabel>
                        <ContactFormInput
                            name="townCity"
                            type="text"
                            {...formik.getFieldProps('townCity')}
                            error={touched.townCity && errors.townCity}
                            success={touched.townCity && !errors.townCity} />

                    </ ContactFormFieldWrapper>

                    < ContactFormFieldWrapper>

                        <ContactFormLabel htmlFor="state" required={true}>State</ContactFormLabel>
                        <ContactFormSelect
                            name="state"
                            {...formik.getFieldProps('state')}
                            error={touched.state && errors.state}
                            success={touched.state && !errors.state}
                        >
                            {formStates.map(state => <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>)}
                        </ContactFormSelect>

                    </ ContactFormFieldWrapper>

                    < ContactFormFieldWrapper>

                        <ContactFormLabel htmlFor="zip" required={true}>Zip</ContactFormLabel>
                        <ContactFormInput
                            name="zip"
                            type="text"
                            {...formik.getFieldProps('zip')}
                            error={touched.zip && errors.zip}
                            success={touched.zip && !errors.zip} />

                    </ ContactFormFieldWrapper>

                    < ContactFormFieldWrapper>

                        <ContactFormLabel htmlFor="phone" required={true}>Phone</ContactFormLabel>
                        <ContactFormInput
                            name="phone"
                            type="tel"
                            {...formik.getFieldProps('phone')}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                            error={touched.phone && errors.phone}
                            success={touched.phone && !errors.phone} />

                    </ ContactFormFieldWrapper>

                    < ContactFormFieldWrapper>

                        <ContactFormLabel htmlFor="email" required={true}>Email Address</ContactFormLabel>
                        <ContactFormInput
                            name="email"
                            type="email"
                            {...formik.getFieldProps('email')}
                            error={touched.email && errors.email}
                            success={touched.email && !errors.email} />

                    </ ContactFormFieldWrapper>

                </ContactFormLeftSide>



                <ContactFormRightSide>


                    < ContactFormFieldWrapper>

                        <ContactFormLabel>
                            <ContactFormInput type="checkbox" name="isDifferentAddress"
                                {...formik.getFieldProps('isDifferentAddress')} />

                                    Ship to a different address?
                        </ContactFormLabel>

                    </ ContactFormFieldWrapper>


                    {formik.values.isDifferentAddress && (
                        <fieldset disabled={!formik.values.isDifferentAddress} >
                            < ContactFormFieldWrapper>

                                <ContactFormLabel>
                                    <ContactFormInput
                                        type="checkbox"
                                        name="isDifferentResidentialAddress"
                                        disabled={isActive}
                                        {...formik.getFieldProps('isDifferentResidentialAddress')} />
                                        This is a Residential Address (optional)
                                    </ContactFormLabel>

                            </ ContactFormFieldWrapper>


                            < ContactFormFieldWrapper directionRow>

                                < ContactFormFieldWrapper>
                                    <ContactFormLabel htmlFor="differentFirstName" required={true}>First Name</ContactFormLabel>
                                    <ContactFormInput
                                        name="differentFirstName"
                                        type="text"
                                        {...formik.getFieldProps('differentFirstName')}
                                        error={touched.differentFirstName && errors.differentFirstName}
                                        success={touched.differentFirstName && !errors.differentFirstName} />
                                </ ContactFormFieldWrapper>

                                < ContactFormFieldWrapper marginLeft="10px">
                                    <ContactFormLabel htmlFor="differentLastName" required={true}>Last Name</ContactFormLabel>
                                    <ContactFormInput
                                        name="differentLastName"
                                        type="text"
                                        {...formik.getFieldProps('differentLastName')}
                                        error={touched.differentLastName && errors.differentLastName}
                                        success={touched.differentLastName && !errors.differentLastName} />
                                </ ContactFormFieldWrapper>

                            </ ContactFormFieldWrapper>


                            < ContactFormFieldWrapper>

                                <ContactFormLabel htmlFor="differentCompanyName" required={false}>Company name (optional)</ContactFormLabel>
                                <ContactFormInput
                                    name="differentCompanyName"
                                    type="text"
                                    {...formik.getFieldProps('differentCompanyName')}
                                    error={touched.differentCompanyName && errors.differentCompanyName}
                                    success={touched.differentCompanyName && !errors.differentCompanyName} />

                            </ ContactFormFieldWrapper>


                            < ContactFormFieldWrapper>

                                <ContactFormLabel required={true}>Country / Region </ContactFormLabel>
                                <ContactFormInfo>United States (US)</ContactFormInfo>

                            </ ContactFormFieldWrapper>


                            < ContactFormFieldWrapper>

                                <ContactFormLabel htmlFor="differentStreetAddress" required={true}>Street address</ContactFormLabel>
                                <ContactFormInput
                                    name="differentStreetAddress"
                                    type="text"
                                    placeholder="House number and street name"
                                    {...formik.getFieldProps('differentStreetAddress')}
                                    error={touched.differentStreetAddress && errors.differentStreetAddress}
                                    success={touched.differentStreetAddress && !errors.differentStreetAddress} />

                                <ContactFormLabel htmlFor="differentOptionalAddress" required={false}></ContactFormLabel>
                                <ContactFormInput
                                    name="differentOptionalAddress"
                                    type="text"
                                    placeholder="Apartment,suite,unit,etc. (optional)"
                                    {...formik.getFieldProps('differentOptionalAddress')}
                                    error={touched.differentOptionalAddress && errors.differentOptionalAddress}
                                    success={touched.differentOptionalAddress && !errors.differentOptionalAddress} />

                            </ ContactFormFieldWrapper>


                            < ContactFormFieldWrapper>

                                <ContactFormLabel htmlFor="differentTownCity" required={true}>Town / City</ContactFormLabel>
                                <ContactFormInput
                                    name="differentTownCity"
                                    type="text"
                                    {...formik.getFieldProps('differentTownCity')}
                                    error={touched.differentTownCity && errors.differentTownCity}
                                    success={touched.differentTownCity && !errors.differentTownCity} />

                            </ ContactFormFieldWrapper>


                            < ContactFormFieldWrapper>

                                <ContactFormLabel htmlFor="differentState" required={true}> State</ContactFormLabel>
                                <ContactFormSelect
                                    name="differentState"
                                    {...formik.getFieldProps('differentState')}>
                                    {formStates.map(state => <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>)}
                                </ContactFormSelect>

                            </ ContactFormFieldWrapper>


                            < ContactFormFieldWrapper>

                                <ContactFormLabel htmlFor="differentZip" required={true}>Zip</ContactFormLabel>
                                <ContactFormInput
                                    name="differentZip"
                                    type="text"
                                    {...formik.getFieldProps('differentZip')}
                                    error={touched.differentZip && errors.differentZip}
                                    success={touched.differentZip && !errors.differentZip} />

                            </ ContactFormFieldWrapper>


                            < ContactFormFieldWrapper>

                                <ContactFormLabel htmlFor="differentPhone" required={false}>Phone</ContactFormLabel>
                                <ContactFormInput
                                    name="differentPhone"
                                    type="tel"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                                    {...formik.getFieldProps('differentPhone')}
                                    error={touched.differentPhone && errors.differentPhone}
                                    success={touched.differentPhone && !errors.differentPhone} />

                            </ ContactFormFieldWrapper>
                        </fieldset>
                    )}

                    < ContactFormFieldWrapper>

                        <ContactFormLabel htmlFor="orderDetails" required={false}>Order notes (optional)</ContactFormLabel>
                        <ContactFormInput
                            as="textarea"
                            name="orderDetails"
                            placeholder="Notes about your order , e.g special notes for delivery"
                        />
                    </ ContactFormFieldWrapper>


                </ContactFormRightSide>


            </ContactFormContainer >
        </form>


    )
}
export default ContactForm;

