import React from "react";
import "./Tweet.css";

export const Tweet = ({name,text,profile_image,date,handle}) => {
  return (
    <article className="tweet">
      <header>
        <span className="h-image">
          <img src={profile_image} />
        </span>
        <span className="h-name">
          <h3>{name}</h3>
        </span>
        <span className="h-aname">
          <h3>{handle}</h3>
        </span>
      </header>
      <p>{text}</p>
      <footer className="foot">
        <span className="footer-left">
          <h4>{date}</h4>
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
