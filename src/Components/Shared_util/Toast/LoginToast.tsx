import React from "react";
import Toast from 'react-bootstrap/Toast'
import { LoginToastProps } from "../Constants/Types";
import { LoginToastWrapper } from "./ToastStyles";

const LoginToast: React.FC<LoginToastProps> = ({showToast, setShowToast, toastMessage}) => {


    return(
        <LoginToastWrapper>
            <Toast 
                onClose= {() => setShowToast(false)}
                show={showToast}
                delay={5000}
                bg='neutral'
                autohide
                className="toast">
                    <Toast.Body className="toast-body">
                        {toastMessage}
                    </Toast.Body>
            </Toast>
        
        </LoginToastWrapper>
        )
}

export default LoginToast;