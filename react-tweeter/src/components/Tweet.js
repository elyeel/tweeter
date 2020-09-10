import React from "react";
import './Tweet.css'

export const Tweet = () => {
  return (
    <article className="tweet">
      <header>
        <span className="h-image">
          <img src="https://i.imgur.com/73hZDYK.png" />
        </span>
        <span className="h-name">
          <h3>Newton</h3>
        </span>
        <span className="h-aname">
          <h3>@SirIsaac</h3>
        </span>
      </header>
      <p>If I have seen further it is by standing on the shoulders of giants</p>
      <footer className="foot">
        <span className="footer-left">
          <h4>1604 days ago</h4>
        </span>
        <span className="footer-right">
          <i className="fas fa-flag"></i>
          <i className="fas fa-retweet"></i>
          <i className="fas fa-heart"></i>
        </span>
      </footer>
    </article>
  );
};
