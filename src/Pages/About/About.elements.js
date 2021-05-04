import styled from 'styled-components'
import { Container, Image, Info, Header, Button } from '../../Styled Components/styled-components'

export const AboutContainer = styled(Container)`

`;

export const AboutParallaxWrapper = styled(Container)`
    height:100vh;
    width:100vw;
`;

export const AboutParallaxImage = styled(Image)`
    height:4rem;

        @media screen and (max-width: 768px) { 
            width:80%;          
        }
`;

export const AboutParallaxInfo = styled(Info)`
    text-transform:uppercase;
    margin:1rem 0;
    letter-spacing:1px;

        @media screen and (max-width: 768px) { 
           font-size:1.2rem;
           margin-top:1.5rem;
        }
`;

export const AboutWrapper = styled.div`
    width:70%;

        @media screen and (max-width: 768px) { 
            width:90%;  
        }
`;

export const AboutArticle = styled.div`
    margin:.5rem 0;
    padding:2rem 0;
    text-align:center;
`;

export const AboutHeader = styled(Header)`
    font-family:PatuaOne;
    color:#000;
    font-size:1.7rem;
    text-transform:none;
`;

export const AboutInfo = styled(Info)`
    font-family:Courgette;  
    color:#000;
    letter-spacing:1px;
    font-size:1.6rem;
    text-align:center;
    width:100%;
`;

export const AboutContent = styled.div`
    margin:1.5rem 5rem 1rem 5rem;

    @media screen and (max-width: 768px) { 
        margin:1.5rem 2.5rem 1rem 2.5rem;
      }
`;

export const AboutText = styled.p`
    font-size:.8rem;
    text-align:left;

    @media screen and (max-width: 768px) { 
        font-size:1.1rem;
      }
`;

export const AboutButton = styled(Button)`
    
`;

export const AboutParallaxFunFactWrapper = styled(Container)`
    height:auto;
    width:100%;
    padding:3rem 0;
`;

export const AboutParallaxFunFactTitle = styled.h2`
    font-family:Verlag;
    font-size:1.1rem;
    text-transform:uppercase;
    color:#fff;
`;

export const AboutParallaxFunFactContent = styled.div`
    text-align:center;
    color:#fff;
    width:60%;
    font-family:Neuton;
    letter-spacing:1px;
    font-size:1.2rem;
`;

export const AboutParallaxAwards = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const AboutImage = styled(Image)`
    width:25%;
    height:10%;
    margin:.7rem;

    &:nth-child(n+2) {
        width:12%;
        height:10%;
    }
`;

export const AboutAdverts = styled.div`
    display:flex;
    width:100%;

    @media screen and (max-width: 768px) {
        flex-direction:column;
    }
`;

export const AboutVideo = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;

export const AboutVideoWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
`;