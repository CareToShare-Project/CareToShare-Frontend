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

export {}