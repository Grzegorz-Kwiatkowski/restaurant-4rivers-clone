import styled from 'styled-components'
import { Container, Header, Info, Button } from '../../Styled Components/styled-components'

export const CakesContainer = styled.div`

`;

export const CakesParallaxWrapper = styled(Container)`
    padding:4rem;
    height:100vh;
        
        @media screen and (max-width: 768px) { 
            height:auto;
        }
`;

export const CakesParallaxHeader = styled(Header)`
    letter-spacing:.6rem;
    font-size:5rem;
    text-align:center;
    
        ::after {
            content: "";
            display: block;
            margin: 0 auto;
            width: 20%;
            margin-top: 30px;
            margin-bottom: 20px;
            border-bottom: 2px solid white;
        }

            @media screen and (max-width: 768px) { 
                font-size:4rem;
            }
`;

export const CakesParallaxInfo = styled(Info)`
        letter-spacing:3px;
        text-transform:uppercase;
        margin:1.5rem 0;

        @media screen and (max-width: 768px) { 
            font-size:1rem;
          }
`;

export const CakesButton = styled(Button)`
        margin:5px;
`;

export const CakesWrapper = styled(Container)`
        padding:2rem 11rem;

            ::after {
                content: "";
                display: block;
                margin: 0 auto;
                width: 100%;
                padding-top: 2rem;
                border-bottom: 2px solid #808080;
            }

                @media screen and (max-width: 768px) { 
                    padding:1.5rem 2rem;
                }
`;

export const CakesHeader = styled(Header)`
    color:#000;
    font-family:PatuaOne;
    font-size:2.7rem;
    text-transform:none;
    letter-spacing:.2rem;
    text-align:center;

        @media screen and (max-width: 768px) { 
            font-size:2rem;  
        }
`;

export const CakesInfo = styled(Info)`
    font-family:PatuaOne;
    color:#8F2626;
    letter-spacing:.1rem;
    font-size:1.2rem;
    text-transform:uppercase;
    font-weight:bold;
    margin:.3rem 0 1rem 0;
`;

export const CakesText = styled(Info)`
    font-family:PatuaOne;
    text-transform:none;
    color:#000;
    letter-spacing:.1rem;
    font-size:1.2rem;
`;