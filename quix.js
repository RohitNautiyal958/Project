// Define your quiz questions and choices
const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris", "Madrid"],
    correct: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Giraffe", "Elephant", "Blue Whale", "Hippopotamus"],
    correct: "Blue Whale",
  },
];

const questionText = document.getElementById("question-text");
const choices = document.querySelectorAll(".choice");
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function loadQues() {
  questionText.style.fontWeight = "600";
  const currquesData = quizData[currentQuestion];
  questionText.textContent = currquesData.question;

  for (let i = 0; i < choices.length; i++) {
    choices[i].textContent = currquesData.choices[i];
    choices[i].addEventListener("click", checkAsn);
  }
}
function checkAsn(e) {
  const userChoice = e.target.textContent;
  const currquesData = quizData[currentQuestion];

  if (userChoice === currquesData.correct) {
    score++;
    scoreElement.textContent = `${score}`;
  }
//   else{
//     score--;
//     scoreElement.textContent = `${score}`;
//   }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQues();
  } else {
    endquiz();
  }
}

function endquiz() {
  questionText.textContent = `Quiz Finished!`;
  for (let i = 0; i < choices.length; i++) {
    choices[i].style.display = "none";
  }

  let p = document.createElement("p");
  p.style.fontWeight = "600";

  if (score < 2) {
    p.style.color = "red";
    p.style.fontSize="large"
    p.appendChild(document.createTextNode(`Fail!`));
  } else {
    p.style.color = "green";
    p.style.fontSize="large"
    p.appendChild(document.createTextNode(`Pass!`));
  }
  document.querySelector(".choices-container").appendChild(p);

  scoreElement.textContent = `${score}/${quizData.length}`;
}

loadQues();
