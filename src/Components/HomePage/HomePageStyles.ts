import styled, {keyframes} from "styled-components";

//animations


const itemsAnimate = keyframes`
    0%{
        transform: translateX(0px);
        
    }
   50%{
        transform: translateX(5px);
   }
    100%{
        transform: translateX(0px);
    }
`
export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
`

export const LeftSideContainer = styled.div`
    width: 55%;
    height: 100vh;

`

export const RightSideContainer = styled.div`
    display: flex;
    text-align: center;
    width: 45%;
    height: 100vh;
    border-left: 10px inset ${({theme})=> theme.color.border};
    color: ${({theme})=> theme.color.primary};
    background-color: ${({theme}) => theme.background.primary};
`

export const RightSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 10px 0;  
    padding: 10px 5px;
   
`
export const AppTitleWrapper = styled.header`
    font-family: Poppins;
    font-weight: 800;
    font-size: ${({theme})=> theme.fontSizes.large};
    color: ${({theme})=> theme.color.secondary};
    letter-spacing: 5px;
    width: 80%;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .about{
        font-size : 14px;
        font-weight: 800;
        color: ${({theme})=> theme.color.primary};
    }
`
export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0.6;
    font-family: Poppins;
    animation: ${itemsAnimate} 3s ease-in-out infinite;
    
    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`

export const CircularContainer = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.1);
    position: relative;
    color: ${({theme})=> theme.color.secondary};

    .item-1{
        top: -5%;
        left: 30%;
    }

    .item-2{
        top: 40%;
        right: -25%;
    }

    .item-3{
        top: 40%;
        left: -70px;
    }
    .item-4{
        bottom: -5%;
        left: 30%;
    }
`



export const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ReadMoreWrapper = styled.div`
    display: flex;
    gap: 5px;
    color: ${({theme})=> theme.color.primary};

    .link{
        color: ${({theme})=> theme.color.secondary};
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }

`

export const GetStartedButton = styled.button`
    font-family: Poppins;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 50%;
    height: 40px;
    color: ${({theme})=> theme.color.primary};
    border-radius: 10px;
    margin: 0px auto;
    background: ${({theme})=> theme.color.hover};
    transition: all 400ms ease-in-out;

    &:hover{
        background: ${({theme})=> theme.background.primary};
        border: 1px solid ${({theme})=> theme.color.primary};
        color: ${({theme})=> theme.color.secondary};
        font-weight: 700;
    }
`