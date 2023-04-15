import styled from "styled-components";

export const Heading = styled.h4`
    font-family: Poppins;
    color: white;
    span{
        color:${({theme})=> theme.color.secondary};  
    }
`
export const FormWrapper = styled.form`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 400px;
    height: 500px;
    border-radius: 10px;
    border: 0;
    padding: 80px;
    margin: 50px auto;
    background: ${({theme})=> theme.background.primary};
    box-shadow: 0px 2px 10px rgba(0,0,0,0.4);
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
    width: 100px;
    background: ${({theme})=> theme.background.secondary};
    outline: transparent;
    border: 0;
    font-weight: 600;
    color:${({theme})=> theme.color.secondary};
    border-radius: 10px;
    font-family: Poppins;
`