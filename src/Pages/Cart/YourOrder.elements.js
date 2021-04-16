import styled from 'styled-components'
import { Header } from '../../Styled Components/styled-components'

export const YourOrderContainer = styled.div`
    margin:2rem 0;
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
   
        tr {
            border:.5px solid lightgray;
        }
        td,th {
            width:50%;
            font-family:PatuaOne;
            font-size:1.2rem;
            padding:.5rem;
        }
`;

export const YourOrderInfo = styled.p`
    color:gray;
    font-family:PatuaOne;
    text-transform:none;
    font-size:1rem;
`;