import styled from 'styled-components'


export const RegistrationWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${({theme})=> theme.background.secondary};
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RegistrationContainer = styled.div`
    height: 500px;
    width: 450px;
    color: ${({theme})=> theme.color.secondary};
    background: ${({theme}) => theme.color.primary};
    box-shadow: 0px 5px 10px black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
`
export const RowContainer = styled.div`
    display: flex;
`
export const RegistrationHeader = styled.header`
    color: black;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    width: 450px;
    height: 60px;
    background: ${({theme}) => theme.background.primary};
    color: white;
    position: sticky;
    top:0px;
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
`

export const InputField = styled.input`
    border-radius: 5px;
    font-family: Poppins;
    text-indent: 5px;
    color: black;
    border: 2px solid ${({theme})=> theme.background.primary};

    &:focus{
        border: 2px solid ${({theme})=> theme.border.secondary};
        outline: none;
    }
    

`
export const ConfirmButton = styled.button`
    background: ${({theme})=> theme.color.secondary};
    outline: transparent;
    border: 3px solid ${({theme})=> theme.color.secondary};
    border-radius: 10px;
    font-weight: 550;
    font-family: Poppins;
    margin: 20px auto;
    width: 80%;
    color:${({theme})=> theme.color.primary};
    font-family: Poppins;
    transition: 0.8s;
    &:hover{
        border: 3px solid ${({theme})=> theme.border.secondary};
        background: ${({theme})=> theme.border.secondary};
        color: black;
    }
`