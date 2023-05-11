import styled, {keyframes} from 'styled-components'


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

export const MainPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    gap: 30px;
    background: ${({theme})=> theme.background.secondary};


`

export const RightSideContent = styled.div`
    z-index: 1;
    width: 100%;
    overflow-y: scroll;
    @media (max-width: 650px){
        margin-left: 30px;

    }
    
`
export const RightSideContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 20px;
`
export const ViewFoundationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 18px;
    row-gap: 30px;

`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 320px;
    height: 350px;
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

    span{
        display: flex;
        align-items: center;
        gap: 2px;
    }

    .organizationName{
        font-size: 20px;
        font-weight: 700;
    }

    .sub-details{
        color: black;
        margin-top: 5px;
        font-family: Poppins;
        font-size: 15px;

        .icon{
            font-size: 17px;
        }
        
    }
    
`

export const ImageContainer = styled.div`
    position: relative;
    z-index: 10;
    width: 320px;

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

    header{
        font-size: 18px;
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
`