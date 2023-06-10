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
import { useParams } from "react-router-dom"
import { getAllOrganisations } from "../Shared_util/Constants/Functions"

function MakeDonation() {
    const organisationRef: any = useRef('');
    const locationRef : any = useRef('');
    const descriptionRef : any = useRef('')
    const [donationType, setDonationType] = useState('Generic');
    const [imageUpload, setImageUpload] = useState<any>()
    const [imageUrl, setImageUrl] = useState("")

    const {username} = useParams()
    
    const [organisations, setOrganisations] = useState<any>([])

    const handleDonationType = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setDonationType(e.target.value);
        console.log(e.target.value)
    }



    const handleDonation = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const image = uploadFileToStorageBucket(imageUpload, setImageUrl , "donationImages")
            console.log(image)
            const donationId = v4();
            if(donationType === 'Generic'){
                organisationRef.current.value = ""
            }
            const donation = {
                    donatedBy : username,
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
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(donation)
                })

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
            getAllOrganisations(setOrganisations);
        }
    },[])
    

    return (
        <DonationFormContainer>
            <DonationForms onSubmit={handleDonation}>
                <Heading style={{'color' : '#3A1078'}}>
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
                        <select className="ui search dropdown" ref={organisationRef}>
                            <option value="">Organisation</option>
                            {organisations.map((organisation: any) => {
                                return <option value={organisation.organisationName} key={organisation.organisationName}>
                                            {organisation.organisationName}
                                        </option>
                            })}
                        </select>
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