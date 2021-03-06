import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

type Props = {
  seed?: String,
  large?: Boolean,
}

const Avatar = ({seed, large}: Props) => {
  const { data: session } = useSession()
  return (
    <div className={`relative overflow-hidden rounded-full border-gray-300 bg-white ${large ? "h-20 w-20" : "h-10 w-10"}`}>
      <Image
        layout="fill"
        src={`https://avatars.dicebear.com/api/open-peeps/${
          seed || session?.user?.name || 'placeholder'
        }e.svg`}
      />
    </div>
  )
}

export default Avatar
