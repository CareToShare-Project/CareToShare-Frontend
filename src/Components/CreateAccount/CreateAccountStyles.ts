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
    height: 550px;
    width: 400px;
    animation: ${pulseAnimation} 1s ease-in-out;
`

export const CreateAccountInputField = styled(InputField)`
    width: 350px;
    height: 30px;
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
    padding: 5px;
    border: none;
    border-radius: 10px;
`
export const CreateButton = styled(ConfirmButton)`
    width: 96%;
`

export {}