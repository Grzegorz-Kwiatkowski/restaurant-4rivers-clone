import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    flex-direction: column;
    
`;

export const FooterSiteMap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #1c1c1c;
    padding:1rem;   
        @media screen and (max-width: 768px) { 
            width:100vw;
            display:flex;
            align-items:center;
            flex-direction:column;   
            padding:1rem;
        }
`;

export const FooterSection = styled.div`
    box-sizing:border-box;
    padding:.1rem;
    width:auto;
        &:not(:last-child()) {
            margin-top:10px;
        }
   
       
        @media screen and (max-width: 768px) { 
                width:80%;
                padding:0;
                display:flex;
                justify-content:center;
        }
            
`;

export const FooterLogoWrapper = styled.div`
    height: 13rem;
    width: 11rem;
        @media screen and (max-width: 1024px) {
            display:none;
        }
`;

export const FooterLink = styled(Link)`
    text-transform:${props => props.lowercase ? "lowercase" : "uppercase"};
    transition: 500ms;
    color:${props => props.white ? "#fff" : "#8d8d8d"};    
    text-decoration:${props => props.underline ? "underline" : "none"};
        &:hover {
            text-decoration:${props => props.underline ? "underline" : "none"};
            color:${props => props.white ? "#fff" : "#866535"};
            }
`;

export const FooterALink = styled(FooterLink)`
`;

export const FooterImageLogo = styled.div`
    background-image: url(${({ image }) => (image)});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    transition: 500ms;
    display: flex;
    align-items: center;
    text-align: center;
        &:hover {
            background-size: 120%;
        }
`;

export const FooterText = styled.p`
    color: "#ffffff"; 
    font-family: "Sansita Swashed", cursive;
    font-size: 1.4rem;
`;


export const FooterHeader = styled.h2`
    color: #ffffff;
    font-family: Verlag;
    text-transform: uppercase;
    font-size: 1rem;
    padding-left:.9rem;

     :nth-last-child(3) {
         padding:0;
     }
    

   
        @media screen and (max-width: 768px) { 
            display:none;
        }
    
`;

export const FooterList = styled.ul`
    list-style-image: url(${({ image }) => (image)});
        
        @media screen and (max-width: 768px) { 
            list-style-image:none;
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            padding:0;
        }
`;

export const FooterListItem = styled.li`
    list-style-type: none;
    
        ${FooterLink} {
            font-size:.7rem;
            font-weight:bold;
            letter-spacing:1px;
        }

            @media screen and (max-width: 480px) { 
                margin:.2rem .5rem;
                
                ${FooterLink} {
                    font-size:.6rem;
                }
            }

            @media screen and (max-width: 768px) { 
                margin:.3rem .8rem;
               
                ${FooterLink} {
                    font-size:.8rem;
                }
            }
`;

export const FooterSocialMediaWrapper = styled.div`
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 70px;
        @media screen and (max-width: 768px) { 
          flex-direction:column-reverse;
          padding:10px 0;
        }
`;

export const FooterCopyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FooterSocialIcons = styled.div`
    @media screen and (max-width: 768px) { 
        margin-bottom:10px;
    }
`;

export const FooterSocialText = styled.p`
        color:#808080;
        font-size:.7rem;
        margin:auto 0;
        letter-spacing:2px;
    
`;

export const FooterContactWrapper = styled.div`
    @media screen and (max-width: 768px) { 
        display:none;
    }
`;

export const FooterContactText = styled.p`
    font-size:.8rem;
    margin-bottom:10px;
    color: #7f7f7f;
    font-weight:bold;
    letter-spacing:1px;
`;

export const FooterContactButton = styled.button`
    background-color: #886735;
    width:7rem;
    height: 2rem;
    text-transform: uppercase;
    color: #fff;
    font-size: 0.7rem;
    border-radius: 3px;
    font-family: Verlag;
    border: none;
    transition: 300ms;

        :hover {
            background-color: #fff;
            color: #886735;
        }

        @media screen and (max-width: 768px) { 
            background-color:#1C1C1C;
            font-weight:bold;
            letter-spacing:1px;
            width:auto;
            color:#8d8d8d;
           
                :hover {
                    background-color:#1C1C1C;
                    color:#A37C3D;   
            }
        }
`;