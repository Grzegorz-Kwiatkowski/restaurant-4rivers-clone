import styled from 'styled-components'
import { Header, Info, Button, Container } from '../../Styled Components/styled-components';

export const ContactUsContainer = styled.div`

`;

export const ContactUsWrapper = styled(Container)`
    padding:7rem 0;
`;
export const ContactUsHeader = styled(Header)`
    letter-spacing:.6rem;
    font-size:5rem;
    text-align:center;
    ::after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 20%;
        margin-top: 1rem;
        border-bottom: 2px solid white;
    }

        @media screen and (max-width: 768px) { 
            font-size:3rem;
        }
`;

export const ContactUsInfo = styled(Info)`
    letter-spacing:1px;
    text-transform:uppercase;
    margin:2rem 0;

        @media screen and (max-width: 768px) { 
            font-size:.9rem;
            font-weight:bold;
        }
`;

export const ContactUsButton = styled(Button)`
    margin:.3rem;
`;