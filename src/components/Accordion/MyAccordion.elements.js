import styled from 'styled-components'
import { Header, Info } from '../../Styled Components/styled-components'

export const MyAccordionContainer = styled.div`
    padding: 1.2rem 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid lightgray;

        @media screen and (max-width: 768px) { 
            padding:1rem .6rem;
        }
`;

export const MyAccordionMealsContainer = styled.div`
    margin-top: 1rem;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
`;

export const MyAccordionSingleMeal = styled.div`
    width: 50%;
    padding: 1rem;

        @media screen and (max-width: 768px) {
            width:100%;
            padding:0;
            margin-bottom:.5rem;
        }
`;

export const MyAccordionHeader = styled(Header)`
    color:#000;
    letter-spacing:.5rem;
    font-size:3rem;
    margin:1.2rem 0 0 0;
    text-align:center;
    width:100%;

        @media screen and (max-width: 768px) { 
            font-size:2.6rem;  
            margin:0;
            letter-spacing:.2rem;
        }
`;

export const MyAccordionInfo = styled(Info)`
    color:#000;
    font-size:.8rem;
    letter-spacing:3px;
    
`;

export const MyAccordionTitle = styled.h1`
    color: #8E1717;
    font-family: "PatuaOne";
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing:1px;

        @media screen and (max-width: 768px) { 
            font-size:1.5rem;
            font-weight:bold;
        }
`;

export const MyAccordionContent = styled.p`
    font-family: "PatuaOne";
    font-size: 1.1rem;

        @media screen and (max-width: 768px) { 
            font-size:1.4rem;
        }
`;

export const BorderWrapper = styled.span`

    display:flex;
    align-items:center;
    font-size:.8rem;
    text-transform:uppercase;
    margin-top:1rem;
        ::before,
        ::after {
            content: '';
            display:block;
            border:1px solid rgba(0,0,0,0.25);
            flex-grow:1;
            margin:0 .5rem;
            padding:0 2rem;
        }

        @media screen and (max-width: 768px) { 
           margin-top:1rem;
           font-size:1.2rem;
           text-transform:uppercase;
           line-height:100%;
           letter-spacing:1px;

                ::before,
                ::after {
                    display:none;
                }  
          }
`;