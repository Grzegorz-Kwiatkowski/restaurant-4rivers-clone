import styled from 'styled-components'
import { Container, Header, Button, Info } from '../../Styled Components/styled-components'

export const GiftCardContainer = styled.div`

`;

export const GiftCardParallaxWrapper = styled(Container)`
    padding:8rem 0;
`;

export const GiftCardParallaxHeader = styled(Header)`
        font-size:5.5rem;
        color:#fff;
        text-align:center;
        letter-spacing:.6rem;
        ::after {
            content: "";
            display: block;
            margin: 1rem auto;
            width: 20%;
            border-bottom: 2px solid white;
          }

          @media screen and (max-width: 768px) { 
            font-size:3rem;  
          }
`;

export const GiftCardParallaxContent = styled(Container)`
    width:50%;

        @media screen and (max-width: 768px) { 
            width:75%;
           text-align:center;
        }
`;

export const GiftCardButton = styled(Button)`
    margin:.2rem;
`;

export const GiftCardParallaxButtonWrapper = styled.div`
    
`;

export const GiftCardParallaxFirstInfo = styled(Info)`
    letter-spacing:2px;

        @media screen and (max-width: 768px) { 
            font-size:1.2rem;  
        }
`;

export const GiftCardParallaxSecondInfo = styled(Info)`
    letter-spacing:1px;
    font-size:1rem;
    padding:0 .5rem 0 .5rem;

        @media screen and (max-width: 768px) { 
            font-size:1rem;  
            margin-top:1.5rem;
        }
`;

export const GiftCardWrapper = styled(Container)`
    padding:1.5rem 0 1.5rem 0;

        @media screen and (max-width: 768px) { 
            padding:1.5rem 1rem;
        }
`;

export const GiftCardHeader = styled(Header)`
    color:#000;
    text-transform:lowercase;
    letter-spacing:5px;
    text-align:center;
`;

export const GiftCardInfo = styled(Info)`
    color:#8F2626;
    letter-spacing:0px;
    font-size:1.2rem;
    margin:1rem 0;
`;

export const GiftCardArticle = styled.article`
    text-align: center;
   padding:1rem 10rem;
    font-family: Verlag;
    font-size: 1rem;

        @media screen and (max-width: 768px) { 
            padding:0 1rem;
        }
`;

export const GiftCardText = styled.p`

`;

export const GiftCardOffers = styled.div`
    display:flex;
    width:100%;
    @media screen and (max-width: 768px) {
        flex-direction:column;
    }
`;