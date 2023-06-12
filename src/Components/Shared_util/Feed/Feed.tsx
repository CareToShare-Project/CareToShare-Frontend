import React, { useState, useEffect } from "react"
import {FeedPageContainer, FeedWrapper, RightNavBar} from "./Feed.Styles"
import img from "../../HomePage/images/home1.jpg"
import { AiFillLike} from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "../../Store/Store"
import { likePost} from "../../Store/Post-Slice"



const Feed = () => {
    const posts = useAppSelector(state=> state.post.posts)
    console.log(posts)
    const [user, setUser] = useState<any>("")
    const dispatch = useAppDispatch()
    
    
    const handlePostLike = (id: number) => {
        const username = user.username
        dispatch(likePost({
            username,
            id
        }))
       
    }

    useEffect(()=>{
        const results = sessionStorage.getItem('user')
        if(results !== null){
            const userData = JSON.parse(results)
            setUser(userData)
        }
        
    }, [setUser])

    

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
                                    <AiFillLike size={20} 
                                                onClick={()=>handlePostLike(post.id)} 
                                                className={post.likes.includes(user.username) ? 'liked' : ''}/> 
                                    <span >
                                        {post.likes.length}
                                    </span>
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
                    <li>Recent</li>
                    <li>Sort by likes</li>
                </ul>
            </RightNavBar>
        </FeedPageContainer>

    )
}

export default Feed