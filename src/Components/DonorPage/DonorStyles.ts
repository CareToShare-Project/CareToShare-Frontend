import styled, {keyframes} from 'styled-components'
import { TextWrapper } from '../CharityPage/CharityStyles'
import { SubmitButton } from '../Login/LoginStyles'

// Registration styles
export const RegistrationWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const pulseAnimation = keyframes`
   0% {
     transform: scale(0);
   }
   100% {
        transform: scale(1);
  }
 `
export const RegistrationContainer = styled.div`
    height: 550px;
    width: 400px;
    padding: 10px 0px;
    background: ${({theme}) => theme.color.secondary};
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    border: 3px solid white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    animation: ${pulseAnimation} 1s ease-in-out;
    margin: 0px auto;
        
        @media (max-width: 450px){
            width: 70%;
            background: ${({theme}) => theme.background.secondary};
            border: none;
            box-shadow: none;
        }
`

export const RegistrationHeader = styled.header`
    font-size: ${({theme})=> theme.fontSizes.medium};
    font-family: Roboto;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-align: center;
    margin-bottom: 10px;
    width: 500px;
    height: 60px;
    padding: 10px;
    color: ${({theme})=> theme.color.primary};
    border: none;

`
export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    gap: 5px;
    padding: 10px;

    .css-b62m3t-container{
        width: 100%;
    }

    select{
        height: 30px;
        border-radius: 4px;
        border: 2px solid ${({theme}) => theme.background.primary};
        
        &:hover{
            cursor: pointer;
        }
        &:focus{
            border: 2px solid ${({theme}) => theme.color.hover2};
            outline: 0;
        } 
    }
`

export const InputLabel = styled.label`
    font-size: 15px;
    font-weight: bolder;
    font-family: Roboto;
    color: ${({theme}) => theme.color.primary};
`

export const InputField = styled.input`
    border-radius: 5px;
    font-family: Poppins;
    font-weight: 400;
    text-indent: 5px;
    width: 100%;
    height: 35px;
    padding: 5px;
    background: transparent;
    color: ${({theme}) => theme.color.primary};
    border: 2px solid #96acb5;

    &:focus{
        border: 2px solid ${({theme}) => theme.color.hover2};
        outline: none;
    }
    

`

export const ConfirmButton = styled.button`
    width: 85%;
    background: ${({theme})=> theme.color.primary};
    outline: transparent;
    border: 1px solid white;
    border-radius: 10px;
    font-weight: 600;
    padding: 5px 0px;
    color:${({theme})=> theme.color.secondary};
    font-family: Poppins;
    transition: 0.8s;
        &:hover{
            background: ${({theme})=> theme.background.primary};
            color: ${({theme})=> theme.color.secondary};
        }
`
// main page styles
export const DonorPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    
`

export const NavBarWrapper = styled.div`
    position: relative;
    height: 50px;
    width: 97%;
    border-radius: 10px;
    background: ${({theme})=> theme.background.primary};
    color: white;
    display: flex;
    align-items: center;
    padding: 30px 40px;
    justify-content: space-between;

    span{
        font-size: 20px;
    }
    
    @media (max-width: 930px){
        display: 100%;
    }

    
`
export const MainPageContainer = styled.div`
    padding: 10px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background: white;

    
`

export const RightSideContent = styled.div`
    z-index: 1;
    overflow-y: scroll;
    padding-left: 10px;
    width: 97%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 930px){
        width : 100%;
    }
    
`
export const RightSideContentWrapper = styled.div`
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    
    @media (max-width: 700px){
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 5px;
    }


    .requests{
        background: ${({theme})=> theme.background.secondary};
        border: 2px solid white;
        padding: 20px 30px;
        width: 95%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 10px;
        height: 420px;
        box-shadow: 0px 0px  3px rgba(0,0,0,0.4);
    }

    .general {
        width: 100%;
        
        h4{
            color: ${({theme})=> theme.color.primary};
            font-size: 20px;
            margin-bottom: 10px;
        }
        
    }

    .specific {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 15px;
        padding: 5px;
         h4{
            color: ${({theme})=> theme.color.primary};
            font-size: 20px;
            margin-bottom: 10px;
        }
    }

    div{
        h5{
            color: ${({theme})=> theme.color.primary};
        }
    }
    @media (max-width: 930px){
        width: 100%;

    }

`

// view foundation and view requests styles

const fadeFromRight = keyframes`
    to{
        transform: translateX(0px);
        opacity: 1;  
    }
`

