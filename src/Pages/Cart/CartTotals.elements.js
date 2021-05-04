import styled from 'styled-components'
import { Header, Button } from '../../Styled Components/styled-components';

export const CartTotalsContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top:2rem;
`;

export const CartTotalsWrapper = styled.div`
    width:50%;

        @media screen and (max-width: 768px) { 
                  width:100%;  
        }
`;

export const CartTotalsHeader = styled(Header)`
    color:#8F2626; 
    font-size:2rem;
    text-transform:none;
    text-align:left;
    letter-spacing:2px;

        @media screen and (max-width: 768px) { 
                font-size:2.2rem;
        }
`;

export const CartTotalsTable = styled.table`
    width:100%;
    border:.5px solid lightgray;
    tbody {
        tr {
            border:.5px solid lightgray;
        }
        th,td {
            font-size:.9rem;
            width:50%;
            padding: .2rem .5rem;
            font-family:PatuaOne;
    
                @media screen and (max-width: 768px) { 
                    font-size:1.2rem;
                }
        }
        td {
            text-align:left;
        }
    }
        
`;

export const CartTotalsButton = styled(Button)`
    width:100%;
    margin-top:.8rem;
    padding:10px;
    font-size:.9rem;
`;

export const CartTotalsText = styled.small`
    font-size:.9rem;
    color:#F69110;
`;

export const CartTotalsImage = styled.img`
    width:1.2rem;
    height:1.2rem;
    margin:0 .3rem 0 2rem;
`;

export const CartTotalsDiscount = styled.div`
    display:${({ isActive }) => (isActive ? "flex" : "none")};
`;

export const CartTotalsTotalWrapper = styled.div`
    display:flex;
    align-items:center;
`;