import React, { useRef, useState, useEffect } from "react"
import { DonateButton, DonationFormContainer, DonationForms,
         DonationInputField,
         DonationInputLabel, FieldWrapper} from "./DonorStyles"
import { RoleContainer } from "../CreateAccount/CreateAccountStyles"
import { Heading } from "../Login/LoginStyles"
import { BiDonateHeart } from "react-icons/bi"
import { TextWrapper } from "../CharityPage/CharityStyles"
import { BASE_URL } from "../Shared_util/Constants/Base_URL"
import { storage } from "../Shared_util/Constants/FireBase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

function MakeDonation() {
    const organisationRef: any = useRef('');
    const locationRef : any = useRef('');
    const descriptionRef : any = useRef('')
    const [type, setType] = useState('Generic');
    const [imageUpload, setImageUpload] = useState<any>()
   const [imageUrl, setImageUrl] = useState("")


    const handleDonationType = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    }

    // handles file upload 
    const uploadImage = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files === null) return
        setImageUpload(e.target.files[0] )
    }

    // uploads file to the firebase storage
    const uploadFileToStorageBucket = () => {
        if(imageUpload === null) return;
        const imageRef = ref(storage, `donationImages/${imageUpload.name + v4() }`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url)=> {
                setImageUrl(url)
            })
        })

        return "successfully uploaded";
    
    }

    const handleDonation = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const message = uploadFileToStorageBucket()
            console.log(message)
            const user = sessionStorage.getItem('currentUser')     
            const donatedBy = user && JSON.parse(user)
            const donationId = v4();

            const donation = {
                    donatedBy : donatedBy,
                    donationId : donationId,
                    donationType : type,
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

    useEffect(()=>{
        
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

                    <FieldWrapper className={`field ${type==="Generic" ? 'disabled' : ''}`}>
                        <DonationInputLabel>Donate To</DonationInputLabel>
                        <DonationInputField 
                            type="text" 
                            ref={organisationRef}
                            />
                    </FieldWrapper >
                    <FieldWrapper className="field">
                        <DonationInputLabel>Location</DonationInputLabel>
                        <DonationInputField type="text" ref={locationRef} />
                    </FieldWrapper>

                    <FieldWrapper className="field">
                        <DonationInputLabel>Upload image of items</DonationInputLabel>
                        <DonationInputField type="file" style={{'height' : '40px'}} onChange={uploadImage}/>
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