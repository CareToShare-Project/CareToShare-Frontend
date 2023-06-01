import React, { useEffect, useState } from 'react'
import '../Shared_Styles/General/Styles.css'
import { RegistrationWrapper, RegistrationContainer, FieldWrapper,
        InputLabel, InputField, RegistrationHeader, ConfirmButton } from '../DonorPage/DonorStyles';
import { TextWrapper } from './CharityStyles';
import { useParams } from 'react-router-dom';
import { uploadImage as fileUpload, uploadFileToStorageBucket } from '../Shared_util/Constants/Functions';




function CharityRegistrationPage() {
    const { username } = useParams()
    console.log(username)

    // tracks organisation certificate states
    const [cert, setCert] = useState<any>()
    const [certUrl, setCertUrl] = useState("")

    //tracks organisation profile photo states
    const [imageUpload, setImageUpload] = useState<any>()
    const [imageUrl, setImageUrl] = useState("")


    const handleSubmit = async (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const uploadCertificate = uploadFileToStorageBucket(cert, setCertUrl, "certificates")
        const uploadPhoto = uploadFileToStorageBucket(imageUpload, setImageUrl, "profile-photos")
        console.log(uploadCertificate, uploadPhoto)
     
    }

    useEffect(()=>{
        console.log("files uploaded to firebase successfully")
    }, [certUrl, imageUrl])


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
                                onChange={((e)=>fileUpload(e, setCert))}
                                required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='photo'>Upload your profile photo</InputLabel>
                            <InputField 
                                type='file' 
                                id='photo' 
                                accept='.jpeg .png .jpg'
                                onChange={((e)=>fileUpload(e, setImageUpload))}
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