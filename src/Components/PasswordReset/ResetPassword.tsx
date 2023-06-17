import React, { useRef, useState } from 'react'
import { ResetContainer, ResetWrapper, Header, InputContainer, SubmitEmailContainer } from './passwordResetStyles';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate, useParams } from 'react-router-dom';
import BackgroundSVG from '../Shared_util/SVG/Background';
import { motion } from "framer-motion"
import LoginToast from '../Shared_util/Toast/LoginToast';

const ResetPassword: React.FC = () => {
    const passwordRef: any = useRef();
    const passwordConfirmRef: any = useRef();
    const navigate = useNavigate();

    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)

    // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')

    // state to handle loading spinner
    const [showLoading, setShowLoading] = useState(false)


    const { token } = useParams()
    console.log(token)


    const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setShowLoading(true)
            if (passwordRef.current.value && passwordConfirmRef.current.value) {
                const response = await fetch(`${BASE_URL}/resetPassword/${token}`, {
                    method: 'PATCH',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({
                        password: passwordRef.current.value,
                        passwordConfirm: passwordConfirmRef.current.value
                    })
                })

                const results = await response.json()

                if (results.status === "success") {
                    setToastMessage('Password reset successfully')
                    setShowToast(true)
                    setTimeout(() => {
                        setShowLoading(false)
                        navigate('/login')
                    }, 5000)
                } else {
                    setToastMessage('Password reset failed. Try again')
                    setShowToast(true)
                    setShowLoading(false)

                }
            }
        } catch (err) {
            console.log(err)

        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <ResetContainer>
                <BackgroundSVG />
                <ResetWrapper onSubmit={handlePasswordReset}>
                    <Header>Reset your password</Header>
                    <div>
                        <InputContainer
                            type='password'
                            placeholder='New Password'
                            required
                            ref={passwordRef}
                            min={8}
                        />
                        <InputContainer
                            type='password'
                            placeholder='Confirm Password'
                            required
                            ref={passwordConfirmRef}
                            min={8}
                        />
                        <SubmitEmailContainer>
                            {showLoading && <Spinner animation='border' size='sm' className='spinner' />}
                            <span>Save Password</span>
                        </SubmitEmailContainer>
                    </div>
                    <LoginToast
                        showToast={showToast}
                        setShowToast={setShowToast}
                        toastMessage={toastMessage}
                    />
                </ResetWrapper>
            </ResetContainer>
        </motion.div>
    )
}

export default ResetPassword;