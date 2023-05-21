import React, { useRef, useState, useEffect } from "react"
import { DonateButton, DonationFormContainer, DonationForms,
         DonationInputField,
         DonationInputLabel, FieldWrapper} from "./DonorStyles"
import { RoleContainer } from "../CreateAccount/CreateAccountStyles"
import { Heading } from "../Login/LoginStyles"
import { BiDonateHeart } from "react-icons/bi"
import { TextWrapper } from "../CharityPage/CharityStyles"
import { BASE_URL } from "../Shared_util/Constants/Base_URL"

function MakeDonation() {
    const organisationRef: any = useRef('');
    const locationRef : any = useRef('');
    const descriptionRef : any = useRef('')
    const [type, setType] = useState('Generic');


    const handleDonationType = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    }

    const handleDonation = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const user = sessionStorage.getItem('currentUser') 
            const accesstoken = localStorage.getItem('accesstoken')

            if(user && accesstoken){
                const response = await fetch(`${BASE_URL}/donors/${JSON.parse(user)}`,{
                    method : 'GET',
                    headers : {
                        'Authorization' : `Bearer ${JSON.parse(accesstoken)}` ,
                        'content-type':'application/json'
                    },
                })

                const results = await response.json()
                const donor = results.data.donor
                const donatedBy = `${donor.firstName} ${donor.lastName}`
                
                // generates donation id
                const donationId = `${donor._id.slice(-5)}${Date.now().toString().slice(-10)}`
                console.log(donatedBy, donationId)
                
            }

        }catch(error){
            console.log(error)
        }

    }

    useEffect(()=>{
        console.log("Page is rendered")
    },[type])
    

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
                            onChange={handleDonationType}>
                                    <option value="" defaultValue={'Select'} disabled>Select donation type</option>
                                    <option value="Generic">Generic</option>
                                    <option value="Specific">Specific</option>
                        </RoleContainer>
                    </FieldWrapper>

                    <FieldWrapper className={`field ${type==="Generic" ? 'disabled' : ''}`}>
                        <DonationInputLabel>Donate To</DonationInputLabel>
                        <DonationInputField 
                            type="text" 
                            ref={organisationRef}
                            />
                    </FieldWrapper >
                    <FieldWrapper className="field">
                        <DonationInputLabel>Location</DonationInputLabel>
                        <DonationInputField type="text" ref={locationRef}/>
                    </FieldWrapper>

                    <FieldWrapper className="field">
                        <DonationInputLabel>Upload image of items</DonationInputLabel>
                        <DonationInputField type="file" style={{'height' : '40px'}}/>
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