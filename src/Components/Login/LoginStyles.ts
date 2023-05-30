import styled, {keyframes} from "styled-components";

export const Heading = styled.h4`
    font-family: Poppins;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: white;
    span{
        color:${({theme})=> theme.color.secondary};  
    }
`

export const LoginContainer = styled.div`
    
`
const pulseAnimation = keyframes`
   0% {
     transform: scale(0);
   }
   100% {
        transform: scale(1);
  }
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
    padding: 80px;
    border: 1px solid white;
    background: ${({theme})=> theme.background.main};
    box-shadow: 0px 2px 10px ${({theme})=> theme.background.main};
    outline: transparent;
    animation: ${pulseAnimation} 0.5s ease-in-out;
`
export const FormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    justify-content: center;
    gap: 30px;
    padding: 20px;

    .forgot-password {
        color: white; 
        position: absolute;
        bottom: -15px;
        right: 20px;
        text-decoration: none;

        &:hover{
        text-decoration: underline;
        cursor: pointer;
        color: ${({theme})=> theme.color.hover2};
    }
    }
`
export const FormField = styled.div`
    display: flex;
    align-items: center;
    
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
    border-bottom: 2px solid white;

    &::placeholder{
        color: rgba(255,255,255, 0.5);
    }
    &:focus{
        border-bottom: 2px solid ${({theme})=> theme.color.hover2};

    }
    
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
        border: 3px solid ${({theme})=> theme.color.hover};
        background: ${({theme})=> theme.color.hover};
        color: white;
    }
`

export const RegisterStyles = styled.div`
    color: ${({theme})=> theme.color.primary};
    span{
        color: ${({theme})=> theme.color.hover2};
    &:hover{
        text-decoration: underline;
        cursor: pointer;
        
    }
    }
`