import React from 'react'
import { Tweets } from '../components/Tweets'

export default { title: 'Tweet Container'}

export const emptyTweet = () => <Tweets />

export const populatedTweet = () => {
  const tweets = [
    {
      name: "Domino Paper",
      handle: "@Dominus",
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text: "If I have seen further it is by standing on the shoulders of giants",
      date: "10 days ago",
    },
    {
      name: "Descartes",
      handle: "@Des",
      profile_image: "https://i.imgur.com/nlhLi3I.png",
      text: "Je pense , donc je suis",
      date: "15 days ago",
    },
    {
      name: "Domino Paper",
      handle: "@Dominus",
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text: "If I have seen further it is by standing on the shoulders of giants",
      date: "10 days ago",
    },
  ];

  return <Tweets 
    tweetsData={tweets}
  />
}