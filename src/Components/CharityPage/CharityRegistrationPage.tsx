import React, {useRef, useState } from 'react'
import '../Shared_Styles/General/Styles.css'
import { RegistrationWrapper, RegistrationContainer, FieldWrapper,
        InputLabel, InputField, RegistrationHeader, ConfirmButton } from '../DonorPage/DonorStyles';
import { TextWrapper } from './CharityStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { uploadImage as fileUpload, uploadFileToStorageBucket } from '../Shared_util/Constants/Functions';
import BackgroundSVG from '../Shared_util/SVG/Background';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import { Spinner } from 'react-bootstrap';
import LoginToast from '../Shared_util/Toast/LoginToast';




function CharityRegistrationPage() {
    const [cert, setCert] = useState<any>()
    const [certUrl, setCertUrl] = useState("")
    const [imageUpload, setImageUpload] = useState<any>()
    const [imageUrl, setImageUrl] = useState("")
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [showLoading, setShowLoading] = useState(false)

    // references to input field
    const organisationRef: any = useRef();
    const missionRef: any = useRef();
    const contactRef: any = useRef();
    const locationRef: any = useRef();

    const username = useParams().username;
    const navigate = useNavigate();
    
    //handle user update
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowLoading(true);
        uploadFileToStorageBucket(imageUpload, setImageUrl, "profile-photos");

        
        setTimeout(async () => {

            if (imageUrl === "" && imageUpload !== null) {
                uploadFileToStorageBucket(imageUpload, setImageUrl, "profile-photos");
                uploadFileToStorageBucket(cert, setCertUrl, "certificate")
                setToastMessage("Confirm submission")
                setShowToast(true)
                setShowLoading(false)
                return;
            } else {
                try {
                    const userDetails = {
                        organisationName: organisationRef.current.value,
                        mission: missionRef.current.value,
                        contact: contactRef.current.value,
                        location: locationRef.current.value,
                        photo: imageUrl || 'no image',
                        businessCertificate: certUrl || 'no cert'
                    }

                    const response = await fetch(`${BASE_URL}/organisations/${username}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(userDetails)

                    })

                    const results = await response.json()
                    if (results.status === 'success') {
                        setToastMessage("Successfully created an account")
                        setShowToast(true)
                        setTimeout(()=>{
                            navigate('/login')
                        }, 3000)
                        
                    } else {
                        setToastMessage("An error occured. Try again")
                        setShowToast(true)
                        setShowLoading(false)
                    }

                } catch (err) {
                    console.log("an error occured")
                    setShowLoading(false)
                }
            }
        }, 7000)

    }


   

  


    return (
        <>
            <RegistrationWrapper className='centered'>
                <BackgroundSVG />
                <form onSubmit={handleSubmit}>
                    <RegistrationContainer>
                        <RegistrationHeader>
                            Set up profile
                        </RegistrationHeader>
                        <FieldWrapper>
                            <InputLabel htmlFor='organization'>Name of Organisation</InputLabel>
                            <InputField type='text' id='organization'  required ref={organisationRef}/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='location'>Location</InputLabel>
                            <InputField type='text' id='location'  required ref={locationRef}/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='contact'>Contact</InputLabel>
                            <InputField type='tel' id='contact'  required ref={contactRef}/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='file'>Upload Business Certificate</InputLabel>
                            <InputField 
                                type='file' 
                                id='file' 
                                accept='.pdf'
                                onChange={((e)=>fileUpload(e, setCert))}
                                />
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='photo'>Upload your profile photo</InputLabel>
                            <InputField 
                                type='file' 
                                id='photo' 
                                accept='.jpeg .png .jpg'
                                onChange={((e)=>fileUpload(e, setImageUpload))}
                                />
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor='missions'>Briefly describe the organization's mission</InputLabel>
                            <TextWrapper defaultValue={''} ref={missionRef}></TextWrapper>
                        </FieldWrapper>
                        {imageUrl ?
                            <ConfirmButton>
                                Confirm {showLoading && <Spinner animation='border' size="sm" className='spinner'  />}
                            </ConfirmButton> :
                            <ConfirmButton>
                                Save {showLoading && <Spinner animation='border' size="sm" className='spinner'  />}
                            </ConfirmButton>
                        }
                        <LoginToast
                            showToast={showToast}
                            setShowToast={setShowToast}
                            toastMessage={toastMessage}
                        />
                    </RegistrationContainer>
                </form>
            </RegistrationWrapper>
        </>
    )
}

export default CharityRegistrationPage;