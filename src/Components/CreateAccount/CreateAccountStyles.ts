import styled, {keyframes} from 'styled-components'
import { FormWrapper } from '../Login/LoginStyles'
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
    gap: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 550px;
    width: 450px;
    animation: ${pulseAnimation} s ease-in-out;
`

export const CreateAccountInputField = styled(InputField)`
    width: 100%;
`
export const CreateAccountFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 8px;
`
export const RoleContainer = styled.select`
    width: 400px;
    padding: 5px;
    border: none;
    border-radius: 10px;
`
export const CreateButton = styled(ConfirmButton)`
    width: 96%;
`
export const AboutUs = styled.span`
    color: white;
    cursor: pointer;
    &:hover{
        color: ${({theme})=> theme.color.hover2};
    }
`
export {}