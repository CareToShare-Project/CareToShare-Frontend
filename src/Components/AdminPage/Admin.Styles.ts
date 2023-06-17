import styled, { keyframes } from "styled-components"
import { DonateButton } from "../DonorPage/DonorStyles"

const fadeFromRight = keyframes`
    to{
        transform: translateX(0px);
        opacity: 1;  
    }
`
export const OverViewWrapper = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    transform: translateX(100px);
    opacity: 0;
    padding: 20px 0px;
    gap: 80px;
    animation: ${fadeFromRight} 1s ease-in-out forwards;

`
export const DonationChartWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h4{
        color: ${({theme})=> theme.color.primary};
    }
`

export const SummaryWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h4{
        color: ${({theme})=> theme.color.primary};
    }
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
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.1);
    border: 1px solid rgba(86, 192, 200, 0.3);
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