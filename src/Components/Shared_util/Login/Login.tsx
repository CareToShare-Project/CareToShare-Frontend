import React, {useState} from 'react';
import {FormWrapper, FormField,InputField, RegisterStyles,
        SubmitButton, FormContainer, Heading, LoginContainer} from './LoginStyles'
import {FaUser, FaLock} from 'react-icons/fa'
import { LoginProps } from '../Types';

const Login: React.FC<LoginProps> = ({setPassword, setUsername, userType}) => {

    const [password, setPass] = useState('')
    const [username, setUser] = useState('')
    
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPassword(password);
        setUsername(username)
    }

    return (
        <LoginContainer>
                <FormWrapper onSubmit={handleLogin}>
                    <Heading>
                        Login
                    </Heading>
                    <FormContainer>
                        <FormField>
                            <FaUser size={20} color='white' />
                            <InputField 
                                type='text' 
                                placeholder='Username'
                                onChange={(e)=> setUser(e.target.value)}
                            />
                        </FormField>
                        <FormField>
                            <FaLock size={20} color='white' />
                            <InputField 
                                type='password' 
                                placeholder='Password'
                                onChange={(e)=> setPass(e.target.value)}
                            />
                        </FormField>
                        <SubmitButton>Login</SubmitButton>
                    </FormContainer>
                            {
                            userType !=='admin' && <RegisterStyles>
                                                        Don't have an Account?{' '}<span>Register</span>
                                                    </RegisterStyles>
                            }     
                </FormWrapper>
            </LoginContainer>
    )
}

export default Login;