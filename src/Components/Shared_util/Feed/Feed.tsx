import React, { useState } from "react"
import { FeedPageContainer, FeedWrapper } from "./Feed.Styles"
import { useAppSelector } from "../../Store/Store"
import { PostProps } from "../../Store/Post-Slice"
import PostComponent from "./Post"
import SearchBar from "../SearchBar/SearchBar"
import { NoOrganisationContainer } from "../../DonorPage/DonorStyles"



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
                {posts.length === 0 && <NoOrganisationContainer style={{fontSize: '22px', letterSpacing: "2px"}}>
                                            Nothing to show
                                        </NoOrganisationContainer>}

            </FeedWrapper>
        </FeedPageContainer>

    )
}

export default Feed