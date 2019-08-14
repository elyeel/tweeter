// const $ = require('jquery');
$(document).ready(function() {
  // --- our code goes here ---
  console.log("Testing loading jQuery....");
    $(".tweet-text").on("input", function() {
    const len = $(this).val().length;
    $(".counter").text(140 - len);
    if (len > 140) {
      $(".counter").css("color","red");
    } else {
      $(".counter").css("color","black");
    }
    })
    // $(".tweet-text").on("keyup", function() {
    //   // const len = $(this).val().length;
    //   // $(".counter").text(140 - len);
    //   console.log("blur test");
    // })

  });


