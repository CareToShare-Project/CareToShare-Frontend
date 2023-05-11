import React, { useState } from 'react'
import '../Shared_Styles/General/Styles.css'
import { RegistrationWrapper, RegistrationContainer, FieldWrapper,
        InputLabel, InputField, RegistrationHeader, ConfirmButton } from '../DonorPage/DonorStyles';
import { TextWrapper } from './CharityStyles';
import { useParams } from 'react-router-dom';
import { convertToBase64 } from '../Shared_util/Constants/Functions';





function CharityRegistrationPage() {
    const [fileUpload, setFileUpload] = useState({})
    const email = useParams()
    console.log(email)

  
    const handleFileUpload = async (e : React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files
        if(file){
            console.log(file[0])
            const base64  = await convertToBase64(file[0])
            console.log(base64)
            setFileUpload({...fileUpload, myFile : base64})
        }
        
    }

    const handleSubmit = async (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
     
}


    return (
        <>
            <RegistrationWrapper className='body-container'>
                <form onSubmit={handleSubmit}>
                    <RegistrationContainer>
                        <RegistrationHeader>
                            Set up profile
                        </RegistrationHeader>
                        <FieldWrapper>
                            <InputLabel htmlFor='organization'>Name of Organization</InputLabel>
                            <InputField type='text' id='organization'  required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='location'>Location</InputLabel>
                            <InputField type='text' id='location'  required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='contact'>Contact</InputLabel>
                            <InputField type='tel' id='contact'  required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='file'>Upload Business Certificate</InputLabel>
                            <InputField 
                                type='file' 
                                id='file' 
                                accept='.pdf'
                                required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='photo'>Upload your profile photo</InputLabel>
                            <InputField 
                                type='file' 
                                id='photo' 
                                accept='.jpeg .png .jpg'
                                onChange={handleFileUpload}
                                required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='missions'>Briefly describe the organization's mission</InputLabel>
                            <TextWrapper defaultValue={''}></TextWrapper>
                        </FieldWrapper>
                        <ConfirmButton>Confirm</ConfirmButton>

                    </RegistrationContainer>
                </form>
            </RegistrationWrapper>
        </>
    )
}

export default CharityRegistrationPage;