import styled from 'styled-components'
import { Button, Image } from '../../Styled Components/styled-components'
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
} from 'react-stripe-elements'

export const StripeFormContainer = styled.div`
    background-color:#EBE9EB;
    padding:0rem .7rem 1rem .7rem;
    border-radius:8px;
`;

export const StripeFormWrapper = styled.div`
    background-color:#DFDCDE;
    padding:1rem;
    border-radius:8px;
`;
export const StripeFormFieldWrapper = styled.div`
    width:100%;
    margin:.5rem;
    padding:0 .5rem;
`;
export const StripeFormFieldsWrapper = styled.div`
    display:flex;
`;

export const StripeFormLabel = styled.label`
    color:#515151;
    font-family:PatuaOne;
    font-size:.8rem;
    letter-spacing:1px;
    margin-bottom:.5rem;

        ::after {
            content:'*';
            color:#FF0000;
        }
`;

export const StripeFormButtonWrapper = styled.div`
    width:100%;
    text-align:right;
`;

export const StripeFormButton = styled(Button)`
    font-size:.9rem;
    padding:10px;
    width:100%;
    margin-top:.5rem;
`;

export const StripeFormTitleWrapper = styled.div`
    padding:.5rem;
`;

export const StripeFormTitle = styled(StripeFormLabel)`
    margin: 0 1rem 0 0; 
    font-size:.6rem; 
        ::after {
            content:'';
        }
`;

export const StripeFormImage = styled(Image)`
    width:8rem;
    height:1rem;
`;


export const StripeCardNumberElement = styled(CardNumberElement)`
    border:1px solid lightgray;
    padding:.5rem;
    background-color:#fff;
`;

export const StripeCardExpiryElement = styled(CardExpiryElement)`
    border:1px solid lightgray;
    padding:.5rem;
    background-color:#fff;
`;

export const StripeCardCVCElement = styled(CardCVCElement)`
    border:1px solid lightgray;
    padding:.5rem;
    background-color:#fff;
`;