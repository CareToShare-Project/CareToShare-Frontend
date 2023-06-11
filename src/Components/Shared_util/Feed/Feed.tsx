import React, { useState } from "react"
import {FeedPageContainer, FeedWrapper, RightNavBar} from "./Feed.Styles"
import img from "../../HomePage/images/home1.jpg"
import { AiFillLike, AiFillDislike} from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "../../Store/Store"
import { disLikePost, likePost } from "../../Store/Post-Slice"


const Feed = () => {
    const posts = useAppSelector(state=> state.post.posts)
    console.log(posts)
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(true)
    const dispatch = useAppDispatch()
    
    const handlePostLike = (id: number) => {
        dispatch(likePost({
            liked,
            id
        }))

        setLiked(prev=>!prev)
    }

    const handlePostDislike = (id: number) => {
        dispatch(disLikePost({
            disliked,
            id
        }))

        setDisliked(prev=>!prev)
    }

    

    return (
        <FeedPageContainer>
            <FeedWrapper>
             {posts &&  
                posts.map((post)=> {
                    return (
                        <div className="feed-card" key={post.id}>
                            <div className="header">
                                <img src={img} alt="post-profile"/>
                                <span className="org">
                                    <span className="head">{post.organisation} </span>
                                    <span>{post.username}</span>
                                    <span className="time">posted on {post.postedOn.toLocaleString()}</span>
                                </span>
                                
                            </div>
                            <p>
                                {post.message}
                            </p>
                            <div className="footer">
                                {post.images && post.images.map(item=> {
                                   return (
                                          <img src={item} alt="footer" key={item}/>
                                          )
                                    })
                                }
                            </div>
                            <div className="likes">
                                <span>
                                    <AiFillLike size={20} onClick={()=>handlePostLike(post.id)}/> 
                                    <span>{post.likes}</span>
                                </span>
                                <span>
                                    <AiFillDislike size={20} onClick={()=>handlePostDislike(post.id)}/> 
                                    <span>{post.dislikes}</span>
                                </span>
                                <span>comments</span>
                            </div>
                    </div>
                    )
                    } 
                    )
            }
            
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