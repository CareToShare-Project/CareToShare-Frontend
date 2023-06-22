import React, { useRef, useState } from "react";
import {
    FieldWrapper, InputField, InputLabel, RegistrationContainer,
    RegistrationHeader, RegistrationWrapper, ConfirmButton
} from "./DonorStyles";
import { useParams, useNavigate } from "react-router-dom";
import '../Shared_Styles/Donor/DonorStyles.css'
import '../Shared_Styles/General/Styles.css'
import { BASE_URL } from "../Shared_util/Constants/Base_URL";
import { uploadImage, uploadFileToStorageBucket } from "../Shared_util/Constants/Functions";
import BackgroundSVG from "../Shared_util/SVG/Background";
import { Spinner } from "react-bootstrap";
import LoginToast from "../Shared_util/Toast/LoginToast";


function DonorRegistrationPage() {
    // references to input field
    const firstNameRef: any = useRef();
    const lastNameRef: any = useRef();
    const contactRef: any = useRef();
    const locationRef: any = useRef();

    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [showLoading, setShowLoading] = useState(false)
    const [imageUpload, setImageUpload] = useState<any>(null)
    const [imageUrl, setImageUrl] = useState("")

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
                setToastMessage("Confirm submission")
                setShowToast(true)
                setShowLoading(false)
                return;
            } else {
                try {
                    const userDetails = {
                        firstName: firstNameRef.current.value,
                        lastName: lastNameRef.current.value,
                        contact: contactRef.current.value,
                        location: locationRef.current.value,
                        photo: imageUrl
                    }

                    const response = await fetch(`${BASE_URL}/donors/${username}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(userDetails)

                    })

                    const results = await response.json()
                    if (results.status === 'success') {
                        const updatedDonor = results.data.user;
                        console.log(updatedDonor)
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
        }, 2000)

    }






    return (

        <RegistrationWrapper className="centered">
            <BackgroundSVG />
            <form onSubmit={handleSubmit}>
                <RegistrationContainer>
                    <RegistrationHeader>Set up your profile</RegistrationHeader>
                    <FieldWrapper>
                        <InputLabel htmlFor="firstName">FirstName</InputLabel>
                        <InputField type="text" id="firstName" name="firstName" ref={firstNameRef} required />
                    </FieldWrapper>
                    <FieldWrapper>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <InputField type="text" id="lastName" ref={lastNameRef} required />
                    </FieldWrapper>
                    <FieldWrapper>
                        <InputLabel htmlFor="phone">Phone Number</InputLabel>
                        <InputField type="tel" id="phone" ref={contactRef} required />
                    </FieldWrapper>
                    <FieldWrapper>
                        <InputLabel htmlFor="location">Location</InputLabel>
                        <InputField type="text" id="location" ref={locationRef} />
                    </FieldWrapper>
                    <FieldWrapper>
                        <InputLabel htmlFor="photo">Profile Photo</InputLabel>
                        <InputField
                            type="file"
                            id="photo"
                            onChange={(e) => uploadImage(e, setImageUpload)}
                            accept=".jpeg .png .jpg" />
                    </FieldWrapper>
                    {
                       imageUrl ? 
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
    )
}

export default DonorRegistrationPage;