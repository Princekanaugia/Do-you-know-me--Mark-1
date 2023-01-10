var readlineSync = require("readline-sync");
var score = 0;
var userName = ".";
//data of highscore
var highScores = [
  {
    name: "Prince",
    score: "6",
  },
  {
    name: "Raj",
    score: "5",
  },
]
// array of object which content questions and answers
var questions = [
  {
    question: "01. Which city Prince live in?\n",
    answer: "Raipur",
  },
  {
    question: "02. In which month Prince Kanaugia birthday comes?\n",
    answer: "July",
  },
  {
    question: "03. Which movie is my favorite movie?\n",
    answer: "Intersteller",
  },
  {
    question: "04. Which is it, Mountain or Beach?\n",
    answer: "Mountain",
  },
  {
    question: "05. What i like it more, Tea or Coffee?\n",
    answer: "Tea",
  },
  {
    question: "06. Which is my Dream Bike-Trip?\n",
    answer: "Ladakh",
  },
]

function welcome() {
  userName = readlineSync.question("What's your name? \nName :  ");
  console.log("\nWelcome "+ userName + " to Do you known me? quizz. :) \nThis 6 question quiz\nRewards +1 Point for Correct answer \nDeducts 0 Point for Wrong answer\n\nBest of Luck \n");
}

function play (question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
    
  }
  else {
    console.log("Wrong!");
  }
  console.log("\nCurrent score: ", score);
  console.log("\n----------------------------------\n")
}

function gameplay() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! Your Final SCORE is : ", score);
  console.log("Check out the High Scores, your score will added to the table soon\n");
  highScores.push({name: userName, score: score});
  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
gameplay();
showScores();