export const ViewFoundationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    column-gap: 10px;
    row-gap: 30px;
    transform: translateX(100px);
    opacity: 0;
    animation: ${fadeFromRight} 0.8s ease-in-out forwards;

    @media (max-width: 1281px){
        column-gap: 5px;
    }
    @media (max-width: 1025px){
        column-gap: 5px;
    }
   
    @media (max-width: 680px){
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

        

`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 30%;
    max-width: 240px;
    min-width: 240px;
    height: 300px;
    padding-bottom: 5px;
    border-radius: 10px;
    background: white;
    box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.1);
    border: 1px solid rgba(86, 192, 200, 0.3);
    cursor: pointer;
    transition: all 400ms ease-in-out;

    @media (max-width: 757px){
        width: 230px;
        min-width: 230px;
    }
    @media (max-width: 680px){
       width: 85%;
       max-width: 85%;
    }
   
  
   
    &:hover{
        transform : scale(1.01);
    }
`
export const ImageWrapper = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 5px solid ${({theme})=> theme.background.primary};
    

   
   
   
`

export const DetailsWrapper = styled.div`
    color: ${({theme})=> theme.background.primary};
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    overflow-y: scroll;
    

    span{
        display: flex;
        align-items: center;
        gap: 2px;
    }

    .donation-details{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap:2px;
        
        .heading{
            color: ${({theme})=> theme.background.primary};
        }
        .content{
            color: ${({theme})=> theme.color.primary};
        }
    }

    .organizationName{
        font-size: 15px;
        font-weight: 700;
        display: flex;
        width: 100%;

    }

    .sub-details{
        color: ${({theme})=> theme.color.primary};
        margin-top: 5px;
        font-family: Poppins;
        gap: 10px;
        font-size: 13px;
        width: 90%;

        .icon{
            font-size: 17px;
        }
        
    }
    
`

export const ReviewWrapper = styled.div`
    h5{
        color: ${({theme})=> theme.background.primary};
        font-family: Poppins;
        font-size: 16px;
    }
    
    div{
        display: flex;
        flex-direction: column;

        div{
            height: max-content;
            margin-bottom: 10px;
            font-family: Roboto;
            font-size: 14px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            margin-bottom: 30px;
            cursor: pointer; 
                .user{
                    color: #187278;
                    font-weight: 700;
                }
    
                .review{
                    
                }

            

        }
    }
`

export const ImageContainer = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    height: 400px;

    span{
        z-index: 20;
        position: absolute;
        top: 5px;
        left: 5px;
        background: rgba(255,255,255, 0.8);
        padding: 2px;
        border-radius: 5px;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    margin: 5px 0px;
    font-family: Poppins;
    font-size: 14px;


    header{
        
        font-weight: 700;
    }

    span{
        color: black;
    }
`

export const DonateButton = styled(ConfirmButton)`
    background: ${({theme})=> theme.color.primary};
    color: white;
    width: 80%;
    font-size: 13px;
    padding: 2px;
    margin: 0 auto;
    &:hover{
        border: 1px solid ${({theme})=> theme.color.primary};
        background: ${({theme})=> theme.background.primary};
        color: ${({theme})=> theme.color.secondary};
    }
`

export const NoOrganisationContainer = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    
    h4{
        font-weight: 700;
        letter-spacing: 2px;
    }
`

export const RefreshWrapper = styled.div`
    color: ${({theme})=> theme.background.primary};
    cursor: pointer;
    @media (max-width: 930px){
            
        }

    &:hover{
        color: rgba(0,0,0,0.6)
    }

    span{
        font-size: 20px;
        @media (max-width: 930px){
             display: none;
        }
    }
`

// make donation styles

export const DonationFormContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0px;

    @media (max-width: 970px){
             flex-direction: column;
             overflow-x: hidden;
             overflow-y: scroll;
             align-items: flex-start;
             padding: 10px 0px;
            
        }

    .campaignImage{
        img{
            width: 500px;
            height: 500px;

            @media (max-width: 630px){
                    display: none;
            }

        }
    }

    .campaignCard{
        width: 60%;
        height: 500px;
        overflow-y:scroll;
        border-radius: 10px;
        box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.1);
        border: 1px solid rgba(86, 192, 200, 0.3);

        @media (max-width: 970px){
             width: 95%;
             display: none;
        }

        div{
            padding: 20px;
            
            
            header{
                font-size: 25px;
                font-weight: 500;
                font-family: Playfair;
            }

            p{
                font-family: Poppins;
                font-weight: 500;
                font-size: 16px;
            }

            div{
                display: flex;
                align-items: center;
                gap: 2px;
                div{
                    span{
                    font-family: Poppins;
                    font-weight: 700;
                    font-size: 16px;
                }
                }
               
            }
        }

        img{
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    }

`

export const DonationForms = styled.form`
    width: 30%;
    min-width: 350px;
    height: 470px;
    overflow-y: scroll;
    box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.1);
    border: 1px solid rgba(86, 192, 200, 0.3);
    border-radius: 10px;
    background: white;
    display : flex;
    margin-top: -30px;
    flex-direction: column;
    align-items: center;
    padding: 30px 5px;
    gap: 2px;

    @media (max-width: 970px){
             width: 95%;
             min-width: 300px;
             height: 550px;
        }

    div{
        .field{
            width: 100%;
            
            .text-field{
                height: 100px;
                border: 2px solid #3A1078;
                width: 100%;
                color: #3A1078;

                &:focus{
                    border: 2px solid ${({theme})=> theme.color.hover2};
                }
            }
        }

        .disabled {
            display: none;
        }
        .donate-btn{
            width: 100%;
            height: 35px;
        }
    }
    
`

export const DonationInputLabel = styled(InputLabel)`
    color: black;
`
export const DonationInputField = styled(InputField)`
    color: ${({theme}) => theme.color.primary};
    border: 2px solid ${({theme}) => theme.color.primary};
    width: 100%;
`

// check donation progress styles
export const TableWrapper = styled.div`
    width: 100%;
    position: relative;

    .spinner{
        position: absolute;
        top: 30%;
        left: 50%;
    }

    span{
            display: flex;
            justify-content: flex-end;
            margin-right: 20px;
            margin-bottom: 10px;
            font-family: Roboto;
            font-weight: 600;
        }
    .table{
        .table-heading{
            font-family: Roboto;
            font-weight: 800;
            color : ${({theme}) => theme.background.primary};
        }

        .table-body{
            font-size: 13px;
            font-weight: 600;
            font-family: Poppins;

            tr{
                .mission{
                    width: 200px;
                }
                .email{
                    width: 250px;
                }
                td{
                    height: 50px;
                    span{
                        color: ${({theme}) => theme.color.primary};
                        font-weight: 700;
                        margin-left: 8px;
                    }
                }

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
  
`

export const EditButton = styled.button`
    width: 27px;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background: white;
    color: green;
`

export const DeleteButton = styled(EditButton)`
    color: red;
`

export const UpdateDonationField = styled.input`
    width: 100%;
    border-radius: 5px;
    font-family: Poppins;
    font-weight: 400;
    text-indent: 10px;
    height: 35px;
    padding: 5px;
    background: transparent;
    color: black;
    border: 2px solid;

    &:focus{
        border: 2px solid ${({theme}) => theme.color.hover2};
        outline: none;
    }
    
`
export const UpdateDonationTextWrapper = styled(TextWrapper)`
    color: black;
    border: 2px solid black;
    height: 100px;
`

export const UpdateDonationConfirmButton = styled(DonateButton)`
    width: 100%;
    height: 35px;
`

export const UpdateDonationInputLabel = styled(InputLabel)`
    color: black;
`
// Send reviews styles

export const ReviewContainer = styled.div`
    width: 80%;
    display: flex;
    height: 100vh; 
    flex-direction: column;
    align-items: center;
    padding: 80px 0px;

    @media (max-width: 450px){
           width: 100%;
        }


`

export const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 5px;


    h4{
        color: ${({theme}) => theme.background.primary};
        letter-spacing: 1.3px;
        font-family: Playfair Display, serif;
        font-weight: 600;
    }
    p{
        font-weight: bold;
        opacity: 0.7;
        font-size: 15px;
        font-family: Roboto;
    }
    @media (max-width: 930px){
        width: 100%;
    }
`

export const ReviewFormWrapper = styled.form`
    width: 80%;
    height: max-content;
    margin-bottom: 10px;
    background: white;
    display: flex;
    flex-direction:column;
    padding: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.1);
    border: 1px solid rgba(86, 192, 200, 0.3);
    gap: 15px;
    @media (max-width: 930px){
        width: 100%;
    }

   

    
`

export const ReviewFieldsWrapper = styled(FieldWrapper)`

    textarea{
        height: 150px;
        border: 2px solid ${({theme}) => theme.color.primary};
        outline: 0;
        border-radius: 5px;

        &:focus{
            border: 2px solid ${({theme}) => theme.color.hover2};
            outline: 0;
        }
    }

    select {
        height: 45px;
        border-radius: 4px;
        
        &:hover{
            cursor: pointer;
        }
        &:focus{
            border: 2px solid ${({theme}) => theme.color.hover2};
            outline: 0;
        }
    }

    label{
        font-family: Poppins;
        font-weight: 600;
        color: ${({theme}) => theme.color.primary};
    }
    
`

export const ReviewButton = styled(SubmitButton)`
    width: 80%;
   

`


// edit profile styles
export const EditProfileWrapper = styled.div`
    width: 100%;
    height: max-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    border-radius: 10px;
    
`


export const FormsWrapper = styled.div`
    width: 100%;
    background: white;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.1);
    border: 1px solid rgba(86, 192, 200, 0.3);

    @media (max-width: 450px){
           flex-direction: column;
           overflow-y: scroll;
           overflow-x: hidden;
        }
    
`
export const Wrapper = styled(RightSideContentWrapper)`
    overflow-y : hidden;
`

export const RightPanel = styled.form`
    width: 70%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 0px;
`

export const LeftPanel = styled.div`
    width: 30%;
    height: 100%;
    border: 2px solid white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background: rgba(104, 211, 221, 0.3);
    position: relative;

    @media (max-width: 450px){
           background: none;
           margin: 0 auto;
        }

    span{
        color : ${({theme}) => theme.color.primary};
        font-size : 18px;
        font-weight: 500;
    }
`

export const EditProfileHeading = styled(RegistrationHeader)`
    color: ${({theme}) => theme.background.primary};
    text-align: left;
    padding: 0px;
    margin-bottom: -10px;
    font-size : 20px;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    gap: 2px;
`

export const FieldContainer = styled(FieldWrapper)`
    width: 60%;

    @media (max-width: 450px){
           width: 100%;
        }
`

export const Label = styled(InputLabel)`
    color: ${({theme}) => theme.color.primary};
    font-family: Roboto;
`

export const Field = styled(InputField)`
    color: ${({theme}) => theme.color.primary};
    border: 2px solid ${({theme}) => theme.color.primary};
    height: 28px;
    font-family: Roboto;

    @media (max-width: 450px){
           width: 300px;
        }
`

export const ProfilePhotoWrapper = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow:  0px 0px 4px 3px rgba(20, 107, 113, 0.1);
`

export const UpdateBtn = styled(ConfirmButton)`
    width: 20%;
    font-size: 13px;
    padding: 5px;
    border-radius: 5px;
    margin-left: 12px;

    @media (max-width: 450px){
           width: 80%;
        }

`

export const ImageField = styled(Field)`
    height: 35px;
`

export const CampaignCardWrapper = styled.div`
    height: 400px;
    width: 90%;
    display: flex;
    margin-bottom: 30px;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.3);

    @media (max-width: 541px){
           width: 100%;
           height: max-content;
           flex-direction: column;
           overflow-y: scroll;
           overflow-x: hidden;
        }
`
export const CampaignImageContainer = styled(ImageWrapper)`
    height: 400px;
    width: 400px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: 5px solid ${({theme})=> theme.background.primary};
    border-bottom: none;
    object-fit: cover;
    
    @media (max-width: 541px){
        width: 100%;
        border-bottom: 5px solid ${({theme})=> theme.background.primary};
        border-right: none;
    }

`

export const CampaignDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 400px;
    width: 70%;
    overflow-y: scroll;
    padding: 10px;
    @media (max-width: 541px){
        overflow-y:hidden;
        width: 100%;
        margin-top: 20px;
        height: max-content;
    }

    div{
        display: flex;
        flex-direction: column;

        @media (max-width: 541px){
            width: 100%;
        }

        .progress{
            @media (max-width: 541px){
                width: 250px;
            }
        }
        
        .heading{
            font-weight: 700;
            font-family: Poppins;
            color: ${({theme})=> theme.background.primary}; 
        }

        .content{
            font-size: 15px;
            font-weight: 500;
        }
    }

    
    
`

export const ModalContent = styled.div`
    width: 500px;
    height: 400px;
    display: flex;
    gap: 20px;

    @media (max-width: 480px){
             flex-direction: column;
             height: 600px;

             img{
                width: 100%;
             }
        }
       // style={{display: 'flex', width:"42%", flexDirection: 'column', gap: '20px', height: "350px", overflowY: "scroll", padding: '5px'}}
    .content{
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 350px;
        overflow-y: hidden;
        padding: 5px;
        @media (max-width: 480px){
            width: 300px;
            overflow-y: hidden;
        }
    }
     

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        div{
            width: 90%;
            display: flex;
            flex-direction: column;

            label{
                font-size: 16px;
                font-weight: bolder;
                font-family: Roboto;
                color: black;
            }

            select{
                padding: 5px;
            }

            input{
                padding: 5px;
            }

            textarea{
                height: 170px;
            }

            button{
                outline: 0;
                border: 1px solid white;
                border-radius: 5px;
                transition: all 0.5s ease-in-out;
                padding: 5px;
                font-family: Poppins;
                font-weight: 700;

            &:hover{
                border: 1px solid ${({theme})=> theme.background.primary};
                background: white;
                }
            }
        }
    }
`

export const SupportCampaignButton = styled.button`
    width: 200px;
    outline: 0;
    border: 1px solid white;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    padding: 5px;


    &:hover{
        border: 1px solid ${({theme})=> theme.background.primary};
        background: white;
    }

    @media (max-width: 541px){
                width: 250px;
            }
`
//width: '500px', height: '350px', display: 'flex' , gap: '20px'








