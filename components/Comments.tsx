import React from 'react'
import ReactTimeago from 'react-timeago'
import Avatar from './Avatar'

type Props = {
  comments: Comments[]
}

const Comments = ({ comments }: Props) => {
  return (
    <div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10">
      <hr className="py-2" />
      {comments?.map((comment) => (
        <div
          className="relative flex items-center space-x-2 space-y-5"
          key={comment.id}
        >
          <hr className="absolute top-10 left-7 z-0 h-16 border" />
          <div className="z-50">
            <Avatar seed={comment.username} />
          </div>
          <div className="flex flex-col">
            <p className="py-2 text-xs text-gray-400">
              <span className="font-semibold text-gray-600 ">
                {comment.username}
              </span>{' '}
              • <ReactTimeago date={comment.created_at} />
            </p>
            <p className="">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comments
