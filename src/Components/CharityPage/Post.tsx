import React, { useRef, useState, useEffect} from 'react';
import { PostWrapper, PostFieldWrapper } from './CharityStyles';
import { Heading } from '../Login/LoginStyles';
import { uploadMultipleImages } from '../Shared_util/Constants/Functions';
import { ConfirmButton } from '../DonorPage/DonorStyles';
import { useAppDispatch} from '../Store/Store';
import { storage } from '../Shared_util/Constants/FireBase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { addPost } from '../Store/Post-Slice';
import { useNavigate } from 'react-router-dom';
import LoginToast from '../Shared_util/Toast/LoginToast';
import { Spinner } from 'react-bootstrap';

const Post = () => {
    const [imageUpload, setImageUpload] = useState<any>()
    let images: string[] = []
    const messageRef = useRef<any>("")
    const dispatch = useAppDispatch();
    const [showLoading, setShowLoading] = useState(false)

    const navigate = useNavigate()

     // state to show or hide toast
     const [showToast, setShowToast] = useState(false)
     
     // state to set toast message 
     const [toastMessage, setToastMessage] = useState('')

     const userData = sessionStorage.getItem('userDetails')
     const userDetails = userData && JSON.parse(userData)

    

    const uploadFileToStorageBucket = () => {
        if(imageUpload === null) return;
        try{
            
            for(let i=0; i< imageUpload.length ; i++){
                const imageRef = ref(storage, `postimages/${v4()}`)
                uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url)=> {
                      images.push(url)
                   })
              } )  
            }
        }catch(error){
            console.log()
        }
    
    
    }

    const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setShowLoading(true)
        uploadFileToStorageBucket()
    
        setTimeout(()=> {
            if(messageRef.current){
                dispatch(addPost({
                organisation: userDetails.organisationName,
                username : userDetails.username,
                message : messageRef.current.value,
                images : images,
                date : new Date().toLocaleString()
        
        }))
            setToastMessage('Success')
            setShowToast(true)
            setShowLoading(false)
            navigate("/login/organisation/")
        }
        }, 10000) 
    
    
    }

    
    
    return(
        <PostWrapper>
            <form
                 onSubmit={handlePost} 
                 style={{padding: '10px', display: 'flex', flexDirection: 'column', position:"relative"}}>
                <Heading style={{fontSize: '16px', textAlign: 'center'}}>
                    Share a message with the community
                </Heading>
                <PostFieldWrapper>
                    <label>Message *</label>
                    <textarea ref={messageRef}></textarea>
                </PostFieldWrapper>
                <PostFieldWrapper>
                    <label>Attach images</label>
                    <input type='file' onChange={(e)=>uploadMultipleImages(e,setImageUpload)} multiple/>
                </PostFieldWrapper>
                <ConfirmButton 
                    style={{width: '200px', position: 'absolute', right: '58px', bottom: '-20px'}}>
                    {showLoading && <Spinner animation='border' size='sm' className='spinner'/>}
                    Post
                </ConfirmButton>
            </form>
            <LoginToast 
                showToast={showToast}
                setShowToast= {setShowToast}
                toastMessage={toastMessage}
            />
            
        </PostWrapper>
        
    )
}



export default Post;