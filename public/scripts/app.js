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
  let $article = $('<article>').addClass('tweet'); // using jQuery method

  // create header in tweeter container
  const newDateStr = createDateString(tweetData.created_at);
  const $spanCHImage = $('<span>').addClass("h-image");
  const $img = $("<img>").attr("src", tweetData.user.avatars);
  $spanCHImage.append($img);
  const $spanHName = $('<span>').addClass("h-name");
  const $h3Name = $("<h3>").text(tweetData.user.name);
  $spanHName.append($h3Name);
  const $spanHaName = $("<span>").addClass("h-aname");
  const $h3aName = $("<h3>").text(tweetData.user.handle);
  $spanHaName.append($h3aName);
  const $header = $('<header>')
  $header.append($spanCHImage, $spanHName, $spanHaName);
  
  //create tweet message body in tweeter container
  const $pTweet = $("<p>").text(tweetData.content.text);
    
  //creat footer in tweeter container
  const $spanFLeft = $("<span>").addClass("footer-left");
  $spanFLeft.append($("<h4>").text(newDateStr));
  const $spanFRight = $("<span>").addClass("footer-right");
  const $iFlag = $("<i>").addClass("fas fa-flag").attr("style", "font-size:24px");
  const $iRetweet = $("<i>").addClass("fas fa-retweet").attr("style", "font-size:24px");
  const $iHeart = $("<i>").addClass("fas fa-heart").attr("style", "font-size:24px");
  $spanFRight.append($iFlag, $iRetweet, $iHeart);
  const $footer = $("<footer>").addClass("foot");
  $footer.append($spanFLeft, $spanFRight);

  //append header, body, and footer to container
  $article.append($header, $pTweet, $footer);
  
  //   article.append(` <header>
              //   <span class="h-image">
              //     <img src=${tweetData.user.avatars}>
              //   </span>
              //   <span class="h-name">
              //     <h3>${tweetData.user.name}</h3>
              //   </span>
              //   <span class="h-aname">
              //     <h3>${tweetData.user.handle}</h3>
              //   </span>
              // </header>
              // <p>
              //   ${tweetData.content.text}
              // </p>
              // <footer class="foot">
              //   <span class="footer-left">
              //     <h4>${newDateStr}</h4>
              //   </span>
              //   <span class="footer-right">
              //       <i class='fas fa-flag' style='font-size:24px'></i>
              //       <i class='fas fa-retweet' style='font-size:24px'></i>
              //       <i class='fas fa-heart' style='font-size:24px'></i>
              //   </span>
              //   <!-- <h3>Footer Tweet</h3> -->
              // </footer>`);


// let main = document.querySelector("main");
// main.className = "container";
return $article;
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
  $(".compose-tweet").submit(function(event) {
    event.preventDefault();
    const tweetLength = $('.tweet-text').text($('.tweet-text').val()).length;
    const tweetText = $('.tweet-text').val();
    if (tweetText === '' || tweetText === null) {
      alert("Tweet is empty!!!");
      return;
    }
    if (tweetLength > 140) {
      alert("Your tweet is too long. Only 140 characters allowed.");
      return;
    }
    //ajax post
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $('.compose-tweet').serialize(),
      success: function () {
        // $('.tweet-container').empty(); // clear the client side tweets
        loadTweets(); // reloading the tweets back with latest update under success callback
      }
    })
      .done(function(data, textStatus) {
        // alert( "Data Saved: " + JSON.stringify(data) );
        // // rerender the tweets
        console.log('done:', textStatus);
      });
  })

  // const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});