import React from "react";
import { FieldWrapper, InputField, InputLabel, RegistrationContainer, 
            RegistrationHeader, RegistrationWrapper, RowContainer, ConfirmButton } from "./DonorStyles";
import '../Shared_Styles/Donor/DonorStyles.css'


function DonorRegistrationPage(){

    return (
        
        <RegistrationWrapper>
            <form>
                <RegistrationContainer>
                    <RegistrationHeader>Donor Registration</RegistrationHeader>
                    <RowContainer>
                        <FieldWrapper>
                            <InputLabel htmlFor="firstName">FirstName</InputLabel>
                            <InputField type="text" id="firstName" placeholder="Andy"/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <InputField type="text" id="lastName" placeholder="Yeboah"/>
                        </FieldWrapper>
                    </RowContainer>
                    <FieldWrapper>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <InputField type="text" id="username" placeholder="e.g. andy11"/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <InputField type="email" id="email" placeholder="e.g. yeboahandy@gmail.com"/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <InputField type="password" id="password" placeholder="Password"/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                            <InputField type="password" id="confirmPassword" placeholder="Confirm Password"/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="phone">Phone Number</InputLabel>
                            <InputField type="tel" id="phone" placeholder="e.g. 0247668944"/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="location">Location</InputLabel>
                            <InputField type="text" id="location" placeholder="e.g. Accra, Ghana"/>
                    </FieldWrapper>
                    <ConfirmButton>Confirm</ConfirmButton>
                    
                </RegistrationContainer>
            </form>
        </RegistrationWrapper>
    )
}

export default DonorRegistrationPage;