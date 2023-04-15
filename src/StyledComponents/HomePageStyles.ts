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
    border-left: 10px inset rgba(0,0,0,0.7);
    padding-top: 10%;
    color: white;
    background-color: #5BB4F0;
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
    
    .user-icon{
        transition: all 400ms ease-in-out;
        &:hover{ 
            color: rgba(0,0,0,0.4);   
        }
    }

`