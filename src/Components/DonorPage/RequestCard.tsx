import React, { useEffect, useState } from 'react'
import {CampaignCardWrapper, CampaignImageContainer, CampaignDetailsContainer, SupportCampaignButton } from './DonorStyles'
import image1 from '../HomePage/images/image2.jpg'
import { RequestCardProp, donationProps } from '../Shared_util/Constants/Types'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useNavigate } from "react-router-dom"
import { MdMoreTime } from 'react-icons/md'
import { BASE_URL } from '../Shared_util/Constants/Base_URL'



const RequestCard: React.FC<RequestCardProp> = ({ details }) => {

    const {organisationName, campaignImage, campaignTitle, endDate, description, target, campaignId, requestStatus} = details
    const navigate = useNavigate()
    const [campaignDonation, setCampaignDonations] = useState<donationProps[]>([])
    
    const totalDonations = campaignDonation.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
    const progress = target && (totalDonations/target) * 100
    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);
    
    const getAllDonations = async () => {
        try {
            const response = await fetch(`${BASE_URL}/donations/${campaignId}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application{/json',
                    'authorization': `Bearer ${accessToken}`
                },
            })
    
            if (response.status === 401) return navigate("/login")
    
            if (response.status === 500) return

            const results = await response.json();
            const donation = results.data
            if (results.status === "success") {
                setCampaignDonations(donation)

            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleDonation = () => {
        sessionStorage.setItem('campaign', JSON.stringify(details))
        sessionStorage.setItem('totalDonations', JSON.stringify(totalDonations))
        navigate('makeDonations')
    }

    function calculateDaysLeft(dateString : Date | undefined) {
        // Convert the given date string to a Date object
        if (dateString=== undefined) return
        const givenDate = new Date(dateString);
      
        // Get the current date
        const currentDate = new Date();
      
        // Calculate the time difference in milliseconds
        const timeDiff =  givenDate.getTime() - currentDate.getTime();
      
        // Convert the time difference to days
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

      
        return `${daysDiff} days`;
      }

      useEffect(()=>{
        getAllDonations()
      },[])
      
    
    return (
        <CampaignCardWrapper>
                {campaignImage ?
                                <CampaignImageContainer src={campaignImage} alt='request-photo' />:
                                <CampaignImageContainer src={image1} alt='request-photo' />
                    }
            
            <CampaignDetailsContainer>
                <div>
                    <span className='heading'>Campaign</span>
                    <span className='content'>{campaignTitle}</span>
                </div>
                <div>
                    <span className='heading'>About</span>
                    <span className='content'>{description}</span>
                </div>
                
                <div>
                    <span className='heading'>Organisation</span>
                    <span className='content'>{organisationName}</span>
                </div>
                <div>
                    <span className='heading'>Status</span>
                    <span className='content'>{requestStatus}</span>
                </div>
                <div >
                    <span className='heading'>Days Left</span>
                    <span>
                        <MdMoreTime size={25} color='green'/> {" "} 
                        {calculateDaysLeft(endDate)}   
                    </span>
                </div>
                <div style={{width: "40%"}}>
                    <span className='heading'>
                        {totalDonations} raised of {target}
                    </span>
                    <span>
                        <ProgressBar now={progress} label={`${progress}%`}  variant='success'/>
                    </span>
                    
                </div>
               <SupportCampaignButton onClick={()=> handleDonation()}>
                    Donate Now 
               </SupportCampaignButton>
            </CampaignDetailsContainer>
        </CampaignCardWrapper>

    )
}

export default RequestCard