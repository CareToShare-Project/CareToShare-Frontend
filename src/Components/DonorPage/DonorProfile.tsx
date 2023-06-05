import React from "react"
import { BackgroundImage, EditProfileHeading, EditProfileWrapper,
        FormsWrapper, LeftPanel, RightPanel, Row, Wrapper, FieldContainer, 
        Label, Field, UpdateBtn} from "./DonorStyles"
import bg from "../HomePage/images/backgroundImage.jpg"
import { FaUserCircle } from "react-icons/fa"
import { useParams } from "react-router-dom"

function DonorProfile(){
    const {username} = useParams();

    return(
        <Wrapper>
            <EditProfileWrapper>
                <BackgroundImage src={bg} alt="bg"/>
                <h4 className="heading">Edit Profile</h4>
                <FormsWrapper>
                    <LeftPanel>
                        <FaUserCircle size={100} />
                        <span>{username}</span>
                    </LeftPanel>
                    <RightPanel>
                        <EditProfileHeading>Account Settings</EditProfileHeading>
                        <Row>
                           <FieldContainer>
                                <Label>First Name</Label>
                                <Field type="text"/>
                           </FieldContainer>
                           <FieldContainer>
                                <Label>Last Name</Label>
                                <Field type="text"/>
                           </FieldContainer>
                        </Row>
                        <Row>
                           <FieldContainer>
                                <Label>Phone</Label>
                                <Field type="text"/>
                           </FieldContainer>
                           <FieldContainer>
                                <Label>Email Address</Label>
                                <Field type="text"/>
                           </FieldContainer>
                        </Row>
                        <Row>
                           <FieldContainer>
                                <Label>Location</Label>
                                <Field type="text"/>
                           </FieldContainer>
                        </Row>
                        <UpdateBtn>Update</UpdateBtn>
                    </RightPanel>
                </FormsWrapper>
            </EditProfileWrapper>
        </Wrapper>
    )
}

export default DonorProfile