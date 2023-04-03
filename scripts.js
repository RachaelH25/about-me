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
  const num = 7;
  let guess = prompt("Guess a number between 1 and 10! You have 4 attempts");

  for (let i = 3; i >= 0; i--) {
    if (guess == num) {
      userPoints++;
      alert(`Congratulations, you have guessed my number, it was ${num}.`);
      alert(`You have ${userPoints} points.`);
      break;
    } else if (i === 0) {
      alert(`You're incorrect, the number was ${num}.`);
      break;
    } else if (guess > num) {
      alert(`To high, try again!`);
      guess = prompt(
        `Guess a Number between 1 and 10! You have ${i} attempts remaining`
      );
    } else if (guess < num) {
      alert(`To low, try again`);
      guess = prompt(
        `Guess a Number between 1 and 10! You have ${i} attempts remaining`
      );
    } else if (guess == num) {
      userPoints++;
      alert(
        `Congrats! You've guessed my number! You have ${userPoints} points`
      );
      break;
    }
  }
}

guessNum();

function lastQuestion() {
  let fiveAnswers = ["japan", "thailand", "south korea", "taiwan", "china"];

  let guess = prompt(
    "Name one of the Top Five places in my list of countries that I want to visit? You have 6 attempts."
  ).toLowerCase();

  for (let i = 6; i >= 0; i--) {
    if (i === 0) {
      alert(
        "You have no more attempts. The answers are Japan, Thailand, South Korea, Taiwan and China."
      );
      break;
    }
    if (guess === fiveAnswers[0]) {
      userPoints++;
      alert(
        "Correct, I almost went to Japan for uni but alas, it was lockdown times."
      );
      alert(`You have ${userPoints} points`);
      alert(
        "That's the end of the quiz! You got " +
          userPoints +
          " points. Thanks for playing, " +
          user +
          "!"
      );
      break;
    } else if (guess === fiveAnswers[1]) {
      userPoints++;
      alert(
        "Correct. I watch a lot of Thai dramas and it looks so nice there!"
      );
      alert(`You have ${userPoints} points.`);
      alert(
        "That's the end of the quiz! You got " +
          userPoints +
          " points. Thanks for playing, " +
          user +
          "!"
      );
      break;
    } else if (guess === fiveAnswers[2]) {
      userPoints++;
      alert("Correct. South-Korea. The land of K-pop and K-dramas.");
      alert(`You have ${userPoints} points.`);
      alert(
        "That's the end of the quiz! You got " +
          userPoints +
          " points. Thanks for playing, " +
          user +
          "!"
      );
      break;
    } else if (guess === fiveAnswers[3]) {
      userPoints++;
      alert(
        "Correct. I learnt a lot about the history of Taiwan in university and would love it go."
      );
      alert(`You have ${userPoints} points.`);
      alert(
        "That's the end of the quiz! You got " +
          userPoints +
          " points. Thanks for playing, " +
          user +
          "!"
      );
      break;
    } else if (guess === fiveAnswers[4]) {
      userPoints++;
      alert(
        "Correct. 20th Century China was my favourite thing to learn about in university and there are so many things to see!"
      );
      alert(
        "That's the end of the quiz! You got " +
          userPoints +
          " points. Thanks for playing, " +
          user +
          "!"
      );
      break;
    } else {
      console.log("lose");
      guess = prompt(
        "Incorrect! Try again to name somewhere in the Top Five of my Top Ten list of countries that I want to visit. You have " +
          (i - 1) +
          " attempts left."
      ).toLowerCase();
    }
  }
}
lastQuestion();
