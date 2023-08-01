import React, { useEffect, useRef, useState } from 'react';
import {
    FormWrapper, FormField, InputField, RegisterStyles,
    SubmitButton, FormContainer, Heading
} from './LoginStyles'
import { FaUser, FaLock } from 'react-icons/fa'
import { UserLoginProps } from '../Shared_util/Constants/Types';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import LoginToast from '../Shared_util/Toast/LoginToast';
import Spinner from 'react-bootstrap/Spinner';
import '../Shared_Styles/General/Styles.css'
import { motion } from "framer-motion"
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import BackgroundSVG from '../Shared_util/SVG/Background';


const Login: React.FC = () => {

    const nameRef: any = useRef();
    const passwordRef: any = useRef()
    const navigate = useNavigate()


    // state for setting password visibility
    const [showpassword, setShowPassword] = useState(false)


    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)
    // show loading spinner on login process
    const [showLoading, setShowLoading] = useState(false)
    // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')

    // handles logins
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setShowLoading(true)
            const userDetails: UserLoginProps = {
                username: nameRef.current.value,
                password: passwordRef.current.value
            }

            const response = await fetch(`${BASE_URL}/signIn`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userDetails)
            })

            if (response.status === 400) {
                setToastMessage('Account is not active')
                setShowToast(true)
                setShowLoading(false)
            } else if (response.status === 201) {
                const results = await response.json()
                //stores the homepage url/link in session storage on login
                sessionStorage.setItem('page', JSON.stringify(''))

                //gets username & role 
                const userDetails = results.data
                const role = results.role
                sessionStorage.setItem('userDetails', JSON.stringify(userDetails))

                // gets token and store in session storage on login
                const token = results.token || ""
                sessionStorage.setItem('accesstoken', JSON.stringify(token))

                if (results.status === "success") {
                    setToastMessage('Successfully Logged In')
                    setShowToast(true)
                    setTimeout(() => {
                        navigate(`${role}`)
                    }, 1000)
                }

            } else {
                setToastMessage('Invalid Credentials!')
                setShowToast(true)
                setShowLoading(false)
            }



        } catch (err) {
            console.log(err)


        }
    }

    useEffect(() => {
        console.log('Login page rendered')
    }, [])



    return (
        <motion.div
            className='centered'
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <BackgroundSVG />
            
            <FormWrapper onSubmit={handleLogin}>
                <Heading>
                    <h4>Login</h4>
                </Heading>
                <FormContainer>
                    <FormField>
                        <FaUser size={20} color='#56C0C8' />
                        <InputField
                            type='text'
                            placeholder='Username'
                            ref={nameRef}
                            required
                        />
                    </FormField>
                    <FormField>
                        <FaLock size={20} color='#56C0C8' />
                        <InputField
                            type={showpassword ? 'text' : 'password'}
                            placeholder='Password'
                            ref={passwordRef}
                            required
                        />
                        {showpassword ?
                            <AiOutlineEyeInvisible
                                color='white'
                                style={{
                                    'position': 'absolute', 'right': '30px',
                                    color: "#56C0C8", cursor: "pointer"
                                }}
                                onClick={() => setShowPassword(prev => !prev)}
                            /> :
                            <AiFillEye
                                color='white'
                                style={{
                                    'position': 'absolute', 'right': '30px',
                                    color: "#56C0C8", cursor: 'pointer'
                                }}
                                onClick={() => setShowPassword(prev => !prev)}
                            />
                        }

                    </FormField>
                    <SubmitButton>
                        {showLoading && <Spinner animation='border' size='sm' className='spinner' />}
                        Login
                    </SubmitButton>
                    <Link to="/login/forgotPassword" className='forgot-password'>Forgot Password?</Link>
                </FormContainer>
                {
                    <RegisterStyles>
                        New here?{' '}
                        <span onClick={() => navigate('createAccount')}>Create an Account</span>
                    </RegisterStyles>
                }
                <LoginToast
                    showToast={showToast}
                    setShowToast={setShowToast}
                    toastMessage={toastMessage}
                />
            </FormWrapper>
        </motion.div>
    )
}

export default Login;