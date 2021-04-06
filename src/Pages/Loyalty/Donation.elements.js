import styled from 'styled-components'
import { Container, Header, Info } from '../../Styled Components/styled-components';

export const DonationContainer = styled.div`

`;

export const DonationParallaxWrapper = styled(Container)`
    padding:5rem 0;
`;

export const DonationParallaxHeader = styled(Header)`
    font-size:5rem;
    letter-spacing:.5rem;
    text-align:center;

        @media screen and (max-width: 768px) { 
            font-size:3rem;  
        }
`;

export const DonationWrapper = styled(Container)`
    padding:3rem 0;

`;

export const DonationHeader = styled(Header)`
    color:#000;
    font-family:PatuaOne;
    font-size:2rem;
`;

export const DonationInfo = styled(Info)`
    color:#8F2626;
    font-size:1.1rem;
    font-family:PatuaOne;
    letter-spacing:2px;
    width:100%;
    display:flex;
    justify-content:center;
`;

export const SpanBorder = styled.span`
    display:flex;

    ::before,
    ::after {
        content: '\00a0\00a0\00a0\00a0\00a0\00a0\00a0';
        text-decoration: line-through;
        margin: auto 0.5em;
        color: gray;
    }
`;

export const DonationContent = styled.div`
    width:65%;
    font-family: "PatuaOne";

        @media screen and (max-width: 1024px) { 
            width:80%;
        }
        @media screen and (max-width: 768px) { 
            width:90%;
        }
`;

export const DonationText = styled.p`
    font-size:1.1rem;
    margin:2rem;
`;

export const DonationList = styled.ul`

`;

export const DonationListItem = styled.li`
    font-size:1rem;
`;
