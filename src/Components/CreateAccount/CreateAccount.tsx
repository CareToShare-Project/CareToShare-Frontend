import React, { useRef, useState } from 'react'
import { Heading, FormContainer, } from '../Login/LoginStyles';
import { InputLabel } from '../DonorPage/DonorStyles';
import {
    CreateAccountWrapper, RoleContainer, CreateAccountInputField,
    CreateAccountFieldWrapper, CreateButton
} from './CreateAccountStyles';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import '../Shared_Styles/General/Styles.css'
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import BackgroundSVG from '../Shared_util/SVG/Background';


function CreateAccount() {
    const emailRef: any = useRef();
    const usernameRef: any = useRef();
    const passwordRef: any = useRef();
    const passwordConfirmRef: any = useRef();
    const roleRef: any = useRef();

    // a state to control password visibility
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    // handles account creation
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userDetails = {
                email: emailRef.current.value,
                username: usernameRef.current.value,
                password: passwordRef.current.value,
                passwordConfirm: passwordConfirmRef.current.value,
                role: roleRef.current.value
            }

            //console.log(userDetails)
            const response = await fetch(`${BASE_URL}/signUp`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userDetails)

            })

            const result = await response.json()
            const user = result.data.user
            if (user) {
                console.log(user)
                navigate(`${user.role}/${user.username}`)
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='centered'>
            <BackgroundSVG />
            <form onSubmit={handleSubmit} className='form'>
                <CreateAccountWrapper>
                    <Heading style={{ "marginTop": "5px", "fontWeight" : "700"}}>
                        <h4>Create an account</h4>
                    </Heading>
                    <FormContainer style={{ "gap": "10px", "marginTop": "-10px" }}>
                        <CreateAccountFieldWrapper>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <CreateAccountInputField
                                type='email'
                                required
                                id='email'
                                ref={emailRef}
                            />
                        </CreateAccountFieldWrapper>

                        <CreateAccountFieldWrapper >
                            <InputLabel htmlFor='username'>Username</InputLabel>
                            <CreateAccountInputField
                                type='text'
                                required
                                id='username'
                                ref={usernameRef}
                            />

                        </CreateAccountFieldWrapper>

                        <CreateAccountFieldWrapper style={{ 'position': 'relative' }}>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <CreateAccountInputField
                                type={showPassword ? 'text' : 'password'}
                                required
                                id='password'
                                ref={passwordRef}
                            />

                            {showPassword ?
                                <AiOutlineEyeInvisible
                                    color='#56C0C8'
                                    className='eye'
                                    onClick={() => setShowPassword(prev => !prev)}
                                /> :
                                <AiFillEye
                                    color='#56C0C8'
                                    className='eye'
                                    onClick={() => setShowPassword(prev => !prev)}
                                />}
                        </CreateAccountFieldWrapper>

                        <CreateAccountFieldWrapper style={{ 'position': 'relative' }}>
                            <InputLabel htmlFor='passwordConfirm'>Confirm Password</InputLabel>
                            <CreateAccountInputField
                                type={showPassword ? 'text' : 'password'}
                                required
                                id='passwordConfirm'
                                ref={passwordConfirmRef}
                            />

                            {showPassword ?
                            
                                <AiOutlineEyeInvisible
                                    color='#56C0C8'
                                    className='eye'
                                    onClick={() => setShowPassword(prev => !prev)}
                                /> :
                                <AiFillEye
                                    color='#56C0C8'
                                    className='eye'
                                    onClick={() => setShowPassword(prev => !prev)}
                                />}
                        </CreateAccountFieldWrapper>


                        <CreateAccountFieldWrapper>
                            <InputLabel htmlFor='options'>Select role</InputLabel>
                            <RoleContainer id="options" ref={roleRef}>
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