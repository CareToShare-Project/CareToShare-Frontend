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
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    border: 3px solid white;
    z-index: 100;
    

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
    font-size: 20px;
    font-weight: 700;
    color: ${({theme})=> theme.background.primary};
    width: 90%;

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
    color: ${({theme}) => theme.color.hover};
    border: 2px solid ${({theme}) => theme.color.hover};

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
    background:${({theme})=> theme.background.primary};
    color: white;
    height: 35px;
`
export const NotificationContainer = styled(ResetContainer)`
    background: ${({theme})=> theme.background.secondary};
    justify-content: space-between;
    padding: 10px 120px;
    @media (max-width: 906px){
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: center;
        overflow-y: scroll;
        padding: 10px 5px;
        text-align: center;

    }


`
export const EmailNotificationLeftSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    h1{
        font-family: Poppins;
        font-weight: 700;
    }

    h4{
        color: ${({theme})=> theme.background.primary};
        font-family: Poppins;
        
    }

    .bottom{
        display: flex;
        flex-direction: column;
        
        .link{
            color:  ${({theme})=> theme.color.hover};
            font-weight: 500;
            cursor: pointer;
            
            &:hover{
                text-decoration: underline;
            }
        }
    }
`

export const EmailNotificationRightSection = styled.div`
    span{
        font-size: 350px;
        color: ${({theme})=> theme.background.primary};

        @media (max-width: 906px){
            font-size: 200px;
        }
    }
`

export {}