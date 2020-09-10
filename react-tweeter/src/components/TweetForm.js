import React, { useState } from "react";
import "./TweetForm.css";

export const TweetForm = ({ addNewTweet}) => {
  const [tweetText, setTweetText] = useState("");
  const tweetRemainingLength = 140 - tweetText.length;
  const spanStyle = { color: tweetRemainingLength >= 0 ? "black" : "red"}

  const submitTweet = event => {
    event.preventDefault();
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText("");
    }
  }

  return (
    <>
      <section className="error">
        <p className="err-message">Test</p>
      </section>
      <section className="new-tweet">
        <h2>Compose Tweet</h2>
        <form onSubmit={submitTweet} className="compose-tweet" method="POST" action="/tweets">
          <textarea
            value={tweetText}
            onChange={event => setTweetText(event.target.value)}
            className="tweet-text"
            name="text"
            placeholder="What are you humming about?"
          ></textarea>
          <input className="btn" type="submit" value="Tweet" />
          <span className="counter" style={spanStyle}>{140 - tweetText.length}</span>
        </form>
      </section>
    </>
  );
};
