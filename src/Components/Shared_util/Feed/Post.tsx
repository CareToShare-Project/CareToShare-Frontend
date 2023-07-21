import React, { useRef, useState } from 'react';
import img from "../../HomePage/images/home1.jpg"
import { useAppDispatch } from "../../Store/Store"
import { Post, addComment, likePost } from "../../Store/Post-Slice"
import { MdChat, MdDelete } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { InputField } from '../../Login/LoginStyles';
import { ConfirmButton } from '../../DonorPage/DonorStyles';


const PostComponent: React.FC<Post> = ({ post }) => {
    const dispatch = useAppDispatch()
    const [showComment, setShowComment] = useState(false)
    const commentRef = useRef<any>("")

    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)




    const handlePostLike = (id: number) => {
        const username = userDetails.username
        dispatch(likePost({
            username,
            id
        }))
    }

    const addCommentController = (id: number) => {
        const username = userDetails.username;
        if (commentRef.current) {
            const comment = commentRef.current.value
            const commentData = { username, comment }
            dispatch(addComment({ comment: commentData, id }))
        }
        
        commentRef.current.value = ""
    }


    return (
        <div className="feed-card" key={post.id}>
            <div className="header">
                {post.profilePhoto ? <img src={post.profilePhoto} alt="post-profile" style={{objectFit : "cover"}}/> :<img src={img} alt="post-profile" />}
                <span className="org">
                    <span className="head">{post.organisation} </span>
                    <span>{post.username}</span>
                    <span className="time">{post.postedOn.toLocaleString()}</span>
                </span>
            </div>
            <p>
                {post.message}
            </p>
            <div className="footer">
                {post.images && post.images.map(item => {
                    return (
                        <img src={item} alt="footer" key={item} style={{objectFit : "cover"}} />
                    )
                })
                }
            </div>
            <div className="likes">
                <span>
                    <FaHeart size={25}
                        onClick={() => handlePostLike(post.id)}
                        className={post.likes.includes(userDetails.username) ? 'liked' : ''} />
                    <span>
                        {post.likes.length}
                    </span>
                </span>
                <span>
                    <MdChat size={25} onClick={() => setShowComment(prev => !prev)} />
                    <span>
                        {post.comments.length}
                    </span>
                </span>

                {post.username === userDetails.username ?
                    <span>
                        <MdDelete size={25} />
                    </span> : ""
                }
            </div>
            {showComment &&
                <div className='comment-section'>
                    <div className='input-field'>
                        <InputField
                            type='text'
                            placeholder='Comment on the post'
                            style={{ width: '80%', fontSize: '14px' }}
                            ref={commentRef}
                        />
                        <ConfirmButton
                            onClick={() => addCommentController(post.id)}
                            style={{ width: '20%', fontSize: '14px', padding: '5px' }}>
                            Comment
                        </ConfirmButton>
                    </div>
                    <div className='view-comments'>
                        {post.comments && post.comments.map(item => {
                            return (
                                <div key={item.username}>
                                    <span className='username'> {item.username}</span>
                                    <span className='message'>{item.comment}</span>
                                </div>
                            )
                        })}
                        {!post.comments.length && <div><span className='username'>No comment. Be the first to comment</span></div>}
                    </div>
                </div>
            }
        </div>
    );
}



export default PostComponent;