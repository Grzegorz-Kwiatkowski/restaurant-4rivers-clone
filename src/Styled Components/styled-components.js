import styled from "styled-components";



const Header = styled.h1`
  font-family:knockout47;
  text-transform:uppercase;
  font-weight:bold;
  color:#fff;
`;

const Info = styled.p`
  font-family: ${(props) => props.fontFamily || "Verlag"};
  font-weight: "bold";
  font-size: ${(props) => props.fontSize || "1.2em"};
  text-align: ${props => props.textAlign || "center"};
  color: ${(props) => props.color || "#fff"};
  letter-spacing: ${(props) => props.letterSpacing || "5px"};
  padding: ${(props) => props.padding || ""};
  margin:${(props) => props.margin || ""};
  text-transform:${props => props.uppercase ? "uppercase" : "none"};
  width:fit-content;

    @media screen and (max-width: 768px) { 
      font-size:.9rem;  
    }

    @media screen and (max-width: 480px) { 
      font-size:.7rem;  
      letter-spacing:2px;
  }
`;



const Alink = styled.a`
  text-decoration: "none";
  transition: 500ms;
  text-transform: uppercase;
  font-family: Verlag;
  color: ${(props) => props.color || "#fff"};
  font-size: ${(props) => props.fontSize || ""};
  letter-spacing: ${(props) => props.letterSpacing || "3px"};
  &:hover {
    color: ${props => props.colorHover || "#886735"};
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  border-radius: 3px;
  transition: 300ms;
  font-family: Verlag;
  border: none;
  letter-spacing:2px;
  background-color: ${(props) => (props.colorBeige ? "#886735" : "#ffffff")};
  color: ${(props) => (props.colorBeige ? "#ffffff" : "#886735")};
  font-size: .7em;
  padding:12px 26px 12px 26px;

    &:hover {
      background-color: ${(props) => props.hoverColorBg || "#8f2626"};
      color: ${(props) => props.hoverTextColor || "#ffffff"};
    }  

`;

const BigButton = styled(Button)`
    padding:1rem 1.7rem 1rem 1.7rem;

    @media screen and (max-width: 480px) { 
      padding:6px 16px 6px 16px;
  }
`;


const Image = styled.img`
  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.height || "50%"};
  margin:${props => props.margin || "0 0 0 0"};

    @media screen and (max-width: 480px) { 
    }
`;

const Container = styled.div`
  display: flex;
  align-items: ${props => props.alignItems || "center"};
  justify-content:${props => props.justifyContent || "center"};
  flex-direction: ${props => props.directionRow ? "row" : "column"};
  padding: ${(props) => props.padding || ""};
  height:${props => props.height || ""};
  width:${props => props.width || ""};
  margin-bottom:${props => props.marginBottom || ""};
`;


export {
  Header, Info, Alink, Button, Image, Container, BigButton
};

