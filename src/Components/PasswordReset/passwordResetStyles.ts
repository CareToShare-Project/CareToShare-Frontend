import styled from 'styled-components'
import { SubmitButton } from '../Login/LoginStyles'

export const ResetContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
    justify-content: center;
    position: relative;


    .alert{
        position: absolute;
        top: 0;
        height: 50px;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
export const ResetWrapper = styled.form`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 20px;
    gap: 20px;
    background: white;
    box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.2);
    border: 3px solid white;
    z-index: 100;

    @media (max-width: 450px){
            border-radius: 0px;
            box-shadow: none;
        }
    

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width: 90%;

        .spinner{
            width: 25px;
            height: 25px;
        }
    }
`
export const Header = styled.header`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 600;
    color: ${({theme})=> theme.color.primary};
    width: 90%;

    @media (max-width: 450px){
            color: ${({theme})=> theme.background.primary};
        }

`

export const Label = styled.label`

`
export const InputContainer = styled.input`
    border-radius: 5px;
    font-family: Poppins;
    font-weight: 400;
    text-indent: 10px;
    width: 100%;
    padding: 5px;
    background: transparent;
    color: ${({theme}) => theme.color.primary};
    border: 2px solid ${({theme}) => theme.color.primary};

    &:focus{
        border: 2px solid ${({theme}) => theme.color.hover2};
        outline: none;
    }

`

export const SubmitEmailContainer = styled(SubmitButton)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 10px;
    background:${({theme})=> theme.color.primary};
    color: white;
    height: 35px;
    &:hover{
        border: 1px solid ${({theme})=> theme.color.primary};
        background: ${({theme})=> theme.background.primary};
        color: ${({theme})=> theme.color.secondary};
    }
`
export const NotificationContainer = styled(ResetContainer)`
    background: ${({theme})=> theme.background.secondary};
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 10px 100px;

    .svg{
        @media (max-width: 906px){
            display: none;
        }
    }

    @media (max-width: 906px){
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: center;
        overflow-y: scroll;
        padding: 10px 5px;
        text-align: center;

    }

    @media (max-width: 450px){
           gap: 20px;
        }


`
export const EmailNotificationLeftSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 400;

    span{
        font-family: Roboto;
    }

    h1{
        font-weight: 700;
        font-family: Roboto;
    }

    h4{
        font-family: Roboto;
        font-size: 16px;
        font-weight: 700;
        
    }

    .bottom{
        display: flex;
        flex-direction: column;
        
        .link{
            color: blue;
            font-weight: 500;
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

export const EmailNotificationRightSection = styled.div`
    z-index: 300;
    span{
        font-size: 350px;
        color: ${({theme})=> theme.background.primary};

        @media (max-width: 906px){
            font-size: 200px;
        }
    }

    img{
        @media (max-width: 450px){
            width: 90%;
        }
    }
`

export {}