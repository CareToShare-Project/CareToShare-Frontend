import React from "react"
import { DonateButton, DonationFormContainer, DonationForms,
         DonationInputField,
         DonationInputLabel, FieldWrapper} from "./DonorStyles"
import { RoleContainer } from "../CreateAccount/CreateAccountStyles"
import { Heading } from "../Login/LoginStyles"
import { BiDonateHeart } from "react-icons/bi"
import { TextWrapper } from "../CharityPage/CharityStyles"

function MakeDonation() {
    return (
        <DonationFormContainer>
            <DonationForms>
                <Heading style={{'color' : '#3A1078'}}>Donate now <BiDonateHeart /></Heading>
                <div>
                <FieldWrapper style={{'width' : '100%'}}>
                        <DonationInputLabel>Type</DonationInputLabel>
                        <RoleContainer id="options"  style={{'border' : '2px solid #3A1078'}}>
                                <option value="" selected disabled>Select donation type</option>
                                <option value="Generic">Generic</option>
                                <option value="Specific">Specific</option>
                        </RoleContainer>
                    </FieldWrapper>
                    <FieldWrapper style={{'width' : '100%'}}>
                        <DonationInputLabel>Donate To</DonationInputLabel>
                        <DonationInputField type="text"/>
                    </FieldWrapper>
                    <FieldWrapper style={{'width' : '100%'}}>
                        <DonationInputLabel>Upload image of items</DonationInputLabel>
                        <DonationInputField type="file" style={{'height' : '40px'}}/>
                    </FieldWrapper>
                    <FieldWrapper style={{'width' : '100%'}}>
                            <DonationInputLabel htmlFor='description'>Description of items</DonationInputLabel>
                            <TextWrapper 
                                style={{'height' : '100px', 'border': '2px solid #3A1078', 'width': "100%" , "color" : "#3A1078"}} 
                                defaultValue={''}>
                            </TextWrapper>
                    </FieldWrapper>
                    <DonateButton style={{'width' : '100%'}}>Donate</DonateButton>
                </div>
            </DonationForms>
        </DonationFormContainer>
    )
}

export default MakeDonation