import React, { useRef, useEffect, useState } from "react";
import { FieldWrapper, InputField, InputLabel, RegistrationContainer, 
            RegistrationHeader, RegistrationWrapper, ConfirmButton } from "./DonorStyles";
import { useParams, useNavigate} from "react-router-dom";
import '../Shared_Styles/Donor/DonorStyles.css'
import '../Shared_Styles/General/Styles.css'
import { convertToBase64 } from "../Shared_util/Constants/Functions";
import { BASE_URL } from "../Shared_util/Constants/Base_URL";


function DonorRegistrationPage(){
    // references to input field
   const firstNameRef: any = useRef();
   const lastNameRef: any = useRef();
   const contactRef: any = useRef();
   const locationRef : any = useRef();
   const photoRef : any = useRef();

   const [uploadedFile, setFileUpload] = useState<string>('')

   const username = useParams().username;
   console.log(username)

   // navigation
   const navigate = useNavigate();

   const handleFileUpload = async (e : React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files
    if(file){
        console.log(file[0])
        const base64 = await convertToBase64(file[0])
        setFileUpload(JSON.stringify(base64))
    }
    
}

    useEffect(()=> {
        console.log("Page is rendered")
    }, [])

    

   //handle forms submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        if(firstNameRef && lastNameRef && contactRef && locationRef) {
                const userDetails = {
                    firstName : firstNameRef.current.value,
                    lastName : lastNameRef.current.value,
                    contact : contactRef.current.value,
                    location : locationRef.current.value,
                    photo : uploadedFile
                    }
                
                //console.log(userDetails)
            const response = await fetch(`${BASE_URL}/donors/${username}`,{
                method : 'PATCH',
                headers : {'content-type':'application/json'},
                body : JSON.stringify(userDetails)

            })

            const results = await response.json()
            const updatedDonor = results.data.user;
            if(results){
                console.log(updatedDonor)
                navigate('/login')
            }
                
        }
        }catch(err){
            console.log(err)
        }          
    }


   
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
                                ref={photoRef} 
                                onChange={handleFileUpload}
                                accept=".jpeg .png .jpg" />
                    </FieldWrapper>
                    <ConfirmButton>
                        Confirm  
                    </ConfirmButton>
                    
                    
                </RegistrationContainer>
            </form>
        </RegistrationWrapper>
    )
}

export default DonorRegistrationPage;