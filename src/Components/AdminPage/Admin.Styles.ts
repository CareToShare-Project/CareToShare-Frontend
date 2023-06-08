import styled from "styled-components"
import { DonateButton } from "../DonorPage/DonorStyles"

export const OverViewWrapper = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    padding: 20px 0px;
`
export const BoxWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 10px 5px;
`

export const Box = styled.div`
    width: 23%;
    height: 120px;
    background: ${({theme})=> theme.color.hover};
    border: 2px solid white;
    border-radius: 10px;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.4);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
`
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-text: center;

    h4{
        font-family: Poppins;
        font-weight: 700;
        font-size: 32px;
    }

    span{
        color: ${({theme})=> theme.background.primary};
    }

`

export const Right = styled.div`
    .icon{
        font-size: 40px;
        color: ${({theme})=> theme.background.primary}; 
    }
`

export const ApproveDonationContainer = styled.div`
    width : 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .spinner{
        position: absolute;
        left: 50%;
        top: 50%;
        color: white;
    }
`

export const ApproveButton = styled(DonateButton)`
    width: 90px;
    border-radius: 5px; 
    font-size: 12px;
`

export {}