import React, { useRef, useEffect, useState } from "react";
import { FieldWrapper, InputField, InputLabel, RegistrationContainer, 
            RegistrationHeader, RegistrationWrapper, ConfirmButton } from "./DonorStyles";
import { useParams, useNavigate} from "react-router-dom";
import '../Shared_Styles/Donor/DonorStyles.css'
import '../Shared_Styles/General/Styles.css'
import { BASE_URL } from "../Shared_util/Constants/Base_URL";
import { storage } from "../Shared_util/Constants/FireBase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"


function DonorRegistrationPage(){
    // references to input field
   const firstNameRef: any = useRef();
   const lastNameRef: any = useRef();
   const contactRef: any = useRef();
   const locationRef : any = useRef();

   const [imageUpload, setImageUpload] = useState<any>()
   const [imageUrl, setImageUrl] = useState("")

   const username = useParams().username;
   console.log(username)

   // navigation
   const navigate = useNavigate();


    // handles file upload 
    const uploadImage = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files === null) return
        setImageUpload(e.target.files[0] )
    }

    // uploads file to the firebase storage
    const uploadFileToStorageBucket = () => {
        if(imageUpload === null) return;
        const imageRef = ref(storage, `profile-photos/${imageUpload.name + v4() }`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url)=> {
                setImageUrl(url)
            })
        })

        return "successfully uploaded";
    


    }


   //handle user update
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const message = uploadFileToStorageBucket()
            console.log(message)
            if(firstNameRef && lastNameRef && contactRef && locationRef && imageUrl) {
                    const userDetails = {
                        firstName : firstNameRef.current.value,
                        lastName : lastNameRef.current.value,
                        contact : contactRef.current.value,
                        location : locationRef.current.value,
                        photo : imageUrl
                        }
 
            //console.log(userDetails)
            const response = await fetch(`${BASE_URL}/donors/${username}`,{
                method : 'PATCH',
                headers : {
                        'content-type':'application/json', 
                    },
                body : JSON.stringify(userDetails)

            })

            const results = await response.json()
            if(results.status !== 'error') {
                const updatedDonor = results.data.user;
                console.log(updatedDonor)
                navigate('/login')
            }else{
                console.log('an error occured')
            }
                
        }
        }catch(err){
            console.log(err)
        }          
    }

    useEffect(()=> {
        console.log("Page is rendered")
        console.log(imageUpload) 
    }, [imageUpload])


   
    return (
        
        <RegistrationWrapper className="body-container">
            <form onSubmit={handleSubmit}>
                <RegistrationContainer>
                    <RegistrationHeader>Set up your profile</RegistrationHeader>
                    <FieldWrapper>
                        <InputLabel htmlFor="firstName">FirstName</InputLabel>
                       <InputField type="text" id="firstName" name="firstName" ref={firstNameRef} required/>
                    </FieldWrapper>
                    <FieldWrapper>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <InputField type="text" id="lastName" ref={lastNameRef}   required/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="phone">Phone Number</InputLabel>
                            <InputField type="tel" id="phone"  ref={contactRef} required/>
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
                                onChange={uploadImage}
                                accept=".jpeg .png .jpg" />
                    </FieldWrapper>
                    <ConfirmButton>
                        Confirm  
                    </ConfirmButton>
                </RegistrationContainer>
            </form>
            {imageUrl && 
                <img src={imageUrl} alt="hello" width='200px' height="200px" style={{'borderRadius' : '50%'}}/>}
        </RegistrationWrapper>
    )
}

export default DonorRegistrationPage;