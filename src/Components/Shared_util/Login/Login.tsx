import React, {useRef} from 'react';
import {FormWrapper, FormField,InputField, RegisterStyles,
        SubmitButton, FormContainer, Heading, LoginContainer} from './LoginStyles'
import {FaUser, FaLock} from 'react-icons/fa'
import { LoginProps } from '../Constants/Types';
import { useNavigate } from 'react-router-dom';

const Login: React.FC<LoginProps> = ({setPassword, setUsername, userType}) => {
    
    const nameRef: any = useRef();
    const passwordRef : any = useRef()
    const navigate = useNavigate()
    const route:string = userType === 'charity' ? 'charityRegister' : 'donorRegister'

    
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(nameRef && passwordRef){
            setUsername(nameRef.current.value);
            setPassword(passwordRef.current.value)
        }
        
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
                                ref={nameRef}
                            />
                        </FormField>
                        <FormField>
                            <FaLock size={20} color='white' />
                            <InputField 
                                type='password' 
                                placeholder='Password'
                                ref={passwordRef}
                            />
                        </FormField>
                        <SubmitButton>Login</SubmitButton>
                    </FormContainer>
                            {
                            userType !=='admin' && 
                            <RegisterStyles>
                                Don't have an Account?{' '}
                                    <span onClick={()=>navigate(route)}>Register</span>
                                </RegisterStyles>
                            }     
                </FormWrapper>
            </LoginContainer>
    )
}

export default Login;