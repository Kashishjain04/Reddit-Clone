import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_POST_BY_POST_ID } from '../../graphql/queries'
import Post from '../../components/Post'
import { useSession } from 'next-auth/react'
import CommentForm from '../../components/CommentForm'
import Comments from '../../components/Comments'
import { Jelly } from '@uiball/loaders'

const PostPage = () => {
  const { data: session } = useSession()
  const {
    query: { postId },
  } = useRouter()
  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: postId?.[0],
    },
  })
  const post: Post = data?.getPostListByPostId[0]

  return !post ? (
    <div className="tems-center flex w-full justify-center p-10 text-xl">
      <Jelly size={50} color="#FF4501" />
    </div>
  ) : (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
      <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16">
        <p className="text-sm">
          Comment as <span className="text-red-500">{session?.user?.name}</span>
        </p>
        <CommentForm
          postId={postId?.[0] || ''}
          username={session?.user?.name || ''}
        />
      </div>
      <Comments comments={post.comments} />
    </div>
  )
}

export default PostPage
