import styled from "styled-components";

export const Heading = styled.h4`
    font-family: Poppins;
    font-weight: 600;
    letter-spacing: 2px;
    color: white;
    span{
        color:${({theme})=> theme.color.secondary};  
    }
`

export const LoginContainer = styled.div`
    
`
export const FormWrapper = styled.form`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 400px;
    height: 450px;
    border-radius: 10px;
    border: 1px solid ${({theme})=> theme.border.primary};
    padding: 80px;
    background: ${({theme})=> theme.background.primaryTransparent};
    box-shadow: 0px 2px 10px rgba(255,255,255,0.4);
    outline: transparent;
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    justify-content: center;
    gap: 30px;
    padding: 20px;
`
export const FormField = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid white;
    &:hover{
        border-bottom: 2px solid ${({theme})=> theme.border.secondary};

    }
`
export const InputField = styled.input`
    width: 300px;
    text-indent: 5px;
    font-family: Poppins;
    color:${({theme})=> theme.color.primary};
    padding: 5px;
    outline: transparent;
    background: transparent;
    border: 0px;
    
`

export const SubmitButton = styled.button`
    width: 100%;
    background: ${({theme})=> theme.color.primary};
    outline: transparent;
    border: 3px solid white;
    border-radius: 10px;
    font-weight: 700;
    color:${({theme})=> theme.color.secondary};
    font-family: Poppins;
    transition: 0.8s;
    &:hover{
        border: 3px solid ${({theme})=> theme.border.secondary};
        background: ${({theme})=> theme.border.secondary};
    }
`

export const RegisterStyles = styled.div`
    color: ${({theme})=> theme.color.primary};
    span{
    &:hover{
        text-decoration: underline;
        cursor: pointer;
        color: ${({theme})=> theme.color.hover};
    }
    }
`