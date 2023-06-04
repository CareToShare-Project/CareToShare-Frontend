import React from "react"
import { BackgroundImage, EditProfileWrapper, FormsWrapper, Wrapper } from "./DonorStyles"
import bg from "../HomePage/images/backgroundImage.jpg"
import { FaUserCircle } from "react-icons/fa"

function DonorProfile(){

    return(
        <Wrapper>
            <EditProfileWrapper>
                <BackgroundImage src={bg} alt="bg"/>
                <h4 className="heading">Edit Profile</h4>
                <FormsWrapper>
                    <div>
                        <FaUserCircle size={50} />
                    </div>
                    <div>

                    </div>
                </FormsWrapper>
            </EditProfileWrapper>
        </Wrapper>
    )
}

export default DonorProfile