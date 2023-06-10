import styled, {keyframes} from "styled-components";

export const Heading = styled.h4`
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${({theme})=> theme.color.primary};
    span{
        color:${({theme})=> theme.color.primary};  
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
    background: white;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    border: 3px solid white;
    outline: transparent;
    border: 0;
    z-index: 200;
    animation: ${pulseAnimation} 0.5s ease-in-out;
`
export const FormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    color : ${({theme})=> theme.color.primary};

    .forgot-password {
        color: ${({theme})=> theme.color.hover2}; 
        position: absolute;
        bottom: -15px;
        right: 20px;
        text-decoration: none;
        cursor: pointer;

        &:hover{
            text-decoration: underline;
            
        }
    }
`
export const FormField = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    
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
    border-bottom: 2px solid ${({theme})=> theme.color.primary};;

    &::placeholder{
        color: rgba(0,0,0, 0.4);
    }
    &:focus{
        border-bottom: 2px solid ${({theme})=> theme.color.hover2};

    }
    
`

export const SubmitButton = styled.button`
    width: 95%;
    background: ${({theme})=> theme.color.primary};
    outline: transparent;
    border: 1px solid white;
    margin-top: 10px;
    padding: 5px 0px;
    border-radius: 10px;
    font-weight: 600;
    color:${({theme})=> theme.color.secondary};
    font-family: Poppins;
    transition: 0.8s;
    &:hover{
        background: ${({theme})=> theme.background.primary};
        color: ${({theme})=> theme.color.secondary};
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