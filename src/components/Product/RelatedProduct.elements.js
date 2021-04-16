import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Header, Info } from '../../Styled Components/styled-components'

export const RelatedProductContainer = styled.div`

`;

export const RelatedProductWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
    width: auto;
    padding: .5rem;

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