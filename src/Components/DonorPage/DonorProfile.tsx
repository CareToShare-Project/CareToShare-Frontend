import React, {useEffect, useRef, useState} from "react"
import { BackgroundImage, EditProfileHeading, EditProfileWrapper,
        FormsWrapper, LeftPanel, RightPanel, Row, Wrapper, FieldContainer, 
        Label, Field, UpdateBtn, ProfilePhotoWrapper, ImageField} from "./DonorStyles"
import bg from "../HomePage/images/backgroundImage.jpg"
import { FaUserCircle } from "react-icons/fa"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../Shared_util/Constants/Base_URL"


function DonorProfile(){
    const {username} = useParams();
    const [imageUrl, setImageUrl] = useState("")

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

    useEffect(()=>{
        fetchUserDetails()
    },[])
    

    return(
        <Wrapper>
            <EditProfileWrapper>
                <BackgroundImage src={bg} alt="bg"/>
                <h4 className="heading">Edit Profile</h4>
                <FormsWrapper>
                    <LeftPanel>
                        {imageUrl ? <ProfilePhotoWrapper /> : <FaUserCircle size={100} /> }
                        <span>{username}</span>
                    </LeftPanel>
                    <RightPanel>
                        <EditProfileHeading>Account Settings</EditProfileHeading>
                        <Row>
                           <FieldContainer>
                                <Label htmlFor="first">First Name</Label>
                                <Field type="text" id="first" ref={firstNameRef}/>
                           </FieldContainer>
                           <FieldContainer>
                                <Label htmlFor="last">Last Name</Label>
                                <Field type="text" id="last" ref={lastNameRef}/>
                           </FieldContainer>
                        </Row>
                        <Row>
                           <FieldContainer>
                                <Label htmlFor="phone">Phone</Label>
                                <Field type="text" id="phone" ref={phoneRef}/>
                           </FieldContainer>
                           <FieldContainer>
                                <Label htmlFor="email">Email Address</Label>
                                <Field type="text" id="email" ref={emailRef}/>
                           </FieldContainer>
                        </Row>
                        <Row>
                           <FieldContainer>
                                <Label htmlFor="location">Location</Label>
                                <Field type="text" id="location" ref={locationRef}/>
                           </FieldContainer>
                           <FieldContainer>
                                <Label htmlFor="profile">Change Profile Photo</Label>
                                <ImageField type="file" id="profile" ref={locationRef}/>
                           </FieldContainer> 
                        </Row>
                        <UpdateBtn>Update</UpdateBtn>
                    </RightPanel>
                </FormsWrapper>
            </EditProfileWrapper>
        </Wrapper>
    )
}

export default DonorProfile