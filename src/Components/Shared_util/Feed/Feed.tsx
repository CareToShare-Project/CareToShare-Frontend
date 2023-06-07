import React from "react"
import {FeedPageContainer, FeedWrapper, RightNavBar} from "./Feed.Styles"
import img from "../../HomePage/images/home1.jpg"
import img1 from "../../HomePage/images/image2.jpg"
import img2 from "../../HomePage/images/image3.jpg"
import img3 from "../../HomePage/images/image1.jpg"
import { AiFillLike, AiFillDislike} from "react-icons/ai"


const Feed = () => {

    return (
        <FeedPageContainer>

            <FeedWrapper>
                <div className="feed-card">
                    <div className="header">
                        <img src={img} alt="post-profile"/>
                        <span className="org">Ghana Aid Foundation</span>
                        <span className="post">posted on CareToShare</span>
                        <span className="time">3 days ago</span>
                    </div>
                    <p>Thanks to your kind donation, we were able to provide enough foodstuffs to the community. 
                        Your donation has already made a huge impact.
                    </p>
                    <div className="footer">
                        <img src={img1} alt="footer"/>
                        <img src={img2} alt="footer"/>
                        <img src={img3} alt="footer"/>
                    </div>
                    <div className="likes">
                        <span>
                            <AiFillLike size={20}/> 
                            <span>2k</span>
                        </span>
                        <span>
                            <AiFillDislike size={20}/> 
                            <span>3</span>
                        </span>
                        <span>show comments</span>
                    </div>
                </div>
                <div className="feed-card">
                    <div className="header">
                        <img src={img} alt="post-profile"/>
                        <span className="org">Zuuba Foundation</span>
                        <span className="post">posted on CareToShare</span>
                        <span className="time">1 hour ago</span>
                    </div>
                    <p>Thanks to your kind donation, we were able to provide enough foodstuffs to the community. 
                        Your donation has already made a huge impact. Each year, with the help of gracious donors like 
                        you, we are able to significantly expand our reach in the communities we serve. This year is no 
                        different, as we plan to start our new initiative, which wouldn’t be possible without your support
                    </p>
                    <div className="footer">
                        <img src={img1} alt="footer"/>
                        <img src={img2} alt="footer"/>
                        <img src={img3} alt="footer"/>
                    </div>
                    <div className="likes">
                        <span>
                            <AiFillLike size={20}/> 
                            <span>2k</span>
                        </span>
                        <span>
                            <AiFillDislike size={20}/> 
                            <span>3</span>
                        </span>
                        <span>show comments</span>
                    </div>
                </div>    
            </FeedWrapper>
            <RightNavBar>
                <ul>
                    <li>All</li>
                    <li>Recent</li>
                    <li>Sort by likes</li>
                </ul>
            </RightNavBar>
        </FeedPageContainer>

    )
}

export default Feed