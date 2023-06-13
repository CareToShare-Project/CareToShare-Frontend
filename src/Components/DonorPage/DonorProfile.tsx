import React, {useEffect, useRef, useState} from "react"
import {EditProfileHeading, EditProfileWrapper,
        FormsWrapper, LeftPanel, RightPanel,Wrapper, FieldContainer, 
        Label, Field, UpdateBtn, ProfilePhotoWrapper} from "./DonorStyles"
import bg from "../HomePage/images/backgroundImage.jpg"
import { FaUserCircle } from "react-icons/fa"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../Shared_util/Constants/Base_URL"
import LoginToast from "../Shared_util/Toast/LoginToast"


function DonorProfile(){
    const {username} = useParams();
    const [imageUrl, setImageUrl] = useState("")

    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)

    // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')

    const firstNameRef = useRef<any>()
    const lastNameRef = useRef<any>()
    const emailRef = useRef<any>()
    const phoneRef = useRef<any>()
    const locationRef = useRef<any>()

    // fetches user details and displays in the field inputs
    const fetchUserDetails = async() => {
        try{
            const response = await fetch(`${BASE_URL}/donors/${username}`,{
                method : 'GET',
                headers : {'content-type':'application/json'},
            })

            const results = await response.json();
            const donorDetails = results.data.donor
            console.log()
            const {email, firstName, lastName, location, contact , photo} = donorDetails

            setImageUrl(photo)

            firstNameRef.current.value = firstName
            lastNameRef.current.value = lastName
            emailRef.current.value = email
            locationRef.current.value = location
            phoneRef.current.value = contact

        
        }
        catch(error){
            console.log(error)
        }
    }

    const UpdateUserProfile = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            const user = {
                firstName : firstNameRef.current.value,
                lastName : lastNameRef.current.value,
                email : emailRef.current.value,
                location: locationRef.current.value,
                contact : phoneRef.current.value
            }
            const response = await fetch(`${BASE_URL}/donors/${username}`,{
                method : 'PATCH',
                headers : {'content-type':'application/json'},
                body : JSON.stringify(user)
            })

            const results = await response.json()
            if(results.status === "success"){
                setToastMessage("You have successfully updated your profile")
                setShowToast(true)
            }

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchUserDetails()
    })
    

    return(
        <Wrapper>
            <EditProfileWrapper>
                <FormsWrapper>
                    <LeftPanel>
                        {imageUrl ? <ProfilePhotoWrapper /> : <FaUserCircle size={100} /> }
                        <span>{username}</span>
                    </LeftPanel>
                    <RightPanel onSubmit={UpdateUserProfile}>
                        <EditProfileHeading>Account Settings</EditProfileHeading>
                        
                           <FieldContainer>
                                <Label htmlFor="first">First Name</Label>
                                <Field type="text" id="first" ref={firstNameRef}/>
                           </FieldContainer>
                           <FieldContainer>
                                <Label htmlFor="last">Last Name</Label>
                                <Field type="text" id="last" ref={lastNameRef}/>
                           </FieldContainer>
                        
                        
                           <FieldContainer>
                                <Label htmlFor="phone">Phone</Label>
                                <Field type="text" id="phone" ref={phoneRef}/>
                           </FieldContainer>
                           <FieldContainer>
                                <Label htmlFor="email">Email Address</Label>
                                <Field type="text" id="email" ref={emailRef}/>
                           </FieldContainer>
                        
                        
                           <FieldContainer>
                                <Label htmlFor="location">Location</Label>
                                <Field type="text" id="location" ref={locationRef}/>
                           </FieldContainer>
                        
                        <UpdateBtn>Update</UpdateBtn>
                    </RightPanel>
                    <LoginToast  
                            showToast={showToast} 
                            setShowToast={setShowToast} 
                            toastMessage={toastMessage}
                        />   
                </FormsWrapper>
            </EditProfileWrapper>
        </Wrapper>
    )
}

export default DonorProfile