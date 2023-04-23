import styled, {keyframes} from "styled-components";

//animations
const iconAnimate = keyframes`
    0% {
     transform: rotate(30deg);
   }
   50% {
        transform: rotate(-30deg);
   }
   100%{
        transform: rotate(0deg);
   }
`

const horizontalLineAnimate = keyframes`
    0%{
        transform: scale(1);
        background: white;
    }
   50%{
    transform: scale(0);
   }
    100%{
        background: #01DEFC;
        transform: scale(1);
    }
`
export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
`

export const LeftSideContainer = styled.div`
    width: 60%;
    height: 100vh;

`

export const RightSideContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 40%;
    height: 100vh;
    border-left: 10px inset ${({theme})=> theme.color.border};
    padding-top: 10%;
    color: ${({theme})=> theme.color.primary};
    background-color: ${({theme}) => theme.background.secondary};
`

export const RightSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;   
    h3{
        font-family: Poppins;
        font-weight: 800;
        font-size: ${({theme})=> theme.fontSizes.medium};
        letter-spacing: 5px;
        line-height: 30px;
    }
    .horizontal-line{
        height: 8px;
        width: 400px;
        margin: 0px auto;
        animation: ${horizontalLineAnimate} 2s ease-in-out infinite;
    }
    .spinner{
        margin: 40px auto;
        color: black;
    }
`
export const UserOptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
    margin-top: 70px;

`


export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-family: Poppins;
    font-size: ${({theme})=> theme.fontSizes.small};
    cursor: pointer;
    transition: all 400ms ease-in-out;
    &:hover{ 
        color: ${({theme})=> theme.color.hover};
        transform: scale(1.05);   
    }

    .user-icon{
        &:hover{
            animation: ${iconAnimate} 1s ease-in-out infinite;
        }
    }
    
`