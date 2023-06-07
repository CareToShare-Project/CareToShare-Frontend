import styled from "styled-components"
import { DonateButton } from "../DonorPage/DonorStyles"

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