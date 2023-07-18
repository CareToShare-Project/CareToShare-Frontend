import React from 'react'
import {CampaignCardWrapper, CampaignImageContainer, CampaignDetailsContainer, SupportCampaignButton } from './DonorStyles'
import image1 from '../HomePage/images/image2.jpg'
import { RequestCardProp } from '../Shared_util/Constants/Types'
import { useNavigate } from "react-router-dom"
import { MdMoreTime } from 'react-icons/md'



const RequestCard: React.FC<RequestCardProp> = ({ details }) => {

    const {organisationName, campaignImage, campaignTitle, endDate, description} = details

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
      
     

    const navigate = useNavigate()

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
                <div >
                    <span className='heading'>Days Left</span>
                    <span>
                        <MdMoreTime size={25} color='green'/> {" "} 
                        {calculateDaysLeft(endDate)}   
                    </span>
                </div>
               <SupportCampaignButton>
                    Donate Now 
               </SupportCampaignButton>
            </CampaignDetailsContainer>
        </CampaignCardWrapper>

    )
}

export default RequestCard