import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { Tweet } from "./components/Tweet";

const tweetsData = [
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
  {
    name: "Descartes",
    handle: "@Des",
    profile_image: "https://i.imgur.com/nlhLi3I.png",
    text: "Je pense , donc je suis",
    date: "15 days ago",
  }
];

function App() {
  const tweets = tweetsData.map((tweetData, i) => {
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
  });

  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm />
        <section className="tweet-container">
          {tweets}
        </section>
      </main>
    </div>
  );
}

export default App;
