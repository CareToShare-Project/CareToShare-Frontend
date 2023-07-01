import styled, {keyframes} from 'styled-components'
import { ConfirmButton, InputField, RegistrationContainer } from '../DonorPage/DonorStyles'

const pulseAnimation = keyframes`
   0% {
     transform: scale(0);
   }
   100% {
        transform: scale(1);
  }
 `


export const CreateAccountWrapper = styled(RegistrationContainer)`
    gap: 10px;
    overflow-y: hidden;
    overflow-x: hidden;
    background: white;
    height: 550px;
    width: 350px;
    box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.2);
    border: 3px solid white;
    animation: ${pulseAnimation} 1s ease-in-out;
    margin: 0 auto;
    @media (max-width: 450px){
            width: 100%;
            border-radius: 0px;
            box-shadow: none;
            border: none;
        }


`

export const CreateAccountInputField = styled(InputField)`
    width: 300px;
    height: 30px;
    border-radius: 5px;
    font-family: Roboto;
    color: ${({theme}) => theme.color.primary};

    @media (max-width: 450px){
            width: 100%;
        }

    
    
    
  
`
export const CreateAccountFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 5px;
    padding: 8px;

    @media (max-width: 450px){
        width: 95%;
    }
   

    .eye{
        position: absolute;
        right: 20px;
        bottom: 15px;
        cursor: pointer;
    
    }

    
   

`
export const RoleContainer = styled.select`
    width: 100%;
    padding: 0px;
    border: none;
    border-radius: 5px;
    height: 30px;
    border: 2px solid #96acb5;
    
    
`
export const CreateButton = styled(ConfirmButton)`
    width: 95%;
    padding: 5px 0px;
`

export {}