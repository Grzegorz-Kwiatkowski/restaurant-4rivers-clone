import styled from 'styled-components'
import { Container, Header } from '../../Styled Components/styled-components';

export const AdvertisementContainer = styled.div`

`;

export const AdvertisementWrapper = styled(Container)`
    padding:4rem 0;
`;

export const AdvertisementHeader = styled(Header)`
    text-transform:lowercase;
    font-size:2.5rem;
    letter-spacing:.5rem;
    margin-bottom:1rem;
    font-family:Courgette;
    margin-bottom:2rem;

        &:first-letter {
            text-transform:uppercase;
        }

      
`;