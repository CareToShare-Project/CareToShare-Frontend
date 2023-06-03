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
    background: ${({theme}) => theme.background.main};
    box-shadow: 0px 5px 10px black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    animation: ${pulseAnimation} 1s ease-in-out;
`

export const RegistrationHeader = styled.header`
    color: black;
    font-size: ${({theme})=> theme.fontSizes.medium};
    font-family: Roboto;
    font-weight: 900;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 10px;
    width: 500px;
    height: 60px;
    padding: 10px;
    color: white;
    border: none;

`
export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    gap: 5px;
    padding: 10px;

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
    font-family: Poppins;
    color: ${({theme}) => theme.color.primary};
`

export const InputField = styled.input`
    border-radius: 5px;
    font-family: Poppins;
    font-weight: 400;
    text-indent: 10px;
    width: 100%;
    height: 35px;
    padding: 5px;
    background: transparent;
    color: ${({theme}) => theme.color.primary};
    border: 2px solid white;

    &:focus{
        border: 2px solid ${({theme}) => theme.color.hover2};
        outline: none;
    }
    

`

export const ConfirmButton = styled.button`
    background: white;
    color: ${({theme})=> theme.color.secondary};
    outline: transparent;
    border: 3px solid white;
    border-radius: 10px;
    font-weight: 700;
    font-family: Poppins;
    margin: 10px auto;
    width: 86%;
    font-family: Poppins;
    transition: all 500ms ease-in-out;
    &:hover{
        border: 3px solid ${({theme})=> theme.color.hover};
        background: ${({theme})=> theme.color.hover};
        color: white;
    }
`
// main page styles
export const MainPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background: ${({theme})=> theme.background.secondary};
    


`

export const RightSideContent = styled.div`
    z-index: 1;
    width: 100%;
    overflow-y: scroll;
    padding-left: 10px;
    
    
  
    
`
export const RightSideContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    @media (max-width: 647px){
        align-items: center;
        overflow-x: hidden;

    }

`

// view foundation and view requests styles
export const ViewFoundationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 10px;
    row-gap: 30px;
    @media (max-width: 415px){
        flex-direction: column;
    }

`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 30%;
    max-width: 240px;
    min-width: 230px;
    height: 300px;
    border-radius: 10px;
    background: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 400ms ease-in-out;
   
  
   
    &:hover{
        transform : scale(1.01);
    }
`
export const ImageWrapper = styled.img`
    width: 100%;
    height: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 5px solid ${({theme})=> theme.background.primary};
    

   
   
   
`

export const DetailsWrapper = styled.div`
    color: ${({theme})=> theme.background.primary};
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    text-align: center;

    span{
        display: flex;
        align-items: center;
        gap: 2px;
    }

    .organizationName{
        font-size: 16px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
        width: 90%;

        .verified{
            font-size : 20px;
            color: green;
        }
    }

    .sub-details{
        color: black;
        margin-top: 5px;
        font-family: Poppins;
        font-size: 13px;
        width: 90%;

        .icon{
            font-size: 17px;
        }
        
    }
    
`

export const ImageContainer = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;

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
    margin-top: 2px;
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
    background: ${({theme})=> theme.background.primary};
    color: white;
    width: 78%;
    font-size: 14px;
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
    position: fixed;
    right: 100px;
    top: 20px;
    display: flex;
    align-items: center;
    color: ${({theme})=> theme.background.primary};
    cursor: pointer;
    @media (max-width: 1025px){
             right: 15px;
        }
    @media (max-width: 930px){
             right: 25px;
        }

    &:hover{
        color: ${({theme})=> theme.color.hover2};
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

`

export const DonationForms = styled.form`
    width: 400px;
    height: 500px;
    overflow-y: scroll;
    box-shadow: 0px  5px 10px rgba(0,0,0,0.5);
    border-radius: 10px;
    background: white;
    display : flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 2px;

    @media (max-width: 930px){
             width: 85%;
             margin-left: 30px;
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
    color: ${({theme}) => theme.background.primary};
    border: 2px solid ${({theme}) => theme.background.primary};
    width: 100%;
`

// check donation progress styles
export const TableWrapper = styled.div`
    .table{
        .table-heading{
            font-family: Poppins;
            font-weight: 800;
        }
    }
  
`

export const EditButton = styled.button`
    width: 27px;
    height: 27px;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 20px;
    margin-bottom: 20px;

`

export const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;

    h4{
        text-align: center;
        color: ${({theme}) => theme.background.primary};
        font-weight: 700;
    }
    p{
        font-weight: 600;
        font-size: 15px;
    }
`

export const ReviewFormWrapper = styled.form`
    width: 50%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction:column;
    padding: 15px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.5);
    gap: 15px;
    @media (max-width: 930px){
        width: 80%;
    }

   

    
`

export const ReviewFieldsWrapper = styled(FieldWrapper)`

    textarea{
        height: 300px;
        border: 2px solid ${({theme}) => theme.background.primary};
        outline: 0;
        text-indent: 20px;
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
        color: ${({theme}) => theme.background.primary};
    }
    
`

export const ReviewButton = styled(SubmitButton)`
    width: 80%;
    border: 2px solid ${({theme}) => theme.background.primary};

`





