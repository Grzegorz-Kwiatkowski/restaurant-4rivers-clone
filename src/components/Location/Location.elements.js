import styled from 'styled-components'
import { Header, Container, Info, Button } from '../../Styled Components/styled-components'



export const LocationBackgroundRed = styled.div`
    width:100%;
    height:100%;
    opacity:0;
    transition-duration: 500ms;
    position: absolute;
    background-color:#7E2D31;
    z-index: -1;
`;

export const LocationHeader = styled(Header)`
    transition-duration: 400ms;
    position: relative;
    top:45%;
    letter-spacing:5px;
    font-family:Verlag;
    font-size:1.5rem;
        @media screen and (max-width: 1024px) {
            top: 30%;  
        }
`;

export const LocationInfo = styled(Info)`
    font-size:.8rem;
    margin:.5rem 0;
    width:100%;
    font-weight:0;
    @media screen and (max-width: 768px) {
        font-size:1.2rem;
    }
`;

export const LocationContent = styled(Container)`
    box-sizing:border-box;
    height:0%;
    position: relative;
    top:400px;
    transition-duration: 400ms;
    opacity:0;
    overflow: hidden;
   
        @media screen and (max-width: 1024px) {
            height: 99%;
            opacity: 1;
            top: -9%;
        }
`;

export const LocationUnderline = styled.div`
    &::after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 20%;
        margin-top: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid white;
    }

    @media screen and (max-width: 1024px) {
        &::after {
            content: "";
            display: none;
        }
     }
`;

export const LocationLink = styled.a`

    @media screen and (max-width: 1024px) {
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
    }
`;

export const LocationButton = styled(Button)`
    @media screen and (max-width: 1024px) {
       display:none;
    }
`;

export const LocationWrapper = styled(Container)`
    padding:0px 20px 0px 20px;
    height: 0%;
    position: relative;
    top: 400px;
    transition-duration: 400ms;
    opacity: 0;
    overflow: hidden;
`;

export const LocationContainer = styled.div`
    width:33%;
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
        &:hover ${LocationHeader} {
            top: 25%;

            @media screen and (max-width: 1024px) {
                top: 30%;  
            }
        }
        &:hover ${LocationBackgroundRed} {
            opacity: 0.9;
        }
        &:hover ${LocationContent} {
            height: 90%;
            opacity: 1;
            top: 0;

            @media screen and (max-width: 1024px) {
                height: 99%;
                opacity: 1;
                top: -9%;
            }
        }
        @media screen and (max-width: 1024px) {
            width:50%;
        }
        @media screen and (max-width: 768px) {
            width:100%;
            height:25rem;
        }
`;