import styled from 'styled-components'
import { Field } from 'formik'
import { Header } from '../../Styled Components/styled-components'


export const ContactFormContainer = styled.div`
    display:flex;
   
        @media screen and (max-width: 768px) { 
            flex-direction:column;
        }
`;

export const ContactFormLeftSide = styled.div`
  grid-area: leftColumn;
  padding:20px;
  width:50%;

        @media screen and (max-width: 768px) { 
            width:100%;
        }
`;

export const ContactFormRightSide = styled.div`
    grid-area: rightColumn;
    padding:20px;
    width:50%;
 
        @media screen and (max-width: 768px) { 
            width:100%;
        }
`;

export const ContactFormFieldWrapper = styled.div`
   display:flex;
   flex-direction:${props => props.directionRow ? "row" : "column"};
   width:100%;
   margin-bottom:.7rem;
`;

export const ContactFormLabel = styled.label`
    font-family:PatuaOne;
    font-size:.9rem;

    &:after {
        content:${(props) => `"${props.required ? ' *' : ' '}"`};
        color:#FF0000;
    }
`;

export const ContactFormInput = styled.input`
    margin:0 .5rem 0 0;
    padding-left:5px;
    font-size:.8rem;
    font-family:PatuaOne;
    border-radius:5px;
    border:${({ error, success }) => ((success && "1px solid #6DC22E") || (error && "1px solid #DF0E0F") || "1px solid gray")};
`;

export const ContactFormSelect = styled.select`
    font-family:PatuaOne;
`;

export const ContactFormHeader = styled(Header)`
    color:#000;
    text-transform:none;
    font-family:PatuaOne;
    font-size:1.3rem;         
    margin:0 0 1rem 0;                         
`;

export const ContactFormInfo = styled.p`
    form-size:1.2rem;
    font-family:PatuaOne;
    margin:0;
    letter-spacing:1px;
`;

export const ContactFormErrorMessage = styled.small`
    color:red;
`;