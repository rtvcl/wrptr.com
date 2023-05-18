import React from 'react'

type Props = {
    params: {
        slug: string
    }
}

const PostDetailPage = ({params: {slug}}: Props) => {
  return (
    <div>{slug}</div>
  )
}

export default PostDetailPage