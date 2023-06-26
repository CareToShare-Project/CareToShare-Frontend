import { createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface PostProps {
    id: number,
    username: string, 
    message: string,
    organisation: string,
    likes: string[],
    images: string[],
    comments: CommentProps[],
    postedOn : string,
    profilePhoto : string
}

export interface Post{
    post : PostProps
}

interface PostsState {
    posts : PostProps[]
}

interface CommentProps {
    username : string,
    comment : string
}

const initialState : PostsState = {
    posts : []
}




export const PostSlice = createSlice({
    name : "post",
    initialState,
    reducers : {
        addPost : (state, action: PayloadAction<{organisation: string, username: string, message : string, images: string[], date : string , photo: string}>,  ) => {
            state.posts.push({
                id: state.posts.length,
                message: action.payload.message,
                username: action.payload.username,
                organisation: action.payload.organisation,
                likes: [],
                images: action.payload.images,
                comments: [],
                postedOn : action.payload.date,
                profilePhoto : action.payload.photo
            })

            console.log("added")
        },
        deletePost : (state, action: PayloadAction<{id: number}>) => {
            const newpost = state.posts.filter(item=> item.id !== action.payload.id)
            state.posts = [...newpost]
        },

        likePost : (state, action: PayloadAction<{username: string, id: number}>) => {
            const post = state.posts.find(item => item.id === action.payload.id);
            const user = post?.likes.find(item => item === action.payload.username);
            if(user && post){
                const filteredLikes = post.likes.filter(item=> item !== action.payload.username)
                post.likes = [...filteredLikes]
            }else if(post){
                post.likes = [...post.likes, action.payload.username]
            }
            
        },
      
        addComment : (state, action : PayloadAction<{comment: CommentProps, id: number}>)=>{
            const post = state.posts.find(item=> item.id === action.payload.id)
            if(post){
                post.comments.push(action.payload.comment)
            }
        }

    }
})

export default PostSlice.reducer;
export const {addPost, likePost, addComment} = PostSlice.actions