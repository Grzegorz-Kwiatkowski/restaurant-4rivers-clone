import styled from 'styled-components'
import { Field } from 'formik'

import { Header } from '../../Styled Components/styled-components'

export const CheckoutFormContainer = styled.div`
    display:flex;
  
        @media screen and (max-width: 768px) { 
            flex-direction:column;
        }
`;

export const CheckoutFormLeftSide = styled.div`
  grid-area: leftColumn;
  padding:20px;
  width:50%;
  
        @media screen and (max-width: 768px) { 
            width:100%;
        }
`;

export const CheckoutFormRightSide = styled.div`
    grid-area: rightColumn;
    padding:20px;
    width:50%;

        @media screen and (max-width: 768px) { 
            width:100%;
        }
`;

export const CheckoutFormFieldWrapper = styled.div`
   display:flex;
   flex-direction:${props => props.directionRow ? "row" : "column"};
   width:100%;
   margin-bottom:.7rem;
`;

export const CheckoutFormLabel = styled.label`
    font-family:PatuaOne;
    font-size:.9rem;

    &&:after {
        content:${(props) => `"${props.required ? ' *' : ' '}"`};
        color:#FF0000;
    }
`;

export const CheckoutFormField = styled(Field)`
    margin:0 .5rem 0 0;
    font-size:.8rem;
    font-family:PatuaOne;
`;

export const CheckoutFormHeader = styled(Header)`
    color:#000;
    text-transform:none;
    font-family:PatuaOne;
    font-size:1.3rem;         
    margin:0 0 1rem 0;                         
`;

export const CheckoutFormInfo = styled.p`
    form-size:1.2rem;
    font-family:PatuaOne;
    margin:0;
    letter-spacing:1px;
`;