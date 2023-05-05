import React from 'react'
import { AlertProps } from '../Constants/Types'
import Alert from 'react-bootstrap/Alert'

const AlertComponent : React.FC <AlertProps> = ({message, variant}) => {

    return(
        <>
            <Alert variant={variant} dismissible>
                <h4>{message}</h4>
            </Alert>
    </>
    )
}

export default AlertComponent;