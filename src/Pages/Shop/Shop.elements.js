import styled from 'styled-components'
import { Container, Header, Info } from '../../Styled Components/styled-components'

export const ShopContainer = styled.div`

`;

export const ShopParallaxWrapper = styled(Container)`
    height:100vh;
    padding:0 15rem;

        @media screen and (max-width: 768px) { 
            padding 7rem .5rem;  
            height:auto;
        }
`;

export const ShopParallaxHeader = styled(Header)`
    font-size:3.3rem;
    letter-spacing:.5rem;
    font-family:Verlag;
    text-align:center;
    font-weight:bold;

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
                font-size:2.1rem;  
            }
`;

export const ShopParallaxInfo = styled(Info)`
        text-transform:uppercase;
        letter-spacing:2px;
        margin-top:1rem;

            @media screen and (max-width: 768px) { 
                font-size:1rem;  
            }
`;

export const ShopWrapper = styled(Container)`
        padding:2rem 0;
`;

export const ShopHeader = styled(Header)`
        color:#000;
        font-family:PatuaOne;
        text-align:center;
        letter-spacing:5px;
`;

export const ShopProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
`;