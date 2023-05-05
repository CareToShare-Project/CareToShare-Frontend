import React, { useRef, useEffect } from "react";
import { FieldWrapper, InputField, InputLabel, RegistrationContainer, 
            RegistrationHeader, RegistrationWrapper, ConfirmButton } from "./DonorStyles";
import { useParams } from "react-router-dom";
import '../Shared_Styles/Donor/DonorStyles.css'
import '../Shared_Styles/General/Styles.css'
//import { BASE_URL } from "../Shared_util/Constants/Base_URL";


function DonorRegistrationPage(){
    // references to input field
   const firstNameRef: any = useRef();
   const lastNameRef: any = useRef();
   const contactRef: any = useRef();
   const locationRef : any = useRef();
   const photoRef : any = useRef();

   const email = useParams();
   console.log(email)

   // navigation
   //const navigate = useNavigate();


    useEffect(()=> {
        console.log("Page is rendered")
    }, [])

    

   // handle forms submission
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     try {
    //     if(firstNameRef && lastNameRef && userNameRef && emailRef && passwordRef && confirmPasswordRef&& contactRef && locationRef) {
    //             const userDetails: DonorRegistrationProps['details'] = {
    //                 firstName : firstNameRef.current.value,
    //                 lastName : lastNameRef.current.value,
    //                 username : userNameRef.current.value,
    //                 email : emailRef.current.value,
    //                 password : passwordRef.current.value,
    //                 passwordConfirm : confirmPasswordRef.current.value,
    //                 contact : contactRef.current.value,
    //                 location : locationRef.current.value
    //                 }
                
    //             //console.log(userDetails)
    //         const response = await fetch(`${BASE_URL}/donors/signUp`,{
    //             method : 'POST',
    //             headers : {'content-type':'application/json'},
    //             body : JSON.stringify(userDetails)

    //         })

    //         const data = await response.json()
    //         const user = data.data.user
    //         if(user){
    //             console.log(user)
    //             navigate('/donor')
    //         }
                
    //     }
    //     }catch(err){
    //         console.log(err)
    //     }          
    // }


   
    return (
        
        <RegistrationWrapper className="body-container">
            <form>
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
                            <InputField type="file" id="photo"  ref={photoRef} />
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