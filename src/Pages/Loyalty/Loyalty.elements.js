import styled from 'styled-components'
import { Container, Button, Info, Header } from '../../Styled Components/styled-components'


export const LoyaltyContainer = styled.div`

`;

export const LoyaltyParallaxWrapper = styled(Container)`
    padding:4rem;
`;

export const LoyaltyButton = styled(Button)`
    margin:5px;
`;

export const LoyaltyParallaxInfo = styled(Info)`
    letter-spacing:1px;
    text-transform:uppercase;
    font-weight:bold;
        @media screen and (max-width: 768px) { 
           font-size:1rem; 
        }
`;

export const LoyaltyUnderlineWrapper = styled(Container)`
    padding:2rem 11rem;

        ::after {
            content: "";
            display: block;
            margin: 3rem auto 0 auto;
            width: 100%;
            border-bottom: 2px solid #808080;
        }

        @media screen and (max-width: 768px) { 
           padding:1.5rem 2rem; 
        }
`;

export const LoyaltyWrapper = styled(Container)`
    padding:2rem 11rem;

        @media screen and (max-width: 768px) { 
            padding:1.5rem 2rem; 
        }
`;

export const LoyaltyHeader = styled(Header)`
    color:#000;
    font-family:PatuaOne;
    text-transform:lowercase;
    text-align:center;

        :first-letter {
            text-transform:uppercase;
        }

        @media screen and (max-width: 768px) { 
            font-size:1.7rem;
         }

 `;

export const LoyaltyInfo = styled(Info)`
    font-family:PatuaOne;
    color:#8F2626;
    letter-spacing:2px;
    font-weight:bold;

        @media screen and (max-width: 768px) { 
            font-size:1.1rem; 
        }
`;

export const LoyaltyContent = styled(Info)`
    font-family:PatuaOne;
    text-transform:none;
    color:#000;
    letter-spacing:1px;

    @media screen and (max-width: 768px) { 
       font-size:.9rem;
     }
`;