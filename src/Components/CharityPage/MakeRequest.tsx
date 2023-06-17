import React, { useRef, useState } from "react";
import {
    DonateButton,
    DonationFormContainer,
    DonationForms,
    DonationInputField,
    DonationInputLabel,
    FieldWrapper,
} from "../DonorPage/DonorStyles";
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
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import LoginToast from "../Shared_util/Toast/LoginToast";

function MakeRequest() {
    const campaignRef: any = useRef("");
    const [imageUpload, setImageUpload] = useState<any>();
    const [imageUrl, setImageUrl] = useState("");

    const [showLoading, setShowLoading] = useState(false);

    // state to show or hide toast
    const [showToast, setShowToast] = useState(false);

    // state to set toast message
    const [toastMessage, setToastMessage] = useState("");

    const navigate = useNavigate();

    const userData = sessionStorage.getItem("userDetails");
    const userDetails = userData && JSON.parse(userData);


    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);

    const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //uploadFileToStorageBucket(imageUpload, setImageUrl, 'requestImages')
        try{
            const request = {
                requestId : v4(),
                requestedBy: userDetails.organisationName,
                requestType: 'Campaign',
                requestTo: 'General',
                description : campaignRef?.current.value,
                requestImage : imageUrl || 'no image',
            }
            const response = await fetch(`${BASE_URL}/requests`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(request),
            });

            console.log(response)

    }catch (error) {
        console.log(error);
        setShowLoading(false);
    }
    };





return (
    <DonationFormContainer>
        <DonationForms style={{ height: '400px', gap: '30px' }} onSubmit={handleRequest} >
            <Heading>
                Request Forms <BiDonateHeart />
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

                <DonateButton
                    className="donate-btn"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "200px",
                        marginTop: "30px"
                    }}
                >
                    Make Request
                    {showLoading && (
                        <Spinner animation="border" size="sm" className="spinner" />
                    )}
                </DonateButton>
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
