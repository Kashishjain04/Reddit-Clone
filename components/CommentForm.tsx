import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { GET_POST_BY_POST_ID } from '../graphql/queries'
import { ADD_COMMENT } from '../graphql/mutations'
import toast from 'react-hot-toast'

type Props = {
  postId: string
  username: string
}
type FormData = {
  comment: string
}
const CommentForm = ({postId, username}: Props) => {
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POST_BY_POST_ID, 'getPostListByPostId'],
  })
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const notification = toast.loading('Posting your comment...')
    await addComment({
      variables: {
        post_id: postId,
        username: username,
        text: data?.comment,
      },
    })
    setValue('comment', '')
    toast.success('Commented!', { id: notification })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2">
      <textarea
        {...register('comment')}
        disabled={!username}
        className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
        placeholder={
          username ? 'What are your thoughts?' : 'Please sign in to comment'
        }
      />
      <button
      disabled={!username}
        type="submit"
        className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200"
      >
        Comment
      </button>
    </form>
  )
}

export default CommentForm
