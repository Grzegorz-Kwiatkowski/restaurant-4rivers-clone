import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { IoTrashBinOutline } from 'react-icons/io5'
import { Image } from '../../Styled Components/styled-components';

export const CartContentTrashBinWrapper = styled.div`
    width:3rem;
    height:3rem;
    display:flex;
    align-items: center;
    justify-content:center;

        @media screen and (max-width: 768px) { 
          visibility:hidden;
        }
`;

export const CartContentTrashBinMobileWrapper = styled(CartContentTrashBinWrapper)`
    visibility:hidden;
    width:2rem;
    height:2rem;
        @media screen and (max-width: 768px) { 
                visibility:visible;
          
                
        }
`;


export const CartContentTrashBin = styled(IoTrashBinOutline)`
    font-size:1.6rem;
    transition-duration:300ms;
    
        :hover {
            color:#FF3434;
            font-size:2rem;
        }

     
       
`;

export const CartContentImage = styled(Image)`
        width:2.5rem;
        height:2.5rem;
        border-radius:50%;
        margin:0 2rem;

            @media screen and (max-width: 768px) { 
                display:none;
            }
`;

export const CartContentLink = styled(Link)`
  color: #873431;
  text-decoration: underline;
  font-family: "PatuaOne";
  text-transform: uppercase;
  font-size:1rem;
  letter-spacing:1px;
  
    :hover {
        color:#873431;
    }
`;

export const CartContentTrashBinTableRow = styled.tr`
  
`;