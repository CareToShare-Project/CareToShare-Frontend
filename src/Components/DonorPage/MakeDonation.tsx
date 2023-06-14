import React, { useRef, useState, useEffect } from "react"
import { DonateButton, DonationFormContainer, DonationForms,
         DonationInputField,
         DonationInputLabel, FieldWrapper} from "./DonorStyles"
import { RoleContainer } from "../CreateAccount/CreateAccountStyles"
import { Heading } from "../Login/LoginStyles"
import { BiDonateHeart } from "react-icons/bi"
import { TextWrapper } from "../CharityPage/CharityStyles"
import { BASE_URL } from "../Shared_util/Constants/Base_URL"
import {v4} from "uuid"
import { uploadImage, uploadFileToStorageBucket } from "../Shared_util/Constants/Functions";
import { getAllOrganisations } from "../Shared_util/Constants/Functions"
import Select from 'react-select';
import { OrganisationProps } from "../Shared_util/Constants/Types"
import { useNavigate } from "react-router-dom"


function MakeDonation() {
    const organisationRef: any = useRef('');
    const locationRef : any = useRef('');
    const descriptionRef : any = useRef('')
    const [donationType, setDonationType] = useState('Generic');
    const [imageUpload, setImageUpload] = useState<any>()
    const [imageUrl, setImageUrl] = useState("")
    
    const navigate = useNavigate()

    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)

    const [organisations, setOrganisations] = useState<OrganisationProps[]>([])
    const [selectedOrganization, setSelectedOrganization] = useState<OrganisationProps>();

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)

    const handleChange = (selectedOption: any) => {
        setSelectedOrganization(selectedOption);
    };

    const handleDonationType = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setDonationType(e.target.value);
        console.log(e.target.value)
    }



    const handleDonation = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            uploadFileToStorageBucket(imageUpload, setImageUrl , "donationImages")
            
            const donationId = v4();
            if(donationType === 'Generic'){
                organisationRef.current.value = ""
            }
            const donation = {
                    donatedBy : userDetails.username,
                    donationId : donationId,
                    donationType : donationType,
                    description : descriptionRef.current.value,
                    location : locationRef.current.value,
                    itemPhoto : imageUrl,
                    donatedTo : organisationRef.current.value
                }
                
            const response = await fetch(`${BASE_URL}/donations`, {
                    method : 'POST',
                    headers : {
                        'content-type' : 'application/json',
                        'authorization' : `Bearer ${accessToken}`
                    },
                    body : JSON.stringify(donation)
                })

                if(response.status === 401){
                    navigate('/login')
                    return
                }

                const results = await response.json()
                console.log(results)
                    
            }
            catch(error){
                console.log(error)
            }

    }

    // gets all organisations on page load
    useEffect(()=>{
        const results = sessionStorage.getItem('organisations')
        if(results !== null) {
            const availableOrganisations = JSON.parse(results);
            setOrganisations(availableOrganisations)
        }else{
            getAllOrganisations(setOrganisations, "", "");
        }
    },[])
    

    return (
        <DonationFormContainer>
            <DonationForms onSubmit={handleDonation}>
                <Heading>
                    Donate now <BiDonateHeart />
                </Heading>
                <div>
                    <FieldWrapper style={{'width' : '100%'}}>
                        <DonationInputLabel>Type</DonationInputLabel>
                        <RoleContainer 
                            id="options"  
                            style={{'border' : '2px solid #3A1078'}} 
                            required
                            onChange={handleDonationType}>
                                    <option value="" defaultValue={'Select'} disabled>Select donation type</option>
                                    <option value="Generic">Generic</option>
                                    <option value="Specific">Specific</option>
                        </RoleContainer>
                    </FieldWrapper>

                    <FieldWrapper className={`field ${donationType==="Generic" ? 'disabled' : ''}`}>
                        <DonationInputLabel>Donate To</DonationInputLabel>
                        <Select
                            value={selectedOrganization}
                            onChange={handleChange}
                            options={organisations}
                            getOptionLabel={(org) => org.organisationName}
                            getOptionValue={(org) => org.username}
                            placeholder="Select an organization"
                        />
                    </FieldWrapper >
                    <FieldWrapper className="field">
                        <DonationInputLabel>Location</DonationInputLabel>
                        <DonationInputField type="text" ref={locationRef} />
                    </FieldWrapper>

                    <FieldWrapper className="field">
                        <DonationInputLabel>Upload image of items</DonationInputLabel>
                        <DonationInputField 
                            type="file" style={{'height' : '40px'}} 
                            onChange={(e)=>uploadImage(e, setImageUpload)}/>
                    </FieldWrapper>

                    <FieldWrapper className="field">
                            <DonationInputLabel htmlFor='description'>Description of items</DonationInputLabel>
                            <TextWrapper 
                                className="text-field"
                                defaultValue={''}
                                ref={descriptionRef}>
                            </TextWrapper>
                    </FieldWrapper>
                    <DonateButton className="donate-btn">Donate</DonateButton>
                </div>
            </DonationForms>
        </DonationFormContainer>
    )
}

export default MakeDonation