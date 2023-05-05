import styled from 'styled-components'

export const LoginToastWrapper = styled.div`
    position: absolute;  
    display: flex;
    top: 0;
    margin: 0 auto;
    

    .toast{
        width: 100%;
        height: 40px;
        text-align: center;
        font-family: Poppins;
        color: ${({theme})=> theme.background.primary};;
        font-weight: 600; 
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`