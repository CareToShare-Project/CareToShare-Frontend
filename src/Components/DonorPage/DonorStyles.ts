import styled, {keyframes} from 'styled-components'


export const RegistrationWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const pulseAnimation = keyframes`
   0% {
     transform: scale(0);
   }
   100% {
        transform: scale(1);
  }
 `
export const RegistrationContainer = styled.div`
    height: 550px;
    width: 500px;
    background: ${({theme}) => theme.background.main};
    border: 4px solid ${({theme}) => theme.background.secondary};
    box-shadow: 0px 5px 10px black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    gap: 10px;
    animation: ${pulseAnimation} 1s ease-in-out;
`
export const RowContainer = styled.div`
    display: flex;
`
export const RegistrationHeader = styled.header`
    color: black;
    font-size: ${({theme})=> theme.fontSizes.large};
    font-family: Roboto;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    width: 500px;
    height: 60px;
    padding: 10px;
    color: white;
    border: none;

`
export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    padding: 8px;
`

export const InputLabel = styled.label`
    font-size: 15px;
    font-weight: bolder;
    font-family: Poppins;
    color: ${({theme}) => theme.color.primary};
`

export const InputField = styled.input`
    border-radius: 5px;
    font-family: Poppins;
    font-weight: 400;
    text-indent: 10px;
    padding: 5px;
    background: transparent;
    color: ${({theme}) => theme.color.primary};
    border: 2px solid white;

    &:focus{
        border: 2px solid ${({theme})=> theme.color.hover};
        outline: none;
    }
    

`

export const ConfirmButton = styled.button`
    background: white;
    color: ${({theme})=> theme.color.secondary};
    outline: transparent;
    border: 3px solid white;
    border-radius: 10px;
    font-weight: 700;
    font-family: Poppins;
    margin: 10px auto;
    width: 96%;
    font-family: Poppins;
    transition: all 500ms ease-in-out;
    &:hover{
        border: 3px solid ${({theme})=> theme.color.hover};
        background: ${({theme})=> theme.color.hover};
        width: 96%;
    }
`