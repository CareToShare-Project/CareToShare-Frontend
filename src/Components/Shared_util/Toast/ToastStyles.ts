import styled from 'styled-components'

export const LoginToastWrapper = styled.div`

    .toast{
        position: fixed;
        width: 50%;
        height: 30px;
        background: rgb(255, 255, 255);
        left: 25%;
        height: max-content;    
        top: 0;
        font-family: Poppins;
        color: ${({theme})=> theme.color.primary};
        font-weight: 800; 
        font-size: 18px;
        letter-spacing: 1.2px;

        .toast-body{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`