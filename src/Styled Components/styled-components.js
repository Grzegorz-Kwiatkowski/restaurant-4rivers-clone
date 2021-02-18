import styled from "styled-components";

const Header = styled.h1`
  color: ${(props) => props.color || "#fff"};
  font-size: ${(props) => props.fontSize || "3em"};
  letter-spacing: ${(props) => props.letterSpacing || "3px"};
  font-family: ${(props) => props.fontFamily || "knockout47"};
  text-transform: ${(props) => (props.smallLetter ? "none" : "uppercase")};
  text-align: center;
  margin-top: ${(props) => props.marginTop || "15px"};
  margin-bottom: ${(props) => props.marginBottom || "15px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};
  padding-left: ${(props) => props.paddingLeft || "0px"};
  padding-right: ${(props) => props.paddingRight || "0px"};
  font-weight: ${(props) => (props.fontBold ? "bold" : "none")};
  &:hover {
    color:${props => props.colorHover || ""}
  }
`;

const Info = styled.p`
  font-family: ${(props) => props.fontFamily || "Verlag"};
  font-weight: "bold";
  font-size: ${(props) => props.fontSize || "1.2em"};
  text-transform: ${(props) => (props.smallLetter ? "none" : "uppercase")};
  text-align: ${props => props.textAlign || "center"};
  color: ${(props) => props.color || "#fff"};
  margin-top: ${(props) => props.marginTop || "25px"};
  margin-bottom: ${(props) => props.marginBottom || "25px"};
  letter-spacing: ${(props) => props.letterSpacing || "5px"};
  padding: ${(props) => props.padding || ""};
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
    color: #886735;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  border-radius: 3px;
  transition: 300ms;
  font-family: Verlag;
  border: none;
  letter-spacing: 4px;
  width:${props => props.width || ""};
  margin-bottom: ${(props) => props.marginBottom || "10px"};
  margin-top: ${(props) => props.marginTop || ""};
  margin-right: ${(props) => props.marginRight || ""};
  background-color: ${(props) => (props.colorBeige ? "#886735" : "#ffffff")};
  color: ${(props) => (props.colorBeige ? "#ffffff" : "#886735")};

  padding: ${(props) =>
    props.paddingBigger ? "20px 35px 20px 35px" : "12px 20px 12px 20px"};
  font-size: ${(props) => (props.fontBig ? ".9em" : ".7em")};

  &:hover {
    background-color: ${(props) => props.hoverColorBg || "#8f2626"};
    color: ${(props) => props.hoverTextColor || "#ffffff"};
  }
`;

const Image = styled.img`
  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.height || "50%"};
  margin-right: ${(props) => props.marginRight || ""};
  margin-top: ${(props) => props.marginTop || "25px"};
  margin-bottom: ${(props) => props.marginBottom || "25px"};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${(props) => props.padding || ""};
  height:${props => props.height || ""};
  width:${props => props.width || ""};
`;


export { Header, Info, Alink, Button, Image, Container };
