import React, {useState} from 'react'
import { EmailNotificationLeftSection, EmailNotificationRightSection, NotificationContainer} from './passwordResetStyles'
import { useNavigate, useParams } from 'react-router-dom'
import {MdEmail} from "react-icons/md"
import { BASE_URL } from '../Shared_util/Constants/Base_URL'
import LoginToast from '../Shared_util/Toast/LoginToast'

function EmailNotification(){
    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)
      // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')
    const {email} = useParams()
    const navigate = useNavigate()

    const ResendPasswordResetLink = async() => {
        try {
                const response = await fetch(`${BASE_URL}/forgotPassword`, {
                    method: 'POST',
                    headers : {'content-type' : 'application/json'},
                    body : JSON.stringify({email})
                })

                const data = await response.json();
                if(data.status === 'success'){
                    setToastMessage('Reset link has been sent successfully')
                    setShowToast(true)
                }else{
                    console.log("an error occured sending reset link")
                }
                
                console.log(data)
            }
        catch(err){
            console.log(err)

        }}
    
    
    

    return (
        <NotificationContainer>

            <EmailNotificationLeftSection>
                <h1>Check your email</h1>
                <div className='top'>
                    <span>We sent a verification link to: </span>
                    <h4>{email}</h4>
                </div>

                <span>Check your email and click the verification link to reset your password</span>

                <div className="bottom">
                    <span className='link' onClick={ResendPasswordResetLink}>Resend Verification Link</span>
                    <span>Wrong email address? {' '}
                        <span className='link' onClick={()=> navigate('/login') }>Back to signup</span>
                    </span>
                </div>
                
            </EmailNotificationLeftSection>
            <EmailNotificationRightSection>
                <span><MdEmail /></span>
            </EmailNotificationRightSection>
            <LoginToast  
                        showToast={showToast} 
                        setShowToast={setShowToast} 
                        toastMessage={toastMessage}
                    />   
        </NotificationContainer >
    )
}

export default EmailNotification