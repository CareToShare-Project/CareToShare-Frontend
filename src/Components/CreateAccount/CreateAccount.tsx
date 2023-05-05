import React, {useRef} from 'react'
import { Heading, FormContainer, } from '../Login/LoginStyles';
import { InputLabel } from '../DonorPage/DonorStyles';
import { CreateAccountWrapper, RoleContainer, CreateAccountInputField,
     CreateAccountFieldWrapper, CreateButton, AboutUs} from './CreateAccountStyles';
import '../Shared_Styles/General/Styles.css'


function CreateAccount() {
    const emailRef : any = useRef();
    const usernameRef : any = useRef();
    const passwordRef : any = useRef();
    const passwordConfirmRef : any = useRef();
    const selectRef : any = useRef();
    

    return (
        <div className='body-container'>
            <form>
                <CreateAccountWrapper>
                    <Heading style={{"marginTop" : "15px"}}>
                        Create an account
                    </Heading>
                    <FormContainer style={{"gap" : "10px"}}>
                            <CreateAccountFieldWrapper>
                                <InputLabel htmlFor='email'>Email</InputLabel>
                                <CreateAccountInputField 
                                    type='email' 
                                    required
                                    id='email'
                                    ref={emailRef}
                                    />
                            </CreateAccountFieldWrapper>

                            <CreateAccountFieldWrapper>
                                <InputLabel htmlFor='username'>Username</InputLabel>
                                <CreateAccountInputField 
                                    type='text' 
                                    required
                                    id='username'
                                    ref={usernameRef}
                                    />
                            </CreateAccountFieldWrapper>

                            <CreateAccountFieldWrapper>
                                <InputLabel htmlFor='password'>Password</InputLabel>
                                <CreateAccountInputField 
                                    type='password'
                                    required
                                    id='password'
                                    ref={passwordRef}
                                    />
                            </CreateAccountFieldWrapper>

                            <CreateAccountFieldWrapper>
                                <InputLabel htmlFor='passwordConfirm'>Confirm Password</InputLabel>
                                <CreateAccountInputField 
                                    type='password' 
                                    required
                                    id='passwordConfirm'
                                    ref={passwordConfirmRef}
                                    />
                            </CreateAccountFieldWrapper>

                            <CreateAccountFieldWrapper>
                            <InputLabel htmlFor='options'>Select role</InputLabel>
                                <RoleContainer id="options" ref={selectRef}>
                                    <option value="" selected disabled>Select your role</option>
                                    <option value="donor">Donor</option>
                                    <option value="organization">Organization</option>
                                </RoleContainer>
                            </CreateAccountFieldWrapper>
                            <CreateButton>Submit</CreateButton>
                    </FormContainer>
                    <AboutUs>
                            Read more about us.
                    </AboutUs>
                </CreateAccountWrapper>
            </form>
        </div>
    )
}

export default CreateAccount;