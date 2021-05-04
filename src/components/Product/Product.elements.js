import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header, Container, Info, Button } from '../../Styled Components/styled-components'



export const ProductBackgroundRed = styled.div`
    width:100%;
    height:100%;
    opacity:0;
    transition-duration: 500ms;
    position: absolute;
    background-color:#762223;
    z-index: -1;
`;

export const ProductHeader = styled(Header)`
    transition-duration: 700ms;
    position: relative;
    top:45%;
    letter-spacing:3px;
    font-family:Verlag;
    font-size:1.5rem;
   
        @media screen and (max-width: 1024px) {
           top: 30%;  
        }
        @media screen and (max-width: 768px) {
            font-size:1.5rem;
         }
`;

export const ProductInfo = styled(Info)`
    font-size:1.1rem;
    width:100%;
    font-weight:0;
    letter-spacing:2px;
    padding:0 1rem;
    
        ::after {
            content: "";
            display: block;
            width: 20%;
            margin 1rem auto;
            border-bottom: 1px solid white;
        }

            @media screen and (max-width: 1024px) {
                height:100%;
            }
            @media screen and (max-width: 768px) {
                font-size:1.3rem;
            }
`;

export const ProductContent = styled(Container)`
    box-sizing:border-box;
    position: relative;
    top:250px;
    transition-duration: 700ms;
    opacity:0;
    overflow: hidden;
    margin-top:1.5rem;
 
        @media screen and (max-width: 1024px) {
            height: 99%;
            opacity: 1;
            top: -9%;
            padding-top:8rem;
        }
`;

export const ProductLink = styled(Link)`
    width:100%;
    height:100%;

        &:hover {
            text-decoration:none;
        }

        @media screen and (max-width: 1024px) {
            position:absolute;
            top:0;
            left:0;
        }
`;

export const ProductButton = styled(Button)`

        @media screen and (max-width: 1024px) {
            display:none;
        }
`;


export const ProductContainer = styled.div`
    width:33.3%;
    height:20rem;
    background:linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url(${({ background }) => (background)});
    background-position: center;
    background-size: 100% 100%;
    transition: all 300ms ease-in;
    position: relative;
    opacity: 0.9;
    text-align: center; 
   

        &:hover {
            background-size: 110% 110%;  
        }
        &:hover ${ProductHeader} {
            top: 30%;
        }
        &:hover ${ProductBackgroundRed} {
            opacity: 0.7;
        }
        &:hover ${ProductContent} {
            height: auto;
            opacity: 1;
            top: 4.8rem;

            @media screen and (max-width: 1024px) {
                height: 99%;
                opacity: 1;
                top: -9%;
                padding-top:8rem;
            }
        }
    
        @media screen and (max-width: 768px) {
            width:50%;
            height:20rem;
        }

        @media screen and (max-width: 480px) { 
            width:100%;
        }
`;