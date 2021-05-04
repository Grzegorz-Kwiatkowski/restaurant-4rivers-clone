import styled from 'styled-components'
import { Field, ErrorMessage } from 'formik'

export const FormContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "location date"
        "check-number ."
        "order-details order-details"
        "sub-total loyalty-card-number"
        "first-name last-name"
        "email phone"
        "button .";
    margin-top: 20px;
        width:75%;

        @media screen and (max-width: 480px) { 
            width:100%;
            grid-template-areas:
            "location location"
            "date date"
            "check-number check-number"
            "order-details order-details"
            "sub-total sub-total"
             "loyalty-card-number loyalty-card-number"
            "first-name first-name"
            "last-name last-name"
            "email email"
            "phone phone"
            "button button";
        }
`;

export const FormLabel = styled.label`
    font-weight: bold;
    font-family: "PatuaOne";
    font-size: 1.1em;
    margin-bottom: 10px;

        &:not([for="lastName"])::after {
            content: " *";
            color: #8b0000;
            font-size:.9rem;
            position:relative;
            top:-5px;
            left:7px;
        }
`;

export const FormFieldWrapper = styled.div`
    text-align: left;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin: 0px;
    height: auto;
   
`;

export const LocationField = styled(FormFieldWrapper)`
    grid-area: location;
`;

export const DateField = styled(FormFieldWrapper)`
    grid-area: date;
`;

export const CheckNumberField = styled(FormFieldWrapper)`
    grid-area: check-number;
`;

export const OrderDetailsField = styled(FormFieldWrapper)`
    grid-area: order-details;
`;

export const SubTotalField = styled(FormFieldWrapper)`
    grid-area: sub-total;
`;

export const CardNumberField = styled(FormFieldWrapper)`
    grid-area: loyalty-card-number;
`;

export const FirstNameField = styled(FormFieldWrapper)`
    grid-area: first-name;
`;

export const LastNameField = styled(FormFieldWrapper)`
    grid-area: last-name;
`;

export const EmailField = styled(FormFieldWrapper)`
    grid-area: email;
`;

export const PhoneField = styled(FormFieldWrapper)`
    grid-area: phone;
`;

export const ButtonField = styled(FormFieldWrapper)`
    grid-area: button;
`;

export const MyField = styled(Field)`
        border:1px solid lightgray;
        border-radius:5px;
        border:${({ error }) => (error ? "2px solid #7D0808" : "1px solid lightgray")};
`;

export const MyErrorMessage = styled(ErrorMessage)`
        font-size:.7rem;
        font-weight:bold;
        color:#7D0808;
        margin:5px;
`;

export const SmallText = styled.sub`
        margin:.5rem 0 .5rem .4rem;
`;

