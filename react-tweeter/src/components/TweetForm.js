import React from "react";
import './TweetForm.css'

export const TweetForm = () => {
  return (
    <>
      <section className="error">
        <p className="err-message">Test</p>
      </section>
      <section className="new-tweet">
        <h2>Compose Tweet</h2>
        <form className="compose-tweet" method="POST" action="/tweets">
          <textarea
            className="tweet-text"
            name="text"
            placeholder="What are you humming about?"
          ></textarea>
          <input className="btn" type="submit" value="Tweet" />
          <span className="counter">140</span>
        </form>
      </section>
    </>
  );
};
