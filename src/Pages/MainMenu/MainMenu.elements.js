import styled from 'styled-components'
import { Container, Info, Button, Header, Image } from '../../Styled Components/styled-components'

export const MainMenuContainer = styled.div`

`;

export const MainMenuParallaxWrapper = styled(Container)`

    height:100vh;
    padding:1.5rem;
    
        @media screen and (max-width: 768px) { 
            height:auto;
            padding:4rem 0;
        }
`;

export const MainMenuImageUnderline = styled.div`

    ::after {
        content: "";
        display: block;
        margin: 2rem auto;
        width: 50%;
        border-bottom: 2px solid white;
    }
`;

export const MainMenuParallaxInfo = styled(Info)`
    letter-spacing:2px;
    text-transform:uppercase;

        @media screen and (max-width: 768px) { 
          font-size:1.2rem;
        }
`;

export const MainMenuButton = styled(Button)`
    margin:5px;
`;

export const AllergenImage = styled(Image)`
    width:1.2rem;
    height:1.2rem;
    position:relative;
    top:-6px;
        
`;
export const AllergenListWrapper = styled.div`

`;

export const AllergenLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:1rem 0;
`;

export const AllergenText = styled.p`
  text-decoration: underline;
  color: gray;
  font-family: "PatuaOne";
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left:.5rem;
`;

export const MainMenuWrapper = styled(Container)`
    height:auto;
    padding:2rem 0;
`;

export const MainMenuHeader = styled(Header)`
    color:#000;
    letter-spacing:.2rem;
    font-size:2.2rem;
    text-transform:none;
    margin-bottom:1rem;
    font-family:Courgette;
`;