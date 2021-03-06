// mrvivacious.magicalMessages
// Magical Messages
// GenerateCompliment.js
//
// This file selects a random message from our
//  list of Magical Messages
//
// @author Vivek Bhookya

// Where do I see console messages ?
var console = require('console');

// Main entry point
function getCompliment() {
  // The compliments
  let compliments = [
    "You are a wonderful person.",
    "You are very beautiful today.",
    "You should smile more. You have a wonderful smile.",
    "You are loved.",
    "You have a very nice voice.",
    "People in this world appreciate you, just the way you are.",
    "I know there are great things in store for you.",
    "You add value to all the lives you touch.",
    "You look lovely today.",
    "You are a champion.",
    "You are awesome.",
    "You inspire many.",
    "You are a meaningful and special individual.",
    "Don't forget to smile, you are beautiful!",
    "You did a good job today.",
    "You are a role model and a great friend."
  ];
  
  // Generate a random number and grab that message
  let randomIdx = Math.floor(Math.random() * compliments.length);
  let randomMsg = compliments[randomIdx];

  // MessageResult
  return {
    msg: randomMsg
  }
}

module.exports = {
  function: getCompliment
}