import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'

const tweets = [
  {
    name: "Domino Paper",
    handle: '@Dominus',
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: "If I have seen further it is by standing on the shoulders of giants",
    date: "10 days ago"
  },
  {
    name: "Descartes",
    handle: '@Des',
    profile_image: "https://i.imgur.com/nlhLi3I.png",
    text: "Je pense , donc je suis",
    date: "15 days ago"
  }
]

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className='container'>
        <TweetForm />
        <section className='tweet-container'>
          <Tweet />
          <Tweet />
        </section>
      </main>
    </div>
  );
}

export default App;
