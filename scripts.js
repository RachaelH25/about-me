"use strict";

let userPoints = 0;
alert("Welcome to my guessing game!");

function userGreet() {
  let user = prompt("Hi! I'm Rachael. What's your name?");

  while (!user) {
    user = prompt("What is your name? Really, I want to know.");
  }

  alert("Hi " + user + "! Thanks for visiting my site.");
}
userGreet();

function favColor() {
  let color = prompt("Is my favourite colour green? answer yes/no or y/n");
  if (color.toLowerCase() === "yes" || color.toLowerCase() === "y") {
    userPoints++;
    alert("You're correct. Green is my favourite colour!");
  } else {
    alert("Oops! You got it wrong.");
  }
  alert("you have " + userPoints + " points.");
}
favColor();

function sibQ() {
  let siblings = prompt("Do I have sisters? answer yes/no or y/n");
  if (siblings.toLowerCase() === "no" || siblings.toLowerCase() === "n") {
    alert("Correct! I have two brothers.");
    userPoints++;
  } else {
    alert("Nope. I am sisterless.");
  }
  alert("you have " + userPoints + " points.");
}
sibQ();

function uniLang() {
  let uni = prompt(
    "Did I learn a language in university? answer yes/no or y/n"
  );
  if (uni.toLowerCase() === "yes" || uni.toLowerCase() === "y") {
    alert("はい, I took Japanese classes for two years.");
    userPoints++;
  } else {
    alert("Incorrect! I don't remember a lot but I did take classes.");
  }
  alert("you have " + userPoints + " points.");
}
uniLang();

function tesco() {
  let work = prompt(
    "Have I worked in Tesco for only 2 years? answer yes/no or y/n"
  );
  if (work.toLowerCase() === "no" || work.toLowerCase() === "n") {
    alert("You're correct. It will be 4 years in April... unfortunately.");
    userPoints++;
  } else {
    alert(
      "DOUBLE IT. You're sadly mistaken. I have worked there for 4 years not 2."
    );
  }
  alert("you have " + userPoints + " points.");
}
tesco();

function petsQ() {
  let pets = prompt("Do I have any pets? answer yes/no or y/n");
  if (pets.toLowerCase() === "no" || pets.toLowerCase() === "n") {
    alert(
      "You're correct. I have no pets so I have to visit friends with pets instead!"
    );
    userPoints++;
  } else {
    alert("Nope. I am a human without animals!");
  }
  alert("you have " + userPoints + " points.");
}
petsQ();

function guessNum() {
  const number = 7;
  let guess = prompt("Guess a number between 1 and 10?");

  for (let i = 3; i >= 0; i--) {
    console.log("hello");
    if (i == 0) {
      alert("Unlucky, that was your final attempt. The number was " + number);
      break;
    }
    if (guess < number) {
      alert("Too low, guess again.");
      guess = prompt(
        "Please guess the number again? You now have " + i + " attempts left."
      );
    } else if (guess > number) {
      alert("Too high, guess again.");
      guess = prompt(
        "Please guess the number again? You now have " + i + " attempts left."
      );
    } else {
      userPoints++;
      alert("Well done, that's correct. You have " + userPoints + " points.");
      break;
    }
  }
  alert("you have " + userPoints + " points.");
  alert("That's the end of the quiz. Thanks for playing, " + user + "!");
}
guessNum();

// let answer = prompt(
//   "Name one of the Top Five places in my list of Countries I want to visit."
// ).toLowerCase();
// console.log(answer);
// let topTenList = ["japan", "taiwan", "china", "south korea", "thailand"];

// for (let i = 6; i >= topTenList.length; i--) {
//   if (i == 0) {
//     alert(
//       "Unlucky, you're out of guesses. They were Japan, Thailand, South Korea, Taiwan and China."
//     );
//     break;
//   }
//   if ((answer = "japan")) {
//     userPoints++;
//     alert("Well done, that's correct. You have " + userPoints + " points.");
//   } else {
//     alert("Incorrect. Try again.");
//     answer = prompt(
//       "Please guess another country? You now have " + i + " attempts left."
//     );
//     break;
//   }
// }

// let index = topTenList.indexOf("taiwan");
// console.log(index);

// if (answer === "yes" || answer === "y") {
//   userPoints++;
// } else {
//   alert("Wrong! Try again.");
// }

// alert("you have " + userPoints + " points.");
