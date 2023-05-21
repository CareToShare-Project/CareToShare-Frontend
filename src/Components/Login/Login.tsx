import React, {useEffect, useRef, useState} from 'react';
import {FormWrapper, FormField,InputField, RegisterStyles,
        SubmitButton, FormContainer, Heading, LoginContainer} from './LoginStyles'
import {FaUser, FaLock} from 'react-icons/fa'
import {UserLoginProps } from '../Shared_util/Constants/Types';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import LoginToast from '../Shared_util/Toast/LoginToast';
import Spinner  from 'react-bootstrap/Spinner';
import '../Shared_Styles/General/Styles.css'

const Login: React.FC = () => {
    
    const nameRef: any = useRef();
    const passwordRef : any = useRef()
    const navigate = useNavigate()


    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)
    // show loading spinner on login process
    const [showLoading, setShowLoading] = useState(false)
    // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')
    
    
    // handles logins
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try{
            setShowLoading(true)
            const userDetails: UserLoginProps = {
                username: nameRef.current.value, 
                password: passwordRef.current.value
            }  

            const response = await fetch(`${BASE_URL}/signIn`,{
                method : 'POST',
                headers : {'content-type':'application/json'},
                body : JSON.stringify(userDetails)
            })
            const results = await response.json()

            // gets username and role from the results
            const role = results.data.user.role
            const username = results.data.user.username

            // gets token and store in local storage on login
            const token = results.token
            localStorage.setItem('accesstoken', JSON.stringify(token))
            console.log(token)
            
            if(results.status === "success" ){
                setToastMessage('Successfully Logged In')
                setShowToast(true)
                navigate(`${role}/${username}`)
            }
    
    }catch(err){
        console.log(err)
        setToastMessage('Invalid Credentials!')
        setShowToast(true)   
        setTimeout(()=>{
            setShowLoading(false)
        }, 1000)
    }
}

    useEffect(()=>{
        console.log('page rendered')
    }, [])

  

    return (
        <div className='body-container'>
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
                                    required
                                />
                            </FormField>
                            <FormField>
                                <FaLock size={20} color='white' />
                                <InputField 
                                    type='password' 
                                    placeholder='Password'
                                    ref={passwordRef}
                                    required
                                />
                            </FormField>
                            <SubmitButton>
                                {showLoading && <Spinner animation='border' size='sm' className='spinner'/>}
                                Login
                            </SubmitButton>
                            <Link to="/login/forgotPassword" className='forgot-password'>Forgot Password?</Link>
                        </FormContainer>
                                {
                                <RegisterStyles>
                                    New here?{' '}
                                        <span onClick= {()=>navigate('createAccount')}>Create an Account</span>
                                </RegisterStyles>
                                }  
                        <LoginToast  
                        showToast={showToast} 
                        setShowToast={setShowToast} 
                        toastMessage={toastMessage}
                        />   
                    </FormWrapper>

                    
                </LoginContainer>
            </div>
    )
}

export default Login;