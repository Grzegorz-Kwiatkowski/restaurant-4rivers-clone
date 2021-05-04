import styled from 'styled-components'
import { Header } from '../../Styled Components/styled-components'

export const YourOrderContainer = styled.div`
    margin:2rem 0;
    width:100%;
`;

export const YourOrderHeader = styled(Header)`
    color:#000;
    font-family:PatuaOne;
    text-transform:none;
    font-size:1.5rem;
`;

export const YourOrderTable = styled.table`
    border:.5px solid lightgray;
    width:100%;
    
    tbody {
            tr {
                border:.5px solid lightgray;
            }
            td,th {
                width:50%;
                font-family:PatuaOne;
                font-size:1.2rem;
                padding:.5rem;
            }
    }
       
`;

export const YourOrderInfo = styled.p`
    color:gray;
    font-family:PatuaOne;
    text-transform:none;
    font-size:1rem;
`;

export const YourOrderText = styled.small`
    font-size:.9rem;
    color:#F69110;
`;

export const YourOrderImage = styled.img`
    width:1.2rem;
    height:1.2rem;
    margin:0 .3rem 0 2rem;
`;

export const YourOrderDiscount = styled.div`
    display:${({ isActive }) => (isActive ? "flex" : "none")};
`;

export const YourOrderTotalWrapper = styled.div`
    display:flex;
    align-items:center;
`;