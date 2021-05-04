import styled from 'styled-components'
import { CardElement } from "@stripe/react-stripe-js";

import { Button } from '../Styled Components/styled-components'

export const StripeFormContainer = styled.div`
    padding:0 4rem;
`;
export const StripeFormSpinnerWrapper = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:4rem 0;
`;

export const StripeFORMCardElement = styled(CardElement)`
    border: 1px solid #515151;
    border-radius: 7px;
    padding: 15px;
    width:100%;
`;

export const StripeFORM = styled.form`
`;

export const StripeFORMLabel = styled.small`
color:#515151;
font-family:PatuaOne;
font-size:.8rem;
    ::after {
        content:'*';
        color:#FF0000;
        margin-left:2px;
    }
`;

export const StripeFORMImage = styled.img`
    width:9rem;
    height:1rem;
    
`;

export const StripeFORMWrapper = styled.div`
    background-color:#EBE9EB;
    padding:0rem .7rem 1rem .7rem;
    border-radius:8px;
    width:100%;
`;

export const StripeFORMTitleWrapper = styled.div`
    display:flex;
    align-items:center;
    padding:.5rem 0;
`;

export const StripeFORMTitle = styled.h1`
    color:#515151;
    font-family:PatuaOne;
    margin: 0 1rem 0 0; 
    font-size:.8rem; 
    letter-spacing:1px;
      
`;

export const StripeFORMContentWrapper = styled.div`
    background-color:#DFDCDE;
    padding:1rem;
    border-radius:8px;
`;

export const StripeFORMTextWrapper = styled.div`
        display:flex;
        justify-content:space-between;
        margin:0rem  .5rem .2rem .5rem;
`;

export const StripeFORMButtonWrapper = styled.div`
    width:100%;
    text-align:right;
`;

export const StripeFORMButton = styled(Button)`
    font-size:.9rem;
    padding:10px;
    width:100%;
    margin-top:.5rem;
`;