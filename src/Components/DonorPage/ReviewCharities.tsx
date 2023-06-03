import React, {useState} from "react"
import { MessageWrapper, ReviewButton, ReviewContainer, ReviewFieldsWrapper, ReviewFormWrapper } from "./DonorStyles"
import LoginToast from "../Shared_util/Toast/LoginToast"
//import 'semantic-ui-css/semantic.min.css';




function ReviewCharities() {
    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)

    // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')

    const submitReview = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setToastMessage("Thank you for being an essential part of our donation app community!")
        setShowToast(true)
    }

    return(
        <ReviewContainer>
            <MessageWrapper>
                <h4>Share Your Feedback and Empower Change</h4>
                <p>Thank you for choosing to share your feedback! Your reviews play a 
                    crucial role in helping us build a vibrant community of organizations 
                    dedicated to making a positive impact. By sharing your experiences, you are 
                    not only supporting these organizations but also inspiring others to contribute 
                    towards meaningful causes.
                </p>
                <p>Please take a few moments to share your thoughts about the organization you have interacted 
                    with. Your review can highlight their strengths, commend their efforts, or suggest areas for 
                    improvement. Your valuable input will empower both the organization and our platform to continuously 
                    evolve and better serve the community. 
                </p>
                <p>Remember, every review counts and has the potential to create a ripple effect of positive change. Your words 
                    have the power to inspire others to get involved and make a difference. 
                    We appreciate your time and contribution in shaping a brighter future through your honest reviews.
                </p>
            </MessageWrapper>
            <ReviewFormWrapper onSubmit={submitReview}>
                <ReviewFieldsWrapper>
                    <label>Choose an organisation</label>
                    <select className="ui search dropdown">
                        <option value="">Organisation</option>
                        <option value="AL">Ghana Aid Foundation</option>
                        <option value="AK">Bosaata</option>
                        <option value="AZ">Zuba group of companies</option>
                        <option value="AR">Zabrogaski</option>
                    </select>
                </ReviewFieldsWrapper>
                <ReviewFieldsWrapper>
                    <label>Your review</label>
                    <textarea></textarea>
                </ReviewFieldsWrapper>
                <ReviewButton>Submit</ReviewButton>
                <LoginToast  
                        showToast={showToast} 
                        setShowToast={setShowToast} 
                        toastMessage={toastMessage}
                    />   
            </ReviewFormWrapper>
            
        </ReviewContainer>
    )
}

export default ReviewCharities