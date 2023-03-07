
//  Quiz Settings  //
const quizSettings = {
    duration: 75,
    penalty: 10,
    questions: [
        {
            text: "Commonly used data types do not include",
            choices: ["Strings", "Booleans", "Alerts", "Numbers"],
            answer:"Booleans"
        },   
        {
            text: "The condition is an if / then statement if enclosed with ______",
            choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
            answer:"Curly Brackets"
        } ,
        {
            text: "Arrays in JavaScript can be used to store _____",
            choices: ["Numbers and Strings", "other arrays", "Booleans", "All of the Above"],
            answer:"Booleans"
        } ,
        {
            text: "String values must be enclosed within ____ when being assigned to variables.",
            choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
            answer:"Quotes"
        } ,
        {
            text: "A very useful tool during devolpment and debugging for priniting content to the debugger is ____ ",
            choices: ["JavaScript", "terminal/bash", "For Loops", "Console.log"],
            answer:"Console.log"
        }
    ]
        };
let currentQuestionIndex;
let timeleft;
let score;

var startButton = document.querySelector('#start-button');
startButton.addEventListener("click", startQuiz);
const choicesContainer = document.getElementById("choices");
const questionText = document.getElementById("question-text");

// Start Quiz

function startQuiz () {
    var main = document.getElementById("main").style.visibility = "Visible";
    var titlePage = document.getElementById("quiz-intro").style.visibility = "hidden";
    var questionsScreen = document.getElementById("question-screen").style.visibility = "visible";
    currentQuestionIndex = 0;
    timeLeft = quizSettings.duration;
    score = 0;


// Start Timer
const timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      endQuiz();
      clearInterval(timerInterval);
    }
  }, 1000);
document.getElementById("timer").innerHTML = 'Time Left: ' + timerInterval + ' seconds '

  // Display the first question
  
  displayQuestion();
}
function displayQuestion() {
  
  const currentQuestion = quizSettings.questions[currentQuestionIndex];

  questionText.textContent = currentQuestion.text;
  choicesContainer.innerHTML = "";
  currentQuestion.choices.forEach(choice => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", () => {
      checkAnswer(choice, currentQuestion.answer);
    });
    choicesContainer.appendChild(choiceButton);
  });
}
// Display a question



// Check the Answer

function checkAnswer(answer) {
    if (answer === quizSettings.questions[currentQuestionIndex].answer) {
       // Answer is correct
    score += 1;
    
  } else {
        // Answer is incorrect
      timeLeft -= 10;
    }
  
    // Move on to the next question or end the quiz

    currentQuestionIndex++;
    if (currentQuestionIndex === quizSettings.questions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }


  // End the quiz

  function endQuiz() {
    // Stop the timer
    // clearInterval(timerInterval);
    // Show the final score and hide the quiz content
    var questionsScreen = document.getElementById("question-screen").style.visibility = "hidden";
    document.getElementById("score").innerHTML = 'Your Score: ' + score
    var finishScreen = document.getElementById("quiz-finish-screen").style.visibility = "visible"
  }

  // Submission
// Define event listener for when the user submits their score
submitBtn = document.getElementById("submit");
const initialsInput = document.getElementById("initials");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // Get the user's initials and score
  var initials = initialsInput.value.trim();
  if (initials !== "") {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({
      initials: initials,
      score: userScore,
    });
    localStorage.setItem("highScores", JSON.stringify(highScores));
    // Redirect to high scores page
    window.location.href = "highscores.html";
  }
});