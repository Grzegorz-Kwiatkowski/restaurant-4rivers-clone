import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Header, Container, Info, Button } from '../../Styled Components/styled-components'



export const GiftBackgroundRed = styled.div`
    width:100%;
    height:100%;
    opacity:0;
    transition-duration: 500ms;
    position: absolute;
    background-color:#7E2D31;
    z-index: -1;
`;

export const GiftHeader = styled(Header)`
    transition-duration: 400ms;
    position: relative;
    top:45%;
    letter-spacing:3px;
    font-family:Verlag;
    font-size:1.1rem;

         @media screen and (max-width: 1024px) {
           top: 25%;  
        }
        @media screen and (max-width: 768px) {
            font-size:1.5rem;
         }
`;

export const GiftInfo = styled(Info)`
    font-size:.8rem;
    width:100%;
    font-weight:0;
    letter-spacing:2px;
    padding:0 1rem;

    @media screen and (max-width: 1024px) {
        height:100%;
    }
    @media screen and (max-width: 768px) {
        font-size:1.3rem;
    }
`;

export const GiftContent = styled(Container)`
    box-sizing:border-box;
    position: relative;
    top:400px;
    transition-duration: 400ms;
    opacity:0;
    overflow: hidden;
  

        @media screen and (max-width: 1024px) {
            height: 99%;
            opacity: 1;
            top: -9%;
            padding-top:7rem;
        }

        @media screen and (max-width: 768px) {
            // padding:0 2rem;
        }
`;

export const GiftLink = styled(Link)`
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

export const GiftButton = styled(Button)`
    @media screen and (max-width: 1024px) {
       display:none;
    }
`;


export const GiftContainer = styled.div`
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
        &:hover ${GiftHeader} {
            top: 25%;
        }
        &:hover ${GiftBackgroundRed} {
            opacity: 0.9;
        }
        &:hover ${GiftContent} {
            height: 50%;
            opacity: 1;
            top: 6rem;

            @media screen and (max-width: 1024px) {
                height: 99%;
                opacity: 1;
                top: -9%;
            }
        }
        @media screen and (max-width: 768px) {
         
     
        }
        @media screen and (max-width: 768px) {
            width:100%;
            height:20rem;
        }
       
`;