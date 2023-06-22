import React, { useRef, useState } from "react";
import {
    DonateButton,
    DonationFormContainer,
    DonationForms,
    DonationInputField,
    DonationInputLabel,
    FieldWrapper,
} from "../DonorPage/DonorStyles";
//import { RoleContainer } from "../CreateAccount/CreateAccountStyles";
import { Heading } from "../Login/LoginStyles";
//import { BiDonateHeart } from "react-icons/bi";
//import { TextWrapper } from "../CharityPage/CharityStyles";
import { BASE_URL } from "../Shared_util/Constants/Base_URL";
import { v4 } from "uuid";
import {
    uploadImage,
    uploadFileToStorageBucket,
} from "../Shared_util/Constants/Functions";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import LoginToast from "../Shared_util/Toast/LoginToast";

function MakeRequest() {
    const campaignRef: any = useRef("");
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

    const handleRequest = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowLoading(true)
        uploadFileToStorageBucket(imageUpload, setImageUrl, 'requestImages')

        if (imageUrl === "" && imageUpload !== null) {
            uploadFileToStorageBucket(imageUpload, setImageUrl, "donationImages");
            setTimeout(()=>{
                setToastMessage("Confirm submission")
                setShowToast(true)
                setShowLoading(false)
                return;
            }, 3000)
            
        } else {
            try {
                setShowLoading(true)
                setTimeout(async () => {
                    const request = {
                        requestId: v4(),
                        requestedBy: userDetails.organisationName,
                        requestType: 'Campaign',
                        requestTo: 'General',
                        description: campaignRef?.current.value,
                        requestImage: imageUrl,
                    }
                    const response = await fetch(`${BASE_URL}/requests`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${accessToken}`,
                        },
                        body: JSON.stringify(request),
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
                    if (results.status === "success") {
                        setToastMessage("Success")
                        setShowToast(true)
                        setTimeout(() => {
                            navigate("/login/organisation")
                            sessionStorage.setItem('page', JSON.stringify(""))
                        }, 2000)

                    } else {
                        setToastMessage("An error occured, try again later")
                        setShowToast(true)
                        setShowLoading(false)
                    }
                }, 3000)

            } catch (error) {
                console.log(error);
                setShowLoading(false);
            }
        }
    };





    return (
        <DonationFormContainer>
            <DonationForms style={{ height: '400px', gap: '30px' }} onSubmit={handleRequest} >
                <Heading>
                    Create a new Campaign
                </Heading>
                <div>
                    <FieldWrapper style={{ width: "100%" }}>
                        <DonationInputLabel>Campaign</DonationInputLabel>
                        <DonationInputField type="text" ref={campaignRef} />
                    </FieldWrapper>
                    <FieldWrapper>

                    </FieldWrapper>
                    <FieldWrapper className="field">
                        <DonationInputLabel>Upload Campaign Image</DonationInputLabel>
                        <DonationInputField
                            type="file"
                            style={{ height: "40px" }}
                            onChange={(e) => uploadImage(e, setImageUpload)}
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
                                marginTop: "30px"
                            }}>
                            Confirm Request
                            {showLoading && (
                                <Spinner animation="border" size="sm" className="spinner" />
                            )}
                        </DonateButton>: 
                        <DonateButton
                            className="donate-btn"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "200px",
                                marginTop: "30px"
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

export default MakeRequest;
