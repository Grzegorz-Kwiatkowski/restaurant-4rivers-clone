import styled from 'styled-components'

import { Container, Header, Button } from '../../Styled Components/styled-components'

export const CartContainer = styled(Container)`
`;

export const CartWrapper = styled.div`
    margin:1rem 0;
    width:90%;
`;

export const CartHeader = styled(Header)`
    color:#8F2626;
    letter-spacing:4px;
    
`;

export const CartTableWrapper = styled.div`
`;

export const CartTable = styled.table`
    width:100%;
    border:.5px solid lightgray;
`;

export const CartTableHead = styled.thead`
    tr {
        th {
            text-align:center;
            padding:.5rem 0;
            font-family:PatuaOne;
        }
    }
        @media screen and (max-width: 768px) { 
            display:none;  
        } 
`;

export const CartTableBodyContent = styled.tbody`

        tr {
            th {
                display:none;
            }
            td {
                text-align:center;
            }
            th,td {
                font-family:PatuaOne;
            }
        }
        
        @media screen and (max-width: 768px) { 
            tr {
                border:.5px solid lightgray;
                padding:0 1rem 0 1rem;
                display:flex;
                flex-direction:row;
                flex-wrap:wrap;

                th {
                    width:30%;
                    display:block;                                
                }
              
            
            td {
                    width:70%; 
                    text-align:right;  
                }

            td,th {
                    font-size:1.2rem;
                    padding:.5rem 0;
                    font-family:PatuaOne;
                }
             }
           
        }
`;

export const CartTableBodyCoupon = styled.tfoot`
        
    tr {
        border:.5px solid lightgray;

        @media screen and (max-width: 768px) { 
            display:flex;
            flex-direction:column;
        }
    }
   
    td {
        font-family:PatuaOne;
        font-size:1.1rem;
        letter-spacing:1px;
        padding:.5rem;   
        width:100%; 
        display:flex;
    }
`;

export const CartInput = styled.input`
    width:50%;
    padding-left:.5rem;
    border:${({ isActive }) => (isActive && "2px solid #6DC22E")};

    @media screen and (max-width: 768px) { 
        width:100%;
    }
`;

export const CartButton = styled(Button)`
    margin-left:.5rem;
    padding:.3rem 1rem;
    font-size:.7rem;

        @media screen and (max-width: 768px) { 
            padding:.5rem 1rem;
            font-size:.9rem;
            width:100%;
        }
`;
