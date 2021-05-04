import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Header, Info, Image } from '../../Styled Components/styled-components'

const fadeInAnimation = keyframes`
    0% {
        opacity:0;
        }
    100% { 
        opacity:1;  
        }
`

export const RelatedProductContainer = styled.div`
    padding: .5rem;
    animation-name: ${fadeInAnimation};
    animation-duration: 1.5s;
`;

export const RelatedProductWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
    width: auto;
    

        @media screen and (max-width: 768px) { 
            padding: .8rem 1.2rem;
        }
`;

export const RelatedProductHeader = styled(Header)`
    color:#8F2626;
    font-size:1rem;
    font-family:PatuaOne;
    margin-top:1rem;
    text-align:center;

        @media screen and (max-width: 768px) { 
        font-size:1.8rem;
        }
`;

export const RelatedProductInfo = styled(Info)`
    color:#000;
    font-family:PatuaOne;
    font-size:1rem;

        @media screen and (max-width: 768px) { 
            font-size:1.5rem;
        }
`;

export const RelatedProductLink = styled(Link)`

        :hover {
            text-decoration:none;
        }
`;

const wobble = keyframes`
  25% {
    transform: rotate(4deg);
  }
  50% {
    transform: rotate(-8deg);
  }
  75% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

export const RelatedProductImage = styled(Image)`
    width:100%;

    :hover {
        animation-name: ${wobble};
        animation-duration: .5s;
        }
`;