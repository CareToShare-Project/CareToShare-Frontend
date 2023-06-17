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
    const [donationType, setDonationType] = useState("Generic");
    const [imageUpload, setImageUpload] = useState<any>();
    const [imageUrl, setImageUrl] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const navigate = useNavigate();

    const userData = sessionStorage.getItem("userDetails");
    const userDetails = userData && JSON.parse(userData);

    const [organisations, setOrganisations] = useState<OrganisationProps[]>([]);
    const [selectedOrganization, setSelectedOrganization] =
        useState<OrganisationProps>();

    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);

    const handleChange = (selectedOption: any) => {
        setSelectedOrganization(selectedOption);
    };

    const handleDonationType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDonationType(e.target.value);
        console.log(e.target.value);
    };

    const handleDonation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setShowLoading(true);
            uploadFileToStorageBucket(imageUpload, setImageUrl, "donationImages");
            setTimeout(
                async () => {
                    const donationId = v4();
                    const org = selectedOrganization?.organisationName;
                    const selectedOrg = selectedOrganization ? org : "General";
                    const donation = {
                        donatedBy: userDetails.username,
                        donationId: donationId,
                        donationType: donationType,
                        description: descriptionRef.current.value,
                        location: locationRef.current.value,
                        itemPhoto: imageUrl,
                        donatedTo: selectedOrg,
                        contact: userDetails.contact
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
                    console.log(results);
                    setToastMessage("Success");
                    setShowToast(true);
                    setShowLoading(false);

                    navigate("/login/donor/");
                    sessionStorage.setItem("page", "");
                },

                10000
            );
        } catch (error) {
            console.log(error);
            setShowLoading(false);
        }
    };

    // gets all organisations on page load
    useEffect(() => {
        const results = sessionStorage.getItem("organisations");
        if (results !== null) {
            const availableOrganisations = JSON.parse(results);
            setOrganisations(availableOrganisations);
        } else {
            getAllOrganisations(setOrganisations, accessToken, navigate);
        }
    }, [accessToken, navigate]);

    return (
        <DonationFormContainer>
            <DonationForms onSubmit={handleDonation}>
                <Heading>
                    Donate now <BiDonateHeart />
                </Heading>
                <div>
                    <FieldWrapper style={{ width: "100%" }}>
                        <DonationInputLabel>Type</DonationInputLabel>
                        <RoleContainer
                            id="options"
                            style={{ border: "2px solid #3A1078" }}
                            required
                            onChange={handleDonationType}
                        >
                            <option value="" defaultValue={"Select"} disabled>
                                Select donation type
                            </option>
                            <option value="Generic">Generic</option>
                            <option value="Specific">Specific</option>
                        </RoleContainer>
                    </FieldWrapper>

                    <FieldWrapper
                        className={`field ${donationType === "Generic" ? "disabled" : ""}`}
                    >
                        <DonationInputLabel>Donate To</DonationInputLabel>
                        <Select
                            value={selectedOrganization}
                            onChange={handleChange}
                            options={organisations}
                            getOptionLabel={(org) => org.organisationName}
                            getOptionValue={(org) => org.organisationName}
                            placeholder="Select an organization"
                        />
                    </FieldWrapper>
                    <FieldWrapper className="field">
                        <DonationInputLabel>Location</DonationInputLabel>
                        <DonationInputField type="text" ref={locationRef} />
                    </FieldWrapper>

                    <FieldWrapper className="field">
                        <DonationInputLabel>Upload image of items</DonationInputLabel>
                        <DonationInputField
                            type="file"
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
                    <DonateButton
                        className="donate-btn"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "200px",
                        }}
                    >
                        Donate
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

export default MakeDonation;
