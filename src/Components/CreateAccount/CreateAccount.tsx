import React, {useRef} from 'react'
import { Heading, FormContainer, } from '../Login/LoginStyles';
import { InputLabel } from '../DonorPage/DonorStyles';
import { CreateAccountWrapper, RoleContainer, CreateAccountInputField,
     CreateAccountFieldWrapper, CreateButton} from './CreateAccountStyles';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import '../Shared_Styles/General/Styles.css'
import { useNavigate } from 'react-router-dom';


function CreateAccount() {
    const emailRef : any = useRef();
    const usernameRef : any = useRef();
    const passwordRef : any = useRef();
    const passwordConfirmRef : any = useRef();
    const selectRef : any = useRef();

    const navigate = useNavigate();
    
    // handles account creation
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        if(emailRef && usernameRef && passwordRef && passwordConfirmRef && selectRef) {
                const userDetails = {
                        email : emailRef.current.value,
                        username : usernameRef.current.value,
                        password : passwordRef.current.value,
                        passwordConfirm : passwordConfirmRef.current.value,
                        role : selectRef.current.value
                    }
                
                //console.log(userDetails)
            const response = await fetch(`${BASE_URL}/signUp`,{
                method : 'POST',
                headers : {'content-type':'application/json'},
                body : JSON.stringify(userDetails)

            })

            const data = await response.json()
            const user = data.data.user
            if(user){
                console.log(user)
                navigate(`${user.role}/${user.username}`)
            }
                
        }
        }catch(err){
            console.log(err)
        }          
    }

    return (
        <div className='body-container'>
            <form onSubmit={handleSubmit}>
                <CreateAccountWrapper>
                    <Heading style={{"marginTop" : "20px"}}>
                        Create an account
                    </Heading>
                    <FormContainer style={{"gap" : "10px", "marginTop" : "-10px"}}>
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
                                    <option value="Donor">Donor</option>
                                    <option value="Organisation">Organisation</option>
                                </RoleContainer>
                            </CreateAccountFieldWrapper>
                            <CreateButton>Submit</CreateButton>
                    </FormContainer>
                </CreateAccountWrapper>
            </form>
        </div>
    )
}

export default CreateAccount;