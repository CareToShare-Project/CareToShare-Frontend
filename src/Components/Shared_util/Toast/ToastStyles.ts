import styled from 'styled-components'

export const LoginToastWrapper = styled.div`

    .toast{
        position: fixed;
        width: 50%;
        height: 30px;
        background: rgba(255, 255, 255, 0.6);
        left: 25%;
        height: max-content;    
        top: 0;
        font-family: Poppins;
        color: ${({theme})=> theme.background.primary};
        font-weight: 600; 
        font-size: 16px;

        .toast-body{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`