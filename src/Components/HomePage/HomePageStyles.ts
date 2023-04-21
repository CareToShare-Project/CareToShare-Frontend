import styled from "styled-components";

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
    border-left: 10px inset ${({theme})=> theme.border.primary};
    padding-top: 10%;
    color: ${({theme})=> theme.color.primary};
    background-color: ${({theme}) => theme.background.secondary};
`

export const RightSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;   
    h3{
        font-family: Poppins;
        font-weight: 600;
        font-decoration: bolder;
        font-size: 22px;
        letter-spacing: 2px;
        line-height: 30px;
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
    cursor: pointer;
    transition: all 400ms ease-in-out;
    &:hover{ 
        color: ${({theme})=> theme.color.hover};   
    }
    
`