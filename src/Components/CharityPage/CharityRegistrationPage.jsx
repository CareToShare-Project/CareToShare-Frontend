import React from 'react'
import '../Shared_Styles/General/Styles.css'
import { RegistrationWrapper, RegistrationContainer, FieldWrapper,
        InputLabel, InputField, RegistrationHeader, ConfirmButton } from '../DonorPage/DonorStyles';
import { TextWrapper } from './CharityStyles';




function CharityRegistrationPage() {

    return (
        <>
            <RegistrationWrapper className='body-container'>
                <form>
                    <RegistrationContainer>
                        <RegistrationHeader>
                            Charity Registration
                        </RegistrationHeader>
                        <FieldWrapper>
                            <InputLabel htmlFor='organization'>Name of Organization</InputLabel>
                            <InputField type='text' id='organization' placeholder='e.g Dream Big Ghana Foundation' required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='email'>Email Address</InputLabel>
                            <InputField type='email' id='email' placeholder='e.g dreambig21@gmail.com'  required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='username'>Username</InputLabel>
                            <InputField type='text' id='username' placeholder='e.g dreambig21' required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <InputField type='text' id='password' placeholder='should be at least 8 characters long' required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='confirmPassword'>Confirm Password</InputLabel>
                            <InputField type='text' id='confirmPassword' placeholder='should be at least 8 characters long' required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='location'>Location</InputLabel>
                            <InputField type='text' id='location' placeholder='e.g Ghana, Sunyani' required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='contact'>Contact</InputLabel>
                            <InputField type='tel' id='contact' placeholder='e.g 247668944' required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='file'>Upload Business Certificate</InputLabel>
                            <InputField type='file' id='file'  required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='missions'>Briefly describe the organization's mission</InputLabel>
                            <TextWrapper>Make it brief.....</TextWrapper>
                        </FieldWrapper>
                        <ConfirmButton>Confirm</ConfirmButton>

                    </RegistrationContainer>
                </form>
            </RegistrationWrapper>
        </>
    )
}

export default CharityRegistrationPage;