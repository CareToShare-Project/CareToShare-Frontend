import React, { useRef, useState} from "react";
import {
    DonateButton,
    DonationFormContainer,
    DonationForms,
    DonationInputField,
    DonationInputLabel,
    FieldWrapper,
} from "./DonorStyles";
import { Heading } from "../Login/LoginStyles";
import { BiDonateHeart } from "react-icons/bi";
import { TextWrapper } from "../CharityPage/CharityStyles";
import { BASE_URL } from "../Shared_util/Constants/Base_URL";
import { v4 } from "uuid";
import {
    uploadImage,
    uploadFileToStorageBucket,
    calculateDaysLeft
} from "../Shared_util/Constants/Functions";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import LoginToast from "../Shared_util/Toast/LoginToast";
import { MdMoreTime} from "react-icons/md";
import { GiProgression } from "react-icons/gi";

function MakeDonation() {
    const locationRef: any = useRef("");
    const descriptionRef: any = useRef("");
    const quantityRef : any = useRef("")
    const [imageUpload, setImageUpload] = useState<any>();
    const [imageUrl, setImageUrl] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [deliveryMethod, setDeliveryMethod] = useState('delivery');

    const handleDeliveryMethodChange = (e :  React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryMethod(e.target.value);
    };

    const navigate = useNavigate();

    const userData = sessionStorage.getItem("userDetails");
    const userDetails = userData && JSON.parse(userData);

    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);

    const campaignData = sessionStorage.getItem('campaign')
    const campaignDetails = campaignData && JSON.parse(campaignData)


    const totalDonationData = sessionStorage.getItem('totalDonations')
    const totalDonations = totalDonationData && JSON.parse(totalDonationData)


    const handleDonation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowLoading(true)
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
                    let donation;
                    const numberOfItems = parseInt(quantityRef.current.value) < 0 ? parseInt(quantityRef.current.value) * -1 : parseInt(quantityRef.current.value)

                    if(deliveryMethod === "Delivery") {
                           donation = {
                           donationId: v4(),
                           campaignId: campaignDetails.campaignId,
                           donatedBy: userDetails.username,
                           donorEmail: userDetails.email,
                           organisationEmail : campaignDetails.email,
                           organisationContact: campaignDetails.organisationContact,
                           donatedTo : campaignDetails.organisationName,
                           contact : userDetails.contact,
                           description: descriptionRef.current.value,
                           quantity: numberOfItems,
                           deliveryMethod: deliveryMethod,
                           location: campaignDetails.location,
                           itemPhoto : imageUrl
                        };
                    }else{
                            donation = {
                            donationId: v4(),
                            campaignId: campaignDetails.campaignId,
                            donatedBy: userDetails.username,
                            donorEmail: userDetails.email,
                            organisationEmail : campaignDetails.email,
                            organisationContact: campaignDetails.organisationContact,
                            donatedTo : campaignDetails.organisationName,
                            contact : userDetails.contact,
                            description: descriptionRef.current.value,
                            quantity: numberOfItems,
                            deliveryMethod: deliveryMethod,
                            location: locationRef.current.value,
                            itemPhoto : imageUrl
                         }; 
                    }
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
        <DonationFormContainer style={{gap: "20px"}}>
            <div className="campaignCard">
                <img src={campaignDetails.campaignImage} alt="campaign-display"/>
                <div>
                    <header>{campaignDetails.campaignTitle}</header>
                    <p>{campaignDetails.description}</p>
                    <div>
                        <div>
                            <MdMoreTime size={30} color='green'/> {" "}
                            <span>{calculateDaysLeft(campaignDetails.startDate,campaignDetails.endDate)}</span>
                        </div>
                        <div>
                            <GiProgression size={30} color='green'/>
                            <span>{totalDonations}/{campaignDetails.target} donations</span>
                        </div>
                        
                    </div>

                    
                </div>
            </div>
            <DonationForms onSubmit={handleDonation} style={{marginTop: "5px", height: "500px"}}>
                <Heading>
                    Donate now <BiDonateHeart />
                </Heading>
                <div>
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
                        <DonationInputLabel>Upload image of items</DonationInputLabel>
                        <DonationInputField
                            type="file"
                            required
                            style={{ height: "40px" }}
                            onChange={(e) => uploadImage(e, setImageUpload)}
                        />
                    </FieldWrapper>
                    <FieldWrapper className="field">
                        <DonationInputLabel>Quantity</DonationInputLabel>
                        <DonationInputField
                            type="number"
                            ref={quantityRef}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <DonationInputLabel>Donation Delivery Preference</DonationInputLabel>
                    </FieldWrapper>
                    <label style={{marginLeft: "15px", fontFamily: "Poppins", fontSize: "15px"}}>
                        <input
                            type="radio"
                            value="Delivery"
                            checked={deliveryMethod === "Delivery"}
                            onChange={handleDeliveryMethodChange}
                        />
                        Direct Delivery to Organisation
                    </label>
                    <label style={{marginLeft: "15px" , fontFamily: "Poppins", fontSize: "15px"}}>
                        <input
                            type="radio"
                            value="Pickup"
                            checked={deliveryMethod === "Pickup"}
                            onChange={handleDeliveryMethodChange}
                        />
                        Scheduled Pick-up by Organization
                    </label>
                    {deliveryMethod === "Pickup" &&
                        <FieldWrapper className="field">
                            <DonationInputLabel>Pickup location</DonationInputLabel>
                            <DonationInputField type="text" ref={locationRef} />
                        </FieldWrapper>
                    }
                   
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
                            disabled= {calculateDaysLeft(campaignDetails.startDate,campaignDetails.endDate) === "Not Started"}
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
