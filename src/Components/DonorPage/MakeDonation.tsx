import React, { useRef, useState, useEffect } from "react";
import {
    DonateButton,
    DonationFormContainer,
    DonationForms,
    DonationInputField,
    DonationInputLabel,
    FieldWrapper,
} from "./DonorStyles";
import { RoleContainer } from "../CreateAccount/CreateAccountStyles";
import { Heading } from "../Login/LoginStyles";
import { BiDonateHeart } from "react-icons/bi";
import { TextWrapper } from "../CharityPage/CharityStyles";
import { BASE_URL } from "../Shared_util/Constants/Base_URL";
import { v4 } from "uuid";
import {
    uploadImage,
    uploadFileToStorageBucket,
} from "../Shared_util/Constants/Functions";
import { getAllOrganisations } from "../Shared_util/Constants/Functions";
import Select from "react-select";
import { OrganisationProps } from "../Shared_util/Constants/Types";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import LoginToast from "../Shared_util/Toast/LoginToast";

function MakeDonation() {
    const locationRef: any = useRef("");
    const descriptionRef: any = useRef("");
    const quantityRef : any = useRef("")
    const [imageUpload, setImageUpload] = useState<any>();
    const [imageUrl, setImageUrl] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const navigate = useNavigate();

    const userData = sessionStorage.getItem("userDetails");
    const userDetails = userData && JSON.parse(userData);

    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);

    const campaignData = sessionStorage.getItem('campaign')
    const campaignDetails = campaignData && JSON.parse(campaignData)

    console.log(campaignDetails)

   

   

    const handleDonation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowLoading(true)
        uploadFileToStorageBucket(imageUpload, setImageUrl, "donationImages");
        if (imageUrl === "" && imageUpload !== null){
            uploadFileToStorageBucket(imageUpload, setImageUrl, "donationImages");
                setToastMessage("Confirm submission")
                setShowToast(true)
                setShowLoading(false)
                return;
        }
        else{
            try {
            setShowLoading(true);
            
            setTimeout(
                async () => {
                    const numberOfItems = parseInt(quantityRef.current.value) < 0 ? parseInt(quantityRef.current.value) * -1 : parseInt(quantityRef.current.value)

                    const donation = {
                       donationId: v4(),
                       campaignId: campaignDetails.campaignId,
                       donatedBy: userDetails.username,
                       donorEmail: userDetails.email,
                       organisationEmail : campaignDetails.email,
                       donatedTo : campaignDetails.organisationName,
                       contact : userDetails.contact,
                       description: descriptionRef.current.value,
                       quantity: numberOfItems,
                       location: locationRef.current.value,
                       itemPhoto : imageUrl
                    };
                    const response = await fetch(`${BASE_URL}/donations`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${accessToken}`,
                        },
                        body: JSON.stringify(donation),
                    });

                    if (response.status === 401) {
                        navigate("/login");
                        return;
                    }

                    if (response.status === 400) {
                        setToastMessage("An error occured, try again later");
                        setShowToast(true);
                        setShowLoading(false);
                        return;
                    }
                    const results = await response.json();
                    if(results.status === "success"){
                        setToastMessage("Success");
                        setShowToast(true);
                        setShowLoading(false);
                        setTimeout(()=>{
                            navigate("/login/donor/");
                            sessionStorage.setItem("page", "");  
                        },2000)   
                    }
                }, 6000);
            }catch (error) {
                setShowLoading(false);
        }
    }
};

    
    return (
        <DonationFormContainer>
            <DonationForms onSubmit={handleDonation} style={{marginTop: "20px"}}>
                <Heading>
                    Donate now <BiDonateHeart />
                </Heading>
                <div>
                    <FieldWrapper className="field">
                        <DonationInputLabel>Pickup location</DonationInputLabel>
                        <DonationInputField type="text" ref={locationRef} />
                    </FieldWrapper>
                    <FieldWrapper className="field">
                        <DonationInputLabel>Upload image of items</DonationInputLabel>
                        <DonationInputField
                            type="file"
                            required
                            style={{ height: "40px" }}
                            onChange={(e) => uploadImage(e, setImageUpload)}
                        />
                    </FieldWrapper>
                    <FieldWrapper className="field">
                        <DonationInputLabel htmlFor="description">
                            Description of items
                        </DonationInputLabel>
                        <TextWrapper
                            className="text-field"
                            defaultValue={""}
                            ref={descriptionRef}
                        ></TextWrapper>
                    </FieldWrapper>
                    <FieldWrapper className="field">
                        <DonationInputLabel>Quantity</DonationInputLabel>
                        <DonationInputField
                            type="number"
                            ref={quantityRef}
                        />
                    </FieldWrapper>
                    {imageUrl ? 
                        <DonateButton
                            className="donate-btn"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "200px",
                            }}>
                            Donate
                            {showLoading && (
                                <Spinner animation="border" size="sm" className="spinner" />
                            )}
                        </DonateButton> :
                        <DonateButton
                        className="donate-btn"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "200px",
                        }}>
                        Save
                        {showLoading && (
                            <Spinner animation="border" size="sm" className="spinner" />
                        )}
                    </DonateButton> 

                    
                }
                </div>
            </DonationForms>
            <LoginToast
                showToast={showToast}
                setShowToast={setShowToast}
                toastMessage={toastMessage}
            />
        </DonationFormContainer>
    );
}

export default MakeDonation;
