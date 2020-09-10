import React, { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { Tweets } from "./components/Tweets";

const initialTweetsData = [
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

function App() {
  const [tweetsData, setTweetsData] = useState(initialTweetsData);

  const addNewTweet = (text) => {
    const newTweet = {
      name: "Descartes",
      handle: "@Des",
      profile_image: "https://i.imgur.com/nlhLi3I.png",
      text,
      date: "5 days ago",
    };

    setTweetsData([newTweet, ...tweetsData]);
  };

  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm addNewTweet={addNewTweet} />
        <Tweets tweetsData={tweetsData} />
      </main>
    </div>
  );
}

export default App;
