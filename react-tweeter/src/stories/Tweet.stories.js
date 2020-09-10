import React from 'react'
import { Tweet } from '../components/Tweet'

export default { title: 'Singular Tweet'}

export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {
  const singleTweet = {
    name: "Domino Paper",
    handle: "@Dominus",
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: "If I have seen further it is by standing on the shoulders of giants",
    date: "10 days ago"
  }

  return <Tweet 
    name={singleTweet.name}
    handle={singleTweet.handle}
    profile_image={singleTweet.profile_image}
    text={singleTweet.text}
    date={singleTweet.date}
  />
}