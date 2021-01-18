import styled from 'styled-components'

const Header = styled.h1`
  color:${props => props.color || "#fff"};
  font-size: ${props => props.fontSize || "3em"};
  letter-spacing: ${props => props.letterSpacing || "3px"};
  font-family: ${props => props.fontFamily || "knockout47"};
  text-transform:${props => props.smallLetter ? "lowercase" : "uppercase"};
  text-align:center;
  margin-top:${props => props.marginTop || "15px"};
  margin-bottom:${props => props.marginBottom || "15px"};
  margin-left:${props => props.marginLeft || "0px"};
  margin-right:${props => props.marginRight || "0px"};
  padding-left:${props => props.paddingLeft || "0px"};
  padding-right:${props => props.paddingRight || "0px"};
  font-weight:${props => props.fontBold ? "bold" : "none"};
`;

const Info = styled.p`
 font-family:${props => props.fontFamily || "Verlag"};
 font-weight: "bold";
  font-size:${props => props.fontSize || "1.2em"};
  text-transform:${props => props.smallLetter ? "lowercase" : "uppercase"};
  text-align: center;
  color:${props => props.color || "#fff"};
  margin-top:${props => props.marginTop || "25px"};
  margin-bottom:${props => props.marginBottom || "25px"};
  letter-spacing:${props => props.ls || "5px"};
  padding-left:${props => props.paddingLeft || "0px"};
  padding-right:${props => props.paddingRight || "0px"};  
`;


const Alink = styled.a`
 text-decoration:"none";
 transition: 500ms;
 text-transform: uppercase;
 font-family: Verlag;
 color:${props => props.color || "#fff"};
 font-size: ${props => props.fontSize || ""};
 letter-spacing: ${props => props.letterSpacing || "3px"};
&:hover {
  color: #886735;
}
`;

const Button = styled.button`
text-transform:uppercase;
border-radius:5px;
transition: 300ms;
font-family: Verlag;
border: none;
letter-spacing: 4px;
margin-bottom:${props => props.marginBottom || "40px"};
margin-top:${props => props.marginTop || "15px"};
margin-right:${props => props.marginRight || "25px"};
background-color:${props => props.colorBeige ? "#886735" : "#ffffff"};
color:${props => props.colorBeige ? "#ffffff" : "#886735"};

padding:${props => props.paddingLower ? "10px 18px 10px 18px" : "20px 35px 20px 35px"};
font-size:${props => props.fontLower ? ".6em" : ".9em"};


&:hover {
    background-color:${props => props.hoverColorBg || "#8f2626"};
  color:${props => props.hoverTextColor || "#ffffff"};
}
`;

const Image = styled.img`
width:${props => props.width || "50%"};
height:${props => props.height || "50%"};
margin-right:${props => props.marginRight || ""};
margin-top:${props => props.marginTop || "25px"};
margin-bottom:${props => props.marginBottom || "25px"};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding:${props => props.padding || ""};
`;

export { Header, Info, Alink, Button, Image, Container }