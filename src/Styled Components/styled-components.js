import styled from "styled-components";
import { BiWindow } from "react-icons/bi";

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
  width:fit-content;
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
  margin-left:${props => props.marginLeft || ""};
  letter-spacing: ${(props) => props.letterSpacing || "5px"};
  padding: ${(props) => props.padding || ""};
  width:fit-content;
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
  letter-spacing: 4px;
  width:${props => props.width || ""};
  height:${props => props.height || ""};
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
  align-items: ${props => props.alignItems || "center"};
  justify-content:${props => props.justifyContent || "center"};
  flex-direction: ${props => props.directionRow ? "row" : "column"};
  padding: ${(props) => props.padding || ""};
  height:${props => props.height || ""};
  width:${props => props.width || ""};
  margin-bottom:${props => props.marginBottom || ""};
`;

// /cart
const CartWrapper = styled.div`
padding:25px 50px;
`;

const Table = styled.table`
width:${props => props.width || "90vw"};
margin-top:${props => props.marginTop || ""};
border:${props => props.border ? "1px solid lightgray" : ""};

th,td {
  border:${props => props.border ? "1px solid lightgray" : ""};
}
`;
const Th = styled.th`
  font-weight:bold;
  font-family:"PatuaOne";
  width:${props => props.width || ""};
  padding:10px;
  border:${props => props.border ? "1px solid lightgray" : ""};
`;
const Td = styled.td`
  font-weight:bold;
  font-family:"PatuaOne";
  width:${props => props.width || ""};
  padding:10px;
`;
// /cart - fullCart component

const DeleteBtn = styled.button`
    width: 30px;
    height: 30px;
    background-color: #fff;
    color: red;
    font-family: "Verlag";
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;

    &:hover {
      color: #fff;
      background-color: red;
    }
`;

const BoldText = styled.p`
    font-weight:bold;
    font-family:"PatuaOne";
`;

// EmptyCart

const WindowIcon = styled(BiWindow)`
    color:#8F2626;
`;
const EmptyCartContainer = styled.div`
background-color:#F7F6F7;
width:95vw;
text-align:left;
    &:before {
        content:'';
        border-top:3px solid #D8AB27;
       display:block;
    }
`;

const EmptyCartWrapper = styled.div`
display:flex;
align-items:center;
padding:10px;
`;

// checkout

const Wrapper = styled.div`
 

`;

const HeaderWrapper = styled.div`
  text-align: left;
  height: auto;
  width: 100%;

  &:after {
    content: '';
    display: block;
    border: 2px solid #D8AB27;
  }
`;

const TextWrapper = styled.div`
font-size:${props => props.fontSize || ""};
color:${props => props.color || ""};
margin-left:10px;
`;
const CouponWrapper = styled.div`
  height: auto;
  background-color: #F7F6F7;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;

const CheckoutLink = styled.a`
    text-decoration: underline;
    color: #0000EE;
    &:hover {
      color: #0000EE;
      cursor: pointer;
    }
`;
const Input = styled.input`
width:${props => props.width || ""};
`;

//checkoutForm
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
      "leftColumn rightColumn";
      `;


const FormLeftColumn = styled.div`
  grid-area: leftColumn;
  padding:20px;
 
  `;
const FormRightColumn = styled.div`
  grid-area: rightColumn;
  padding:20px;
  `;
const InputWrapper = styled.div`
    display:flex;
    flex-direction:${props => props.directionRow ? "row" : "column"};
    width:100%;
   margin-left:${props => props.marginLeft || ""};
   margin-bottom:10px;
  `;
export {
  Header, Info, Alink, Button, Image, Container, CartWrapper, Table, DeleteBtn,
  BoldText, Th, Td, WindowIcon, EmptyCartContainer, EmptyCartWrapper, Wrapper,
  HeaderWrapper, CouponWrapper, CheckoutLink, Input, TextWrapper, FormContainer,
  FormLeftColumn, FormRightColumn, InputWrapper
};

