import React, {useRef, useState} from 'react'
import { ResetContainer, Header, ResetWrapper, InputContainer, SubmitEmailContainer } from './passwordResetStyles'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import AlertComponent from '../Shared_util/Alerts/Alert';
import Spinner  from 'react-bootstrap/Spinner';
import BackgroundSVG from '../Shared_util/SVG/Background';







const ForgotPassword  = () => {

    const navigate = useNavigate();
    const emailRef: any = useRef()
    const [alert, setAlert] = useState(false)
    const [showLoading, setShowLoading] = useState(false)
    const [variant, setVariant] =useState('')
    const [message, setMessage] = useState('')


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
                    setMessage(`Successfully sent token to ${email} account`)
                    setVariant('success')
                    setAlert(true)
                    setTimeout(()=> {
                        navigate('resetPassword')
                    }, 1000)
                }else{
                    setMessage(`The provided email does not belong to any authorized user`)
                    setVariant('danger')
                    setAlert(true)
                    setShowLoading(false)
                    setTimeout(()=> {
                        setAlert(false)
                    }, 4000)
                }
                console.log(data)
            }
        }catch(err){
            console.log(err)
            

        }
    
    }

    

    return (
        
        <>
            
            <ResetContainer>
                {alert && 
                        <div className='alert'>
                            <AlertComponent variant={variant} message={message} />
                        </div>}
                <BackgroundSVG />
                <ResetWrapper onSubmit={handleResetToken}>
                    <Header>Enter your email to reset your password</Header>
                    <div>
                        <InputContainer ref={emailRef} type='email' placeholder='email address' required/>
                        <SubmitEmailContainer>{showLoading && <Spinner animation='border' size='sm' className='spinner'/>}
                                                <span>Submit</span>
                        </SubmitEmailContainer>
                    </div>   
                </ResetWrapper>
            </ResetContainer>
        </>
        
    )
}

export default ForgotPassword