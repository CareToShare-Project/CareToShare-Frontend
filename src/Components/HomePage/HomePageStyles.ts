import styled, {keyframes} from "styled-components";

//animations


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
    background-color: ${({theme}) => theme.background.primary};
`

export const RightSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
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
    }
`


export const GetStartedButton = styled.button`
    font-family: Poppins;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 300px;
    height: 40px;
    border-radius: 20px;
    margin: 0px auto;
    background: ${({theme})=> theme.color.primary};

    &:hover{
        border: 2px solid white;
        background: ${({theme})=> theme.color.hover};
        color: white;
    }
`