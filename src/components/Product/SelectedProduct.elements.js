import styled from 'styled-components'
import { Header, Info, Button, Container } from '../../Styled Components/styled-components'

export const SelectedProductContainer = styled(Container)`
    padding:5rem 0;

        @media screen and (max-width: 768px) { 
           padding:1rem 0;
        }
`;
export const SelectedProductWrapper = styled.div`
    display: flex;
    width: 90%;
    height: auto;

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