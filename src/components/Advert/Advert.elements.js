import styled from 'styled-components'
import { Header, Container, Info, Button } from '../../Styled Components/styled-components'



export const AdvertBackgroundRed = styled.div`
    width:100%;
    height:100%;
    opacity:0;
    transition-duration: 500ms;
    position: absolute;
    background-color:#7E2D31;
    z-index: -1;
`;

export const AdvertHeader = styled(Header)`
    transition-duration: 400ms;
    position: relative;
    top:45%;
    letter-spacing:3px;
    font-family:Verlag;
    font-size:1.5rem;
    opacity:0;
    
         @media screen and (max-width: 1024px) {
           top: 35%;  
           opacity:1;
        }
        @media screen and (max-width: 768px) {
            font-size:1.5rem;
         }
`;

export const AdvertInfo = styled(Info)`
    font-size:1.2rem;
    width:100%;
    font-weight:0;
    letter-spacing:2px;
    padding:0 1.5rem;
    font-family:Neuton;

    ::after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 20%;
        margin:1rem auto;
        border-bottom: 1px solid #fff;
      }
      
    @media screen and (max-width: 1024px) {
        height:100%;
    }
    @media screen and (max-width: 768px) {
        font-size:1.3rem;
    }
`;

export const AdvertContent = styled(Container)`
   
    position: relative;
    top:450px;
    transition-duration: 400ms;
    opacity:0;
    overflow: hidden;
    margin-top:2rem;

        @media screen and (max-width: 1024px) {
            height: 50%;
            opacity: 1;
            top: 6.5rem;
           margin:0;
        }

        @media screen and (max-width: 768px) {
            padding:0 2rem;
        }
`;

export const AdvertLink = styled.a`
    width:100%;
    height:100%;

    &:hover {
        text-decoration:none;
    }
`;

export const AdvertButton = styled(Button)`
    @media screen and (max-width: 1024px) {
       display:none;
    }
`;


export const AdvertContainer = styled.div`
    width:33.3%;
    height:20rem;
    background:linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2) ),url(${({ background }) => (background)});
    background-position: center;
    background-size: 100% 100%;
    transition: all 500ms ease-in;
    position: relative;
    opacity: 0.9;
    text-align: center; 
   

        &:hover {
            background-size: 115% 115%;  
        }
        &:hover ${AdvertHeader} {
            top: 35%;
            opacity:1;
        }
        &:hover ${AdvertBackgroundRed} {
            opacity: 0.9;
        }
        &:hover ${AdvertContent} {
            height: 50%;
            opacity: 1;
            top: 75px;

            @media screen and (max-width: 1024px) {
              top:6.5rem;
            }
        }

        @media screen and (max-width: 768px) {
            width:100%;
            height:20rem;
        }
       
`;