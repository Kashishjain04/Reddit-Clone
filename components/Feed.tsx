import { useQuery } from '@apollo/client'
import React from 'react'
import Post from './Post'
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from '../graphql/queries'
import PostLoader from './PostLoader'

type Props = {
  topic?: string
}

const Feed = ({ topic }: Props) => {
  const { data, loading } = topic
    ? useQuery(GET_ALL_POSTS_BY_TOPIC, {
        variables: {
          topic: topic[0],
        },
      })
    : useQuery(GET_ALL_POSTS)
  const posts: Post[] = topic ? data?.getPostListByTopic : data?.getPostList

  return (
    <div className="mt-5 flex-1 space-y-4">
      {loading ? (
        <PostLoader className="w-full rounded-md border border-gray-300 bg-white shadow-sm" />
      ) : (
        posts?.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  )
}

export default Feed
