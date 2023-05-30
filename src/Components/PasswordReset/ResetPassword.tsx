import React, {useRef, useState} from 'react'
import { ResetContainer, ResetWrapper, Header, InputContainer, SubmitEmailContainer } from './passwordResetStyles';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate } from 'react-router-dom';
import AlertComponent from '../Shared_util/Alerts/Alert';
import BackgroundSVG from '../Shared_util/SVG/Background';
import {motion} from "framer-motion"

const ResetPassword : React.FC =()=>{

    const tokenRef: any = useRef();
    const passwordRef: any = useRef();
    const passwordConfirmRef: any = useRef();
    const navigate = useNavigate();

    const [alert, setAlert] = useState(false)
    const [showLoading, setShowLoading] = useState(false)
    const [variant, setVariant] =useState('')
    const [message, setMessage] = useState('')

    const handlePasswordReset = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            setShowLoading(true)
            if(tokenRef.current.value && passwordRef.current.value && passwordConfirmRef.current.value){
                const token = tokenRef.current.value
                const response = await fetch(`${BASE_URL}/donors/resetPassword/${token}`, {
                    method: 'PATCH',
                    headers : {'content-type':'application/json'},
                    body : JSON.stringify({
                        password: passwordRef.current.value,
                        passwordConfirm : passwordConfirmRef.current.value
                    })
                })

                const data = await response.json()
                if(data.status === "success"){
                    setMessage(`Successfully reset password`)
                    setVariant('success')
                    setAlert(true)
                    setTimeout(()=> {
                        navigate('/donor')
                    }, 1000)
                }else{
                    if(passwordConfirmRef.current.value !== passwordRef.current.value){
                        setMessage(`Password mismatch`)
                    }else{
                        setMessage(`Invalid token or token is expired`)
                    } 
                    setVariant('danger')
                    setAlert(true)
                    setShowLoading(false)
                    setTimeout(()=> {
                        setAlert(false)
                    }, 4000)
                }
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <motion.div
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            exit = {{opacity: 0, transition: {duration: 0.3}}}
        >
            <ResetContainer>
                {alert && 
                        <div className='alert'>
                            <AlertComponent variant={variant} message={message} />
                        </div>}
                <BackgroundSVG />
                <ResetWrapper onSubmit={handlePasswordReset}>
                    <Header>Check your email for the token</Header>
                    <div>
                        <InputContainer 
                            type='text' 
                            placeholder='Copy and Paste Token here' 
                            required
                            ref={tokenRef}
                            
                            />
                        <InputContainer 
                            type='password' 
                            placeholder='New Password (min: 8)' 
                            required
                            ref={passwordRef}
                            min={8}
                            />
                        <InputContainer 
                            type='password' 
                            placeholder='Confirm Password (min: 8)' 
                            required 
                            ref= {passwordConfirmRef}
                            min={8}
                            />
                        <SubmitEmailContainer>
                        {showLoading && <Spinner animation='border' size='sm' className='spinner'/>}
                                                <span>verify and reset password</span>
                        </SubmitEmailContainer>
                    </div>
                </ResetWrapper>
            </ResetContainer>
        </motion.div>
    )
}

export default ResetPassword;