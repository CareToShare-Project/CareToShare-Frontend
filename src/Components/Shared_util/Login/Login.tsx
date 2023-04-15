import React from 'react';
import {FormWrapper, FormField,InputField, SubmitButton, FormContainer, Heading} from './LoginStyles'
import {FaUser, FaLock} from 'react-icons/fa'
import { LoginProps } from '../Types';

const Login: React.FC<LoginProps> = ({setPassword, setUsername,user}) => {

    const [pass, setPass] = React.useState('')
    const [userN, setUser] = React.useState('')
    
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPassword(pass);
        setUsername(userN)
    }

    return (
        <FormWrapper onSubmit={handleLogin}>
            <Heading>
                Login : {user}
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
            
        </FormWrapper>
    )
}

export default Login;