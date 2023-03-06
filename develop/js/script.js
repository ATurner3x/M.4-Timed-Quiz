
//  Quiz Settings  //

let currentQuestionIndex;
let timeLeft;
let score;

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
var startButton = document.querySelector('#start-button')

startButton.addEventListener("click", startQuiz)




function startQuiz () {
    currentQuestionIndex = 0;
    timeLeft = quizSettings.duration;
    score = 0;
    var main = document.getElementById("main").style.visibility = "Visible"
    var titlePage = document.getElementById("quiz-intro").style.visibility = "hidden"
    var questionsScreen = document.getElementById("question-screen").style.visibility = "visible"
}
