import React from "react";
import { FieldWrapper, InputField, InputLabel, RegistrationContainer, 
            RegistrationHeader, RegistrationWrapper, RowContainer, ConfirmButton } from "./DonorStyles";
import '../Shared_Styles/Donor/DonorStyles.css'
import '../Shared_Styles/General/Styles.css'


function DonorRegistrationPage(){

    return (
        
        <RegistrationWrapper className="body-container">
            <form>
                <RegistrationContainer>
                    <RegistrationHeader>Donor Registration</RegistrationHeader>
                    <RowContainer>
                        <FieldWrapper>
                            <InputLabel htmlFor="firstName">FirstName</InputLabel>
                            <InputField type="text" id="firstName" placeholder="e.g. Andy" required/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <InputField type="text" id="lastName" placeholder="e.g. Yeboah" required/>
                        </FieldWrapper>
                    </RowContainer>
                    <FieldWrapper>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <InputField type="text" id="username" placeholder="e.g andy11" required/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <InputField type="email" id="email" placeholder="e.g yeboahandy@gmail.com" required/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <InputField type="password" id="password" placeholder="Password" required/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                            <InputField type="password" id="confirmPassword" placeholder="Confirm Password" required/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="phone">Phone Number</InputLabel>
                            <InputField type="tel" id="phone" placeholder="e.g 0247668944" required/>
                    </FieldWrapper>
                    <FieldWrapper>
                            <InputLabel htmlFor="location">Location</InputLabel>
                            <InputField type="text" id="location" placeholder="e.g Accra, Ghana"/>
                    </FieldWrapper>
                    <ConfirmButton>Confirm</ConfirmButton>
                    
                </RegistrationContainer>
            </form>
        </RegistrationWrapper>
    )
}

export default DonorRegistrationPage;