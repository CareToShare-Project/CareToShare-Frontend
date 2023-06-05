import styled from "styled-components"

export const PageNotFoundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: ${({theme})=> theme.background.secondary};
    color: white;
    overflow-x: hidden;
    position: relative;
    
    div{
        color: ${({theme})=> theme.background.primary};
    }

    span{
        position: absolute;
        bottom: 30px;
        cursor: pointer;
        color: ${({theme})=> theme.color.primary};
        font-weight: 500;

        &:hover{
            text-decoration: underline;
            color: ${({theme})=> theme.background.primary}
        }
    }
    .error-code{
        font-weight: 700;
        
    }
    
    .error-message{
        font-weight: 800;
        font-size: 50px;
        font-family: Roboto;
        letter-spacing: 2.5px;
        text-align: center;
        color: black;
        
        
    }
`


export {}