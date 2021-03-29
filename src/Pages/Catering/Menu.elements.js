import styled from 'styled-components'
import { Button, Container, Info, Header } from '../../Styled Components/styled-components'

export const MenuContainer = styled.div`

`;

export const MenuWrapper = styled(Container)`
    padding:4rem 0;

`;

export const MenuWrapperUnderline = styled(Container)`
    padding:2rem 11rem 2rem 11rem;

        ::after {
            content: "";
            display: block;
            margin: 2rem 0 0 0;
            width: 100%;
            border-bottom: 2px solid #808080;
        }

        @media screen and (max-width: 768px) {
            padding:2rem 5rem;
         }
         @media screen and (max-width: 768px) { 
            padding:2rem 2rem;  
        }

`;

export const MenuButton = styled(Button)`
    margin:.3rem;
`;

export const MenuParallaxInfo = styled(Info)`
    letter-spacing:1px;
    font-size:1.1rem;
    text-transform:uppercase;
`;

export const MenuInfo = styled(Info)`
    font-family:PatuaOne;
    letter-spacing:1px;
    color:#8F2626;
    font-size:1.5rem;
    font-weight:bold;
    text-transform:uppercase;
    margin:1rem 0 1.5rem 0;

        @media screen and (max-width: 480px) { 
            font-size:1.2rem;  
        }
`;


export const MenuContent = styled.p`
    font-family:PatuaOne;
    letter-spacing:1px;
    color:#000;
    font-size:1.1rem;
    text-align:center;

         
    @media screen and (max-width: 768px) { 
        font-size:1.2rem;  
    }
  
`;

export const MenuHeaderUnderline = styled(Header)`
        font-size:5rem;
        letter-spacing:12px;
        text-align:center;
        &::after {
            content: "";
            display: block;
            margin: 1.5rem auto;
            width: 20%;
            border-bottom: 2px solid white;
          }
          
      
`;

export const MenuHeader = styled(Header)`
        font-family:PatuaOne;
        font-size:2.2em;
        color:#000;
        text-transform:lowercase;
        text-align:center;
          &:first-letter {
              text-transform:uppercase;
          }
`;