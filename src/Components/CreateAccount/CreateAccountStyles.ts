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
    width: 400px;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    border: 3px solid white;
    animation: ${pulseAnimation} 1s ease-in-out;
`

export const CreateAccountInputField = styled(InputField)`
    width: 350px;
    height: 30px;
    border-radius: 5px;
    color: ${({theme}) => theme.color.primary};
`
export const CreateAccountFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 5px;
    padding: 8px;

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