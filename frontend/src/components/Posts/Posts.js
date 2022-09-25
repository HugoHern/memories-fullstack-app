import React from 'react'
import Post from './Post/Post'
import useStyles from './Styles'
import { useSelector } from 'react-redux'


function Posts() {
  const posts = useSelector((state)=> state.posts)
  const classes = useStyles()
  console.log(posts)
  return (
    <>
    <h1>POSTS</h1>
    <Post/>
    <Post/>
    </>
  )
}

export default Posts