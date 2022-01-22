import React from 'react';

interface Props {
  title: string;
}

function PostTitle({ title }: Props) {
  return(
    <>
    <p>{title}</p>
    </>
  )
}

export default PostTitle;