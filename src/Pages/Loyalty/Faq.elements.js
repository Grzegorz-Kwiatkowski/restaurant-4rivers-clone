import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Container, Header } from '../../Styled Components/styled-components'

export const FaqContainer = styled.div`

`;

export const FaqParallaxWrapper = styled(Container)`
    padding:2rem;
`;

export const FaqParallaxHeader = styled(Header)`
    font-size:2rem;
    letter-spacing:.6rem;
`;

export const FaqWrapper = styled(Container)`

`;

export const FaqSection = styled.div`
    width: 70%;
    font-family: "PatuaOne";
    margin-bottom: 30px;
`;

export const FaqSectionUnderline = styled(FaqSection)`
   
        ::after {
            content: "";
            display: block;
            margin: 0 auto;
            width: 100%;
            padding-top: 50px;
            border-bottom: 1px solid #808080;
        }
`;

export const FaqHeader = styled(Header)`
        color:#000;
        font-family:PatuaOne;
`;

export const FaqTitle = styled.h2`
    font-size: 1.7em;
    margin-bottom: 30px;
    margin-top: 60px;
    letter-spacing: 2px;
    font-weight: bold;
`;

export const FaqText = styled.p`

`;

export const FaqList = styled.ul`
    padding:0;
`;

export const FaqListItem = styled.li`
    list-style-type: none;
  
    ::before {
        content: '';
        display: inline-block;
        height: 15px;
        width: 15px;
        background-size: 15px;
        background-image: url('../../img/arrow_right.png');
        background-repeat: no-repeat;
        margin-right: 10px;
        background-position: center center;
        vertical-align: middle;
    }
`;

export const FaqLink = styled.a`
    color: #873431;
    text-decoration: underline;
    font-family: "PatuaOne";
    text-transform: uppercase;
    letter-spacing:2px;
        :hover {
            color: #873431;
        }
`;