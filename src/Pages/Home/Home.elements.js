import styled from 'styled-components'
import { Container, BigButton, Header, Image } from '../../Styled Components/styled-components'

export const HomeContainer = styled.div`
`;

export const HomeCarousel = styled.div`

`;

export const HomeHeader = styled(Header)`
   font-size:5rem;
   letter-spacing:10px;
   text-align:center;

        @media screen and (max-width: 768px) { 
            font-size:3rem;
            letter-spacing:4px;
        }
        @media screen and (max-width: 480px) { 
            font-size:2.7rem;  
            letter-spacing:3px;
        }
`;

export const HomeInfo = styled.p`
    font-family:Verlag;
    font-weight: bold;
    font-size: 1rem;
    text-transform:uppercase;
    text-align: center;
    color: #fff;
    letter-spacing: 2px;
    padding:2rem 0;
        @media screen and (max-width: 768px) { 
           font-size:.5rem;
           padding:0 0;
        }
`;

export const HomeBigButton = styled(BigButton)`
    margin-right:1rem;
        @media screen and (max-width: 768px) { 
            padding:6px 14px 6px 14px;
            font-size:.5rem;
            letter-spacing:1px;
            margin-right:.5rem;
        }
`;

export const HomeButtonWrapper = styled.div`

`;

export const HomeImage = styled(Image)`
    @media screen and (max-width: 768px) { 
        width:32rem;      
    }
    @media screen and (max-width: 480px) { 
             width:15rem;
             height:3.4rem;   
    }
`;



export const HomeBonusCard = styled(Container)`
    background-image: url(${({ image }) => (image)});;
    background-position: center;
    background-size: 150%;
    padding: 4rem 0;
    
`;

export const HomeCatering = styled(Container)`
    background-image: url(${({ image }) => (image)});;
    background-position: center;
    background-size: 120%;
    padding: 4rem 0;
`;

export const HomeSauces = styled(Container)`
    padding: 5rem 0;
`;

export const HomeLoyalty = styled(Container)`
    background-image: url(${({ image }) => (image)});;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 10rem 0 2rem 0;
`;

export const HomeStory = styled(Container)`
    padding: 8rem 0 2rem 0;
`;

export const HomeBeginings = styled(Container)`
    background-image: url(${({ image }) => (image)});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding:5rem 0 4rem 0;
`;

export const HomeBeginingsContent = styled.article`
    display:flex;
    align-items:flex-start;
    justify-content: space-around;
    margin:2rem 0 0 0;

        @media screen and (max-width: 768px) { 
           flex-direction:column;  
    }
`;

export const HomeBeginingsText = styled.p`
    color: #fff;
    width:50%;
    font-size:.8rem;
    padding:1rem 2.5rem 0 2.5rem; 
    
        @media screen and (max-width: 768px) { 
            width:100%; 
    }
    `;

export const HomeGoldbelly = styled(Container)`
    background-image: url(${({ image }) => (image)});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 8rem 0 2rem 0;
`;


