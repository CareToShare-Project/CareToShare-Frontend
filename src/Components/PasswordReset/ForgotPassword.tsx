import React, {useRef, useState} from 'react'
import { ResetContainer, Header, ResetWrapper, InputContainer, SubmitEmailContainer } from './passwordResetStyles'
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import Spinner  from 'react-bootstrap/Spinner';
import BackgroundSVG from '../Shared_util/SVG/Background';
import {motion} from "framer-motion"
import LoginToast from '../Shared_util/Toast/LoginToast';







const ForgotPassword  = () => {

    const emailRef: any = useRef()
    const [showLoading, setShowLoading] = useState(false)
     // state to show or hide toast
     const [showToast, setShowToast] = useState(true)
      // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')


    const handleResetToken = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setShowLoading(true)
            if(emailRef.current.value){
                const email = emailRef.current.value
                const response = await fetch(`${BASE_URL}/forgotPassword`, {
                    method: 'POST',
                    headers : {'content-type' : 'application/json'},
                    body : JSON.stringify({email})
                })

                const data = await response.json();
                if(data.status === 'success'){
                    setToastMessage('Check your email to reset your password.')
                    setShowToast(true)
                    setTimeout(()=> {
                        setShowLoading(false)
                    }, 2000)   
                }else{
                    setToastMessage('The email does not belong to any user')
                    setShowToast(true)
                    setShowLoading(false)
                }
                
                console.log(data)
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
                
                <BackgroundSVG />
                <ResetWrapper onSubmit={handleResetToken}>
                    <Header>Enter your email to reset your password</Header>
                    <div>
                        <InputContainer ref={emailRef} type='email' placeholder='email address' required/>
                        <SubmitEmailContainer>{showLoading && <Spinner animation='border' size='sm' className='spinner'/>}
                                                <span>Submit</span>
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

export default ForgotPassword