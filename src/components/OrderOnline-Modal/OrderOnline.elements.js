import styled from 'styled-components'
import { Button, Header, Info } from '../../Styled Components/styled-components'

export const OrderOnlineContainer = styled.div`
    position: fixed;
    top: ${({ isOpen }) => (isOpen ? "0%" : "150%")};
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ image }) => (image)});
    background-position: center;
    background-size: cover;
    z-index: 500000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: top 500ms ease-out;
`;

export const OrderOnlineDarkBg = styled.div`
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    opacity: 0.9;
`;

export const OrderOnlineContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

export const OrderOnlineOptions = styled.div`
    border: 1px solid gray;
    width: 95%;
    height: 70%;
    position: relative;
    top: 25%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
`;

export const OrderOnlineItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 60px 10px;
        a {
            height: 20%;
            width: 80%;

            button { 
                height: 100%;
                width: 100%;
            }
        }
`;

export const OrderOnlineBtnClose = styled.button`
    width: 100px;
    height: 100px;
    background-color: #8F2626;
    color: #fff;
    font-family: "PatuaOne";
    font-size: 3em;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 5%;
    right: 5%;
`;

export const OrderOnlineButton = styled(Button)`
    width:100%;
    height:20%;
`;

export const OrderOnlineHeader = styled(Header)`
    color:#fff; 
    letter-spacing:5px:
`;

export const OrderOnlineInfo = styled(Info)`
    color:#fff;
    font-size:.7rem;
    margin-top:2px;
    margin-bottom:1.5rem;
`;

export const OrderOnlineText = styled.p`
    font-family: "Verlag";
    font-size: 1.5em;
    color: #D9AB27;
    display: flex;
    align-items: center;
    width: 100%;

        ::before,
        ::after {
            content: '';
            display: block;
            border: 1px solid gray;
            flex-grow: 1;
            margin: 0px 15px;
        }
`;