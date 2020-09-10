import React from "react";
import { Tweet } from "./Tweet";

export const Tweets = ({ tweetsData }) => {
  const tweets = tweetsData ? tweetsData.map((tweetData, i) => {
    return (
      <Tweet
        key={i}
        name={tweetData.name}
        handle={tweetData.handle}
        profile_image={tweetData.profile_image}
        text={tweetData.text}
        date={tweetData.date}
      />
    );
  }) : "There is no Tweet here";

  return <section className="tweet-container">{tweets}</section>;
};
