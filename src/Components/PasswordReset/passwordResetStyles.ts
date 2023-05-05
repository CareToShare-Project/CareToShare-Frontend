import styled from 'styled-components'
import { SubmitButton } from '../Login/LoginStyles'

export const ResetContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme})=> theme.background.primary};

    .reset-wrapper{
        width: 500px;
    }

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
    width: 500px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    gap: 50px;
    background: ${({theme})=> theme.background.main};
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    border: 3px solid white;

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
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
    color: ${({theme})=> theme.color.primary};

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
    border: 2px solid white;

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
`

export {}