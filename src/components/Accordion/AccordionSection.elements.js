import styled, { keyframes } from 'styled-components'


export const AccordionSectionContainer = styled.div`

`;

export const AccordionSectionWhiteBackground = styled.div`
    width: 100%;
    height: 100%;
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    transition-duration: 1s;
    position: absolute;
    background-color: #fff;
    z-index: 0;
`;

export const AccordionSectionLabel = styled.h1`
    color: ${({ isOpen }) => (isOpen ? "#fff" : "#000")};;
    font-family: "knockout47";
    letter-spacing: 5px;
    font-size: 3em;
    text-transform: uppercase;
    z-index: 10;
    transition-duration: 700ms;
    grid-area: label;
    padding-top: 5%;
    padding-left: 10vw;
   
        @media screen and (max-width: 768px) { 
           padding:0;
        }
`;

export const AccordionSectionIconWrapper = styled.div`
    z-index: 999;
    width: auto;
    grid-area: icon;
    padding-top: 12vh;

        @media screen and (max-width: 768px) { 
            padding:0; 
            width:100%;
        }
`;

const rotateRightAnimation = keyframes`
    100% {
        transform: rotate(135deg);
    }
`;

const rotateLeftAnimation = keyframes`
    0% {
        transform: rotate(135deg);
    }

    100% {
        transform: rotate(0deg);
    }
`;

export const AccordionSectionIcon = styled.div`
    animation-name:${({ isOpen }) => (isOpen ? rotateRightAnimation : rotateLeftAnimation)}; 
    animation-duration:1s;
    animation-direction:normal;
    animation-fill-mode: forwards;
    width:fit-content;
    height:fit-content;
`;

export const AccordionSectionContent = styled.div`
    background: white;
    height:${({ isOpen }) => (isOpen ? "initial" : "0px")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};;
    transition-duration: 1s;
    transition-property: all;
`;


export const AccordionSectionWrapper = styled.div`
    min-height: 30vh;
    width: 100%;
    border-top: .5px solid lightgray;
    border-bottom: .5px solid lightgray;
    background-image: url(${({ background }) => (background)});
    background-position-y: ${({ isOpen }) => (isOpen ? "-60px" : "center")};
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: ${({ isOpen }) => (isOpen ? "120%" : "100%")};
    transition-duration: 1s;
    transition-timing-function: ease;
    position: relative;
    opacity: 0.9;
    text-align: center;
    z-index: 0;
    cursor: pointer;

    display: grid;
    grid-template-columns: 90vw 10vw;
    grid-template-rows: auto;
    grid-template-areas: "label icon";

        :hover {
            background-position-y: -60px;

            ${AccordionSectionWhiteBackground} {
                transition-duration: 1s;
                opacity: 0;
            }
            ${AccordionSectionLabel} {
                color:#fff;
            }
        }

        @media screen and (max-width: 768px) { 
             display:flex;
             align-items:center;
             justify-content:center;
             flex-direction:column;
             min-height:auto;
             background-size:150% 170%;
             background-position-y: 0px;
             transition-duration: 1.5s;
             padding: 1rem 0;
             background-size: ${({ isOpen }) => (isOpen ? "170% 190% " : "150% 170%")};
             
                :hover {
                    background-position-y:${({ isOpen }) => (isOpen ? "0px" : "-70px")}; ;
                }
`;