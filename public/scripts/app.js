/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const moment = require('moment');
// moment().format();

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createDateString = function(date) {
  let dateStr = "";
  const datePast = new Date(date);
  const dateNow = Date.now();
  const duration = dateNow - datePast;
  const divDays = 1000 * 3600 * 24; //miliseconds in one day
  if (duration <= 1000 * 3600) {
    const mins = Math.floor(duration / 60000).toString();
    dateStr = mins + " minutes ago";
    return dateStr;
  }
  if (duration <= divDays) {
    const hours = Math.floor(duration / (3600000));
    dateStr = hours.toString() + " hours ago";
  } else {
    const days = Math.floor(duration / divDays).toString();
    dateStr = days + " days ago";
  }
  return dateStr;
};

const createTweetElement = function(tweetData) { //this function also append it to page
  // const article = document.createElement("article"); // using vanilla JS
  // article.className = "tweet";
  let article = $('<article>').addClass('tweet'); // using jQuery method
  const newDateStr = createDateString(tweetData.created_at);
  // let $tweet = $('<article').addClass('tweet');
  article.append(` <header>
  <span class="h-image">
    <img src=${tweetData.user.avatars}>
  </span>
  <span class="h-name">
    <h3>${tweetData.user.name}</h3>
  </span>
  <span class="h-aname">
    <h3>${tweetData.user.handle}</h3>
  </span>
</header>
<p>
  ${tweetData.content.text}
</p>
<footer class="foot">
  <span class="footer-left">
    <h4>${newDateStr}</h4>
  </span>
  <span class="footer-right">
      <i class='fas fa-flag' style='font-size:24px'></i>
      <i class='fas fa-retweet' style='font-size:24px'></i>
      <i class='fas fa-heart' style='font-size:24px'></i>
  </span>
  <!-- <h3>Footer Tweet</h3> -->
</footer>`);
// let main = document.querySelector("main");
// main.className = "container";
return article;
// $(".container").append(article);
};

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  console.log('Render tweets called ', tweets);
  for (let tweet of tweets) {
    const appTweet = createTweetElement(tweet);
    $(".tweet-container").prepend(appTweet);
  }
}
 
const loadTweets = function() {
      // ajax post
      // $.ajax({
      //   method: "GET",
      //   url: "some.php"
      // })
      //   .done(function(data ) {
      //     alert( "Data Saved: " + msg );
      //     // rerender the tweets
      //     const $tweet = renderTweets(data);
      // });
  $.get("/tweets",data,renderTweets);
  // .done(function(data) {
  // // const $tweet = renderTweets(data);
  //   console.log("Done --> ", arguments);
  // });
}

$(document).ready(function() {
  const load = loadTweets();

  // const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});