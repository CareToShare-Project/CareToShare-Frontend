import { createSlice, PayloadAction} from "@reduxjs/toolkit";


interface PostProps {
    id: number,
    username: string, 
    message: string,
    organisation: string,
    likes: number,
    images: string[]
    dislikes: number,
    comments: string[],
    postedOn : string
}

interface PostsState {
    posts : PostProps[]
}

const initialState : PostsState = {
    posts : []
}


export const PostSlice = createSlice({
    name : "post",
    initialState,
    reducers : {
        addPost : (state, action: PayloadAction<{organisation: string, username: string, message : string, images: string[], date : string}> ) => {
            state.posts.push({
                id: state.posts.length,
                message: action.payload.message,
                username: action.payload.username,
                organisation: action.payload.organisation,
                likes: 0,
                images: action.payload.images,
                dislikes: 0,
                comments: [],
                postedOn : action.payload.date
            })

            console.log("added")
        },
        deletePost : (state, action: PayloadAction<{id: number}>) => {
            const newpost = state.posts.filter(item=> item.id !== action.payload.id)
            state.posts = [...newpost]
        },

        likePost : (state, action: PayloadAction<{liked: boolean, id: number}>) => {
            const post = state.posts.find(item => item.id === action.payload.id);
            if(action.payload.liked && post){
                post.likes += -1;
            }
            else if(post){
                post.likes += 1;
            }
            
        },
        disLikePost : (state, action: PayloadAction<{disliked: boolean, id: number}>) => {
            const post = state.posts.find(item => item.id === action.payload.id);
            if(action.payload.disliked && post){
                post.dislikes += 1;
            }
            else if(post){
                post.dislikes += -1;
            }
            
        },

        addComment : (state, action : PayloadAction<{comment: string, id: number}>)=>{
            const post = state.posts.find(item=> item.id === action.payload.id)
            if(post){
                post.comments.push(action.payload.comment)
            }
        }

    }
})

export default PostSlice.reducer;
export const {addPost, likePost, disLikePost, addComment} = PostSlice.actions