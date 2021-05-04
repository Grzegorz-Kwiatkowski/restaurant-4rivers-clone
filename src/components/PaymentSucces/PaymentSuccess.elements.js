import styled from 'styled-components'
import { ClassicSpinner } from "react-spinners-kit";

export const PaymentSuccessContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding:3rem 0;
`;

export const PaymentSuccessImage = styled.img`
    width:60%;
    height:40%;
    margin-bottom:1rem;

    @media screen and (max-width: 768px) { 
       width:70vw;
       height:25vh;
      }
    
`;

export const PaymentSuccessText = styled.p`
    color:#3F9417;
    font-family:Verlag;
    font-weight:500;
    font-size: 1.2rem;
    margin-top:1rem;
`;

export const StrongText = styled.strong`
    color: "#176E0C"
`;