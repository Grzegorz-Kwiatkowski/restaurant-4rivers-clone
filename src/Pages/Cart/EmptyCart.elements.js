import styled from 'styled-components';
import { BiWindow } from "react-icons/bi";

import { Info } from '../../Styled Components/styled-components'

export const EmptyCartContainer = styled.div`
    background-color:#F7F6F7;
    width:95vw;
    text-align:left;

        &:before {
            content:'';
            border-top:3px solid #D8AB27;
            display:block;
        }
`;


export const EmptyCartWrapper = styled.div`
 display:flex;
 margin-top:.5rem;
`;

export const WindowIcon = styled(BiWindow)`
    color:#8F2626;
    margin-right:.5rem;
`;

export const EmptyCartInfo = styled(Info)`
    color:#A1A1A1;
    font-size:.7rem;
`;






