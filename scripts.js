let user = prompt("Hi! I'm Rachael. What's your name?");
console.log("Hi " + user);
alert("Hi " + user + ", Let's answer some questions about me!");

let color = prompt("Is my favourite colour green? answer yes/no or y/n");
if (color.toLowerCase() === "yes" || color.toLowerCase() === "y") {
  alert("You're correct. Green is my favourite colour!");
} else {
  alert("Oops! You got it wrong.");
}

let siblings = prompt("Do I have sisters? answer yes/no or y/n");
if (siblings.toLowerCase() === "no" || siblings.toLowerCase() === "n") {
  alert("Correct! I have two brothers.");
} else {
  alert("Nope. I am sisterless.");
}

let uni = prompt("Did I learn a language in university? answer yes/no or y/n");
if (uni.toLowerCase() === "yes" || uni.toLowerCase() === "y") {
  alert("はい, I took Japanese classes for two years.");
} else {
  alert("Incorrect! I don't remember a lot but I did take classes.");
}

let work = prompt(
  "Have I worked in Tesco for only 2 years? answer yes/no or y/n"
);
if (work.toLowerCase() === "no" || work.toLowerCase() === "n") {
  alert("You're correct. It will be 4 years in April... unfortunately.");
} else {
  alert(
    "DOUBLE IT. You're sadly mistaken. I have worked there for 4 years not 2."
  );
}

let pets = prompt("Do I have any pets? answer yes/no or y/n");
if (pets.toLowerCase() === "no" || pets.toLowerCase() === "n") {
  alert(
    "You're correct. I have no pets so I have to visit friends with pets instead!"
  );
} else {
  alert("Nope. I am a human without animals!");
}

alert("That's the end of the quiz. Thanks for playing, " + user + "!");
