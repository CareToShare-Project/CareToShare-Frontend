import React from "react"
import { FeedPageContainer, FeedWrapper } from "./Feed.Styles"
import { useAppSelector } from "../../Store/Store"
import { PostProps } from "../../Store/Post-Slice"
import PostComponent from "./Post"



const Feed = () => {
    const posts = useAppSelector(state => state.post.posts)

    return (
        <FeedPageContainer>
            <div>Drop down goes here for filtering</div>
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