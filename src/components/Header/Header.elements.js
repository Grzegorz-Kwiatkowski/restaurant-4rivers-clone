import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Image } from "../../Styled Components/styled-components"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from 'framer-motion';



export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 50px;
    position: sticky;
    top: 0;
    left:0;
    background-color: #141414;
    color: white;
    z-index: 999;

        @media screen and (max-width: 768px) {
        justify-content:space-between;
        padding-left:1rem;
        padding-right:1rem;
        }
`;

export const HeaderLogoWrapper = styled.div`
    display: flex;
    align-items: center;

        @media screen and (max-width: 768px) {
            width:3rem;
        }
`;

export const HeaderLogoImg = styled(Image)`
    width:1.5rem;
    height:1.5rem;

        @media screen and (max-width: 768px) {
            width:100%;
            height:auto;
        }
        
    
`;

export const HeaderFullLogoImg = styled(Image)`
    width:9rem;
    height:.8rem;

        @media screen and (max-width: 1024px) {
            display:none;
        }
`;


export const HeaderNav = styled(motion.nav)`
height: 100%;

    @media screen and (max-width: 768px) {
        position:fixed;
        top:${({ click }) => (click ? '50px' : '-100vh')};
        left:0;
        opacity:${({ click }) => (click ? '1' : '0')};
        width:100%;
        height:100%;
        transition-duration:1.5s;
        transition-timing-function: ease;
        background-color:#141414;
        z-index:-1;
    }
}
`;

export const HeaderAlink = styled.a`
    color: #756f65;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Verlag;
    border-left: 2px solid #886735;
    padding:${props => props.padding || ""};

        &:hover {
            color: #a37c3d;
            text-decoration:none;
        }
    `;


export const HeaderLink = styled(Link)`
    color: #756f65;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Verlag;

        &:hover {
            color: #a37c3d;
            text-decoration:none;
        }
`;

export const HeaderListItem = styled.li`
    display: flex;
    align-items: center;
   
        ${HeaderLink},${HeaderAlink} {
            font-size:.7rem; 
            padding:0 .5rem;
        }
        
            @media screen and (max-width: 768px) {
            
                &:nth-child(n+2) {
                    border-top: thin solid #604d2d;
                }
            
                :hover ${HeaderLink},
                :hover ${HeaderAlink} {
                    color:#a37c3d;
                }
            
                    ${HeaderLink},${HeaderAlink} {
                        font-size:1.2rem;
                        padding:10px 0;
                        width:100vw;
                        text-align:center;
                    }
            }
`;

export const HeaderList = styled(motion.ul)`
    display: flex;
    list-style-type: none;
    height: 100%;
    padding:0;

        ${HeaderListItem}:nth-child(n+2) ${HeaderLink},
        ${HeaderListItem}:not(:last-child) ${HeaderAlink}
        {
            border-left: 1px solid #886735;
            height:.9rem;
        }

        @media screen and (max-width: 768px) {
            display:flex;
            flex-direction:column;
            padding-top:15px;
          
                ${HeaderListItem}:nth-child(n+1) ${HeaderLink},
                ${HeaderListItem}:not(:last-child) ${HeaderAlink} {
                   border:none;
                    height:100%;
                    }
        }
`;


export const OrderBtnWrapper = styled.div`
    background-color: #886735;
    color: #dacfbf;
    display: flex;
    align-items: center;
    text-decoration: none;
    width:100%;
    height:100%;
    cursor:pointer;
    padding:0px .7rem;
    font-size:.7rem;
    font-weight:bold;
    letter-spacing:2px;

        
        @media screen and (max-width: 768px) {
            display:flex;
            justify-content:center;
            font-size:1.2rem;
            padding:10px 0;
            width:100vw;
        }
`;

export const BasketWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction:${props => props.column ? "column" : "row"};

        @media screen and (max-width: 768px) {
            flex-direction:row-reverse;

        }
`;

export const BasketLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #fff;

    &:hover {
        text-decoration:none;
        color: #fff;
    }
`;

export const BasketCartText = styled.div`
    margin-right: .5rem;
    display: flex;
    align-items: center;
    font-size:1.1rem;
    font-weight:bold;
    font-family:Verlag;
    letter-spacing:2px;
    color:#756f65;

        @media screen and (max-width: 768px) {
            display:none;
           
        }
    `;

export const BasketCountText = styled.div`
    width: 1.1rem;
    height: 1rem;
    background-color: #90887c;
    text-align: center;
    font-size: .7rem;
    border-radius:3px;

        @media screen and (max-width: 768px) {
            width: 1.4rem;
            height: 1.3rem;
            font-size:1rem;
            
        }

`;

export const BasketIcon = styled(AiOutlineShoppingCart)`
    color:#a37c3d;
    width:1.5rem;
    height:1.5rem;

        @media screen and (max-width: 768px) {
            width:1.8rem;
            height:1.8rem;
            margin-right:10px;
        }  
`;

export const MobileIcon = styled.div`
  display:none;
  
    @media screen and (max-width: 768px) {
        display:block;
    }
`;