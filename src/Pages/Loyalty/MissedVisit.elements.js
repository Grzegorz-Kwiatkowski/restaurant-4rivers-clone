import styled from 'styled-components'
import { Container, Header, Info, Image } from '../../Styled Components/styled-components'

export const MissedVisitContainer = styled.div`

`;

export const MissedVisitWrapper = styled(Container)`
    padding:3rem;
`;

export const MissedVisitHeader = styled(Header)`
    font-size:3.5rem;
    letter-spacing:.4rem;
`;

export const MissedVisitInfo = styled(Info)`
    color:#000;
    font-size:.9rem;
    letter-spacing:1px;
    text-transform:lowercase;

        :first-letter {
            text-transform:uppercase;
        }
`;

export const MissedVisitImage = styled(Image)`
        width:40%;

        @media screen and (max-width: 768px) { 
            width:90%;  
          }
`;