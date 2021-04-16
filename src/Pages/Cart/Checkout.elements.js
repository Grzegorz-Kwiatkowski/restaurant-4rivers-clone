import styled from 'styled-components'
import { BiWindow } from "react-icons/bi";
import { Header, Container, Button } from '../../Styled Components/styled-components'

export const CheckoutContainer = styled.div`
    padding:2.5rem 4rem;

        @media screen and (max-width: 768px) { 
           padding:2rem 1.5rem;
        }
`;

export const CheckoutHeaderWrapper = styled.div`
    text-align: left;
    height: auto;
    width: 100%;

        &:after {
        content: '';
        display: block;
        border: 2px solid #D8AB27;
    }
`;

export const CheckoutHeader = styled(Header)`
    color:#8F2626;
    letter-spacing:0.2rem;
`;

export const CheckoutCouponWrapper = styled.div`
    height: auto;
    background-color: #F7F6F7;
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 20px;
`;

export const CheckoutWindowIcon = styled(BiWindow)`
    color:#8F2626;
`;

export const CheckoutCouponTextWrapper = styled.div`
    font-family:PatuaOne;
    font-size:.8em;
    color:gray;
    margin-left:.5rem;
`;

export const CheckoutLink = styled.a`

    text-decoration: underline;
    color: #0000EE;

        &:hover {
            color: #0000EE;
            cursor: pointer;
        }
`;

export const CouponOpenedContainer = styled(Container)`
        flex-direction:row;
        align-items:flex-end;
        border:.5px solid lightgray;
        padding:1rem 0;
        border-radius:10px;
`;

export const CouponOpenedWrapper = styled(Container)`
        align-items:flex-start;
`;

export const CouponOpenedLabel = styled.label`
        font-family:PatuaOne;
        font-size:.7rem;
`;

export const CouponOpenedInput = styled.input`
        width:25vw;
        font-size:.6rem;
        padding:.2rem;
        font-family:PatuaOne;
        text-align:center;
`;

export const ApplyCouponButton = styled(Button)`
        padding:8px 16px;
        font-size:.5rem;
        margin-left:1rem;
`;