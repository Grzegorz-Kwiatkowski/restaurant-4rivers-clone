import styled, { keyframes } from 'styled-components'
import { Header, Info, Button, Container } from '../../Styled Components/styled-components'

const opacityAnimation = keyframes`
    0% { 
        opacity:0;
        }
    100% { 
        opacity:1;
        }
`

export const SelectedProductContainer = styled(Container)`
    padding:2.5rem 0 5rem 0;
    animation-name: ${opacityAnimation};
    animation-duration: 2s;
        @media screen and (max-width: 768px) { 
           padding:1rem 0;
        }
`;

const scaleAnimation = keyframes`
    0% { 
        transform:scale(0) rotateZ(0deg);
        }
    100% {
        transform:scale(1) rotateZ(360deg);
    }
`;

export const SelectedProductWrapper = styled.div`
    display: flex;
    width: 90%;
    height: auto;
    animation-name: ${({ clicked }) => (clicked && scaleAnimation)};
    animation-duration: 1.5s;

        @media screen and (max-width: 768px) { 
            flex-direction:column;
        }
`;

export const SelectedProductImage = styled.div`
    overflow: hidden;

        @media screen and (max-width: 1200px) { 
            width:50%;
            height:100%;
        }
        @media screen and (max-width: 768px) { 
            width:100%;
            height:100%;
        }
`;

export const SelectedProductContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    padding: 0 1.5rem;
    justify-content: flex-start;
    align-items: flex-start;

        @media screen and (max-width: 1200px) {
            padding: 0 1.5rem;
        }
        @media screen and (max-width: 768px) { 
            padding: 1rem .5rem 0 .5rem;
            width:100%;
        }
`;

export const SelectedProductHeader = styled(Header)`
    color:#8F2626;
    letter-spacing:2px;
    font-size:2.5rem;    
`;

export const SelectedProductInfo = styled(Info)`
    color:#000;
    font-size:1.5rem;
`;

export const SelectedProductContent = styled(Info)`
    color:#000;
    font-size:1rem;
    text-align:left;
    font-family:PatuaOne;
    letter-spacing:2px;

        @media screen and (max-width: 768px) { 
            letter-spacing:1px;
            font-size:1.2rem;
        }
`;

export const SelectedProductButton = styled(Button)`

`;


export const RelatedProducts = styled.div`
    display: flex;
    flex-direction: row;
    width:90%;
   
        @media screen and (max-width: 768px) { 
            flex-direction:column;
        }
`;




export const RelatedProductsHeaderWrapper = styled(Container)`
    padding:35px 0;
    width:80%;

        ::before {
            content: "";
            display: block;
            margin: 0 auto;
            width: 100%;
            padding-top: 20px;
            border-bottom: 1px solid #808080;
        }
`;

export const RelatedProductsHeader = styled(Header)`
    color:#000;
    font-family:PatuaOne;
    margin:1rem;

        @media screen and (max-width: 768px) { 
            font-size:2rem;
        }
`;