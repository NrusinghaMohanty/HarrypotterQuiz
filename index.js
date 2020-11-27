var readlineSync = require("readline-sync")
const chalk = require('chalk');
var score = 0;
var username = readlineSync.question(chalk.italic.yellowBright("What is your name?\n\n"));

//introduction part
console.log(chalk.bold.underline.bgRedBright("\n\nWelcome to Harry Potter quiz " + username))
console.log(chalk.bold.magentaBright(`\nSo Before you begin, Here is the Rules 
1: There are 10 questions and each question gives you 1 point\n2: For the right answer you have to choose option in between a,b,c,d\n\nNow play the game and have some fun\n`));

//variable declar part//
var questions = [{
  question: `Q.1 Who is Harry's father ?
a:James Potter
b:Ariana Dumbledore
c:Sirius Black
d:Lord Voldemort 

Answer:`, answer: "a" || "james potter"
}, {
  question: `Q.2 Who is Harry's godfather ?
a:Albus Dumbledore
b:Lord Voldemort
c:Sirius Black
d:Severus Snape 

Answer:`, answer: "c"
},
{
  question: `Q.3 A Wizard who cannot do magic is known as a
a:Bleaker
b:Squib
c:Duddle
d:Wizont 

Answer:`, answer: "b"
},
{
  question: `Q.4 What's name of Flich's cat ?
a:Ser pounce
b:Mrs. norris
c:Buttercup
d:Jones 

Answer:`, answer: "b"
},
{
  question: `Q.5 Who has given Harry the invisibility cloak
a:Dumbledore
b:Professor Snape
c:Mad-eye moody
d:Dobby 

Answer:`, answer: "a"
},
{
  question: `Q.6 How many weasley sibling are there
a:5
b:7
c:10
d:3 

Answer:`, answer: "b"
},
{
  question: `Q.7 The actual name of Lord Voldemort
a:Tom marvolo riddle
b:Lavender Brown
c:Pansy Parkinson
d:Phineas Nigellus Black 

Answer:`, answer: "a"
}, {
  question: `Q.8 Ron had a phobia on which insect
a:Snake
b:Spider
c:Bat
d:Dragon 

Answer:`, answer: "b"
},{
  question: `Q.9 Who guards the entrance to the Gryffindor common room
a:The Grey lady
b:The Fat Frian
c:The Bloddy Baron
d:The fat lady
  
Answer:`, answer:"d"
},{
  question: `Q.10 Who kill Dumbledore
a:Lord Voldemort
b:Scorpius Malfoy
c:Severus Snape
d:Phineas Nigellus Black
  
Answer:`, answer:"c"
}]


var scoreboard = [{ name: "Babul", score: "10" }, { name: "Harry", score: "10" },{name:"Saroj",score:"8"}]


// function part

function play(q1, a1) {
  var useranswer = readlineSync.question(chalk.cyan(q1));
  if (useranswer.toUpperCase() == a1.toUpperCase()) {
    console.log(chalk.bold.green("yeahhh!!!you are right"))
    score = score + 1;
  } else {
    console.log(chalk.bold.red("oopsss !!!!you are wrong"))
    console.log(chalk.bold.green.inverse("The right answer is: " + a1))
  }
  {
    console.log(chalk.yellowBright("current score is " + score))
    console.log("\n**************************************")
  }
}


// main function part

function main() {
  var quit = readlineSync.question("If you want to exit the game press q, or any key to continue\n");
  console.log("----------------------------------------")
  if (quit.toLowerCase() == "q") {
    console.clear();
    console.log("you quit")
  } else {
    for (var i = 0; i < questions.length; i++) {
      var q2 = questions[i];
      play(q2.question, q2.answer);
    }

    console.log(chalk.italic.bgBlueBright("Here is your final score is " + score))

  if (score == 10) {
    scoreboard.push({ name: username, score: score });
    console.log("CONGRATS !!! YOU GOT A NEW HIGH SCORE\n")
  } else {
    console.log("SORRY !!! YOU CANNOT BEAT HIGHSCORE ")
    console.log("\nBETTER LUCK NEXT TIME")
  }
  console.log(chalk.bgMagentaBright("Name " + " Score"))
for (var i = 0; i < scoreboard.length; i++) {
  var currentscore = scoreboard[i];
  console.log(currentscore.name, "  ", currentscore.score)
}
}
}

main();


