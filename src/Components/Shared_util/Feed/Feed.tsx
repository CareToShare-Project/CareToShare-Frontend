import React, { useState } from "react"
import { FeedPageContainer, FeedWrapper } from "./Feed.Styles"
import { useAppSelector } from "../../Store/Store"
import { PostProps } from "../../Store/Post-Slice"
import PostComponent from "./Post"
import SearchBar from "../SearchBar/SearchBar"



const Feed = () => {
    const posts = useAppSelector(state => state.post.posts)
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    console.log(refresh)

    return (
        <FeedPageContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh}/>
            <FeedWrapper>
                {posts &&
                    posts.map((post: PostProps) => {
                        return (
                            <PostComponent post={post} key={post.id} />
                        )
                    }
                    )
                }

            </FeedWrapper>
        </FeedPageContainer>

    )
}

export default Feed