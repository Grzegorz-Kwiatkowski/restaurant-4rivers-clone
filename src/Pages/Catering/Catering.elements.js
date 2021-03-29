import styled from 'styled-components'
import { Info, Header, Button, Container } from "../../Styled Components/styled-components"

export const CateringContainer = styled.div`

`;
export const CateringWrapper = styled(Container)`
    padding:2rem 9rem;
    box-sizing:border-box;
        &::after {
            content: "";
            display: block;
            margin: 0 auto;
            width: 100%;
            border-bottom: 2px solid #808080;
            margin-top:50px;
            margin-bottom:25px;
        }

        @media screen and (max-width: 1024px) { 
            padding:4rem 5rem;
        }
        @media screen and (max-width: 768px) { 
            padding:3rem 1.9rem;
        }
`;

export const CateringParallaxContainer = styled(Container)`
        padding:4rem;
        height:auto;
`;
export const CateringInfo = styled(Info)`
    font-family:PatuaOne;
    color:${props => props.white ? "#fff" : "#000"};
    font-size:${props => props.size || "1rem"};
    letter-spacing:${props => props.ls || "1px"};
    text-transform:${props => props.fontUp ? "uppercase" : "none"};
    padding:1.5rem 0;
        
        @media screen and (max-width: 1024px) { 
           font-size:1.2rem;
        }
`;

export const CateringHeader = styled(Header)`
    color:#000;
    font-family:PatuaOne;
    font-size:2rem;
    text-transform:lowercase;
    text-align:center;

        &:first-letter {
            text-transform:uppercase;
        }

        @media screen and (max-width: 1024px) { 
            font-size:2.4rem;
        }
      
`;

export const CateringHeaderBig = styled(Header)`
    font-size:6rem;
    letter-spacing:7px;
    font-weight:0;
    text-align:center;
    @media screen and (max-width: 480px) { 
        font-size:3rem;
    }
`;

export const CateringButton = styled(Button)`
    margin:5px;

        @media screen and (max-width: 480px) { 
            padding:.9rem 1.8rem;
            font-size:.9rem;
        }
`;


export const CateringText = styled.div`
    display:flex;
    align-items:center;
    ::before,
    ::after {
        content:'',
        display:block;
        border:1px solid gray;
        flex-grow:1;
        margin:0 5px;
    }
`;

export const CateringLocationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;