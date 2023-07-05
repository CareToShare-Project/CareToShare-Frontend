import React, { useEffect, useRef, useState } from "react"
import {
    EditProfileHeading, EditProfileWrapper,
    FormsWrapper, LeftPanel, RightPanel, Wrapper, FieldContainer,
    Label, Field, UpdateBtn, ProfilePhotoWrapper
} from "../DonorPage/DonorStyles"
import { FaUserCircle } from "react-icons/fa"
import { BASE_URL } from "../Shared_util/Constants/Base_URL"
import LoginToast from "../Shared_util/Toast/LoginToast"
import { useNavigate } from "react-router-dom"
import { Spinner } from "react-bootstrap"


function CharityProfile() {

    const [imageUrl, setImageUrl] = useState("")
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [showLoading, setShowLoading] = useState(false)

    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)

    const organisationNameRef = useRef<any>(userDetails.organisationName)
    const emailRef = useRef<any>(userDetails.email)
    const phoneRef = useRef<any>(userDetails.contact)
    const locationRef = useRef<any>(userDetails.location)

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData);

    const navigate = useNavigate()



    // fetches user details and displays in the field inputs
    const fetchUserDetails = async () => {
        try {
            const response = await fetch(`${BASE_URL}/organisations/${userDetails.username}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${accessToken}`
                },
            })

            if (response.status === 401) return navigate('/login')

            setImageUrl(userDetails.photo)

            const results = await response.json();
            const organisationDetails = results.data
            
            const {email, location, contact, organisationName} = organisationDetails
            
            organisationNameRef.current.value = organisationName
            emailRef.current.value = email
            locationRef.current.value = location
            phoneRef.current.value = contact


        }
        catch (error) {
            return;
        }
    }

    const UpdateUserProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setShowLoading(true)
        try {
            const user = {
                email: emailRef.current.value,
                location: locationRef.current.value,
                contact: phoneRef.current.value
            }
            const response = await fetch(`${BASE_URL}/organisations/${userDetails.username}`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(user)
            })

            const results = await response.json()
            if (results.status === "success") {
                setToastMessage("You have successfully updated your profile")
                setShowToast(true)
                setTimeout(() => {
                    navigate("/login/organisation")
                    sessionStorage.setItem('page', JSON.stringify(''))
                }, 2000)
            }

        } catch (error) {
            setToastMessage("An error occured try again later")
            setShowToast(true)
            setShowLoading(false)
        }
    }

    useEffect(() => {
        fetchUserDetails()
    })


    return (
        <Wrapper>
            <EditProfileWrapper>
                <FormsWrapper>
                    <LeftPanel>
                        {imageUrl ? <ProfilePhotoWrapper src={userDetails.photo} /> : <FaUserCircle size={100} />}
                        <span>{userDetails.username}</span>
                    </LeftPanel>
                    <RightPanel onSubmit={UpdateUserProfile}>
                        <EditProfileHeading>Account Settings</EditProfileHeading>
                        <FieldContainer>
                            <Label htmlFor="phone">Name of Organisation</Label>
                            <Field type="text" id="phone" ref={organisationNameRef} />
                        </FieldContainer>
                        <FieldContainer>
                            <Label htmlFor="phone">Phone</Label>
                            <Field type="text" id="phone" ref={phoneRef} />
                        </FieldContainer>
                        <FieldContainer>
                            <Label htmlFor="email">Email Address</Label>
                            <Field type="text" id="email" ref={emailRef} />
                        </FieldContainer>


                        <FieldContainer>
                            <Label htmlFor="location">Location</Label>
                            <Field type="text" id="location" ref={locationRef} />
                        </FieldContainer>

                        <UpdateBtn>Update {showLoading && <Spinner animation='border' size="sm" className='spinner' />}</UpdateBtn>
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

export default CharityProfile;