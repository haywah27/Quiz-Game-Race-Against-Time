// start button
var startButton = document.getElementById("startButton");

// game time clock element
var gameTimeClock = document.getElementById("gameTimeClock");

// score throughout game element
var scoreTally = document.getElementById("scoreTally");

// time element for interval countdown
var timeEl = document.querySelector(".time");

// 3 main divs on html
var startPage = document.getElementById("start-page");
var quizEl = document.getElementById("quiz");
var scoreForm = document.querySelector("#submit-score");

// game countdown clock
var gameTime = 61;

// inital score value
var score = 0;
// questions
var questionEl = document.getElementById("question");
// answers
var answerEl = document.getElementById("answers");

// inital counter of questions position
var questionNumber = -1;
var answer;

// final score display element
var finalScore = document.getElementById("finalScore");
var userScore = document.getElementById("user-score");

var highScores = [];

var scoreForm = document.querySelector("#submit-score");
var submitBtn = document.querySelector("button.submitBtn")

// list of questions in object
var questions = [
{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<script>", "<js>", "<scripting>"],
    answer: "<script>"
},
{
    title: "How to write an IF statement in JavaScript?",
    choices: ["if i = 5", "if i = 5 then", "if (i === 5)", "if i === 5 then"],
    answer: "if (i === 5)"
},
{
    title: "How does a FOR loop start?",
    choices: ["for (i = 0; i <= 5)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"],
    answer: "for (i = 0; i <= 5; i++)"
},
{
    title: "What is the correct way to write a JavaScript array?",
    choices: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'"],
    answer: "var colors = ['red', 'green', 'blue']"
},

{
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onclick", "onmouseclick", "onchange", "onmouseover"],
    answer: "onclick"
}
]

// page setup
answerEl.textContent = "";
// hide score submission box
document.getElementById("submit-score").style.display = "none";


// start button to start quiz
startButton.addEventListener("click", function() {
    // startPage.textContent = " ";
    
    document.getElementById("start-page").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');
    gameClock();
    displayQuestion();    
});



// game time countdown
function gameClock(){
    timeEl.textContent = " ";
    var timerInterval = setInterval(function() {
        gameTime--;
        gameTimeClock.textContent = "Time: " + gameTime;

        if (gameTime < 0){
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}



function displayQuestion() {
    
    scoreTally.textContent = ("Score: " + score);
    questionNumber++;
    if (questionNumber < questions.length){
        answer = questions[questionNumber].answer
        questionEl.textContent = questions[questionNumber].title;
        answerEl.innerHTML = "";
    
        var choices = questions[questionNumber].choices;
    
        for (var q = 0; q < choices.length; q++) {
            var nextChoice = document.createElement("button");
    
            nextChoice.textContent = choices[q]
            
            // answerBtn = answerEl.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
            answerBtn = answerEl.appendChild(nextChoice);
        }

    } else {
        endGame()
    }
}



answerEl.addEventListener("click", function (event) {
    var pEl= document.getElementsByClassName("feedback")[0]

    // evaluation of user's answer choices & feedback
    if (answer === event.target.textContent) {   
        score++;
        pEl.innerHTML = "Correct!";
        setTimeout(hideFeedback,1500);
        showFeedback();   
    } else {
        gameTime = gameTime - 10;
        pEl.innerHTML = "Sorry, that's incorrect.";
        setTimeout(hideFeedback,1500);
        showFeedback();
    }    
    displayQuestion();
});


// hide feedback message
function hideFeedback(){
    var pEl= document.getElementsByClassName("feedback")[0]
    pEl.style.display='none'
}

// show feedback message
function showFeedback(){
    var pEl= document.getElementsByClassName("feedback")[0]
    pEl.removeAttribute('style');
}



function endGame() {
    gameTimeClock.textContent = " ";
    answerEl.textContent = " ";
    questionEl.textContent = " ";
    gameTime = -3;
    scoreTally.textContent = " ";
   
    // show score submission box
    document.getElementById("submit-score").style.display = "";
    finalScore.textContent = ("Your final score is: " + score + "!");

    submitBtn.addEventListener("click", function (event) {
        // event.stopPropagation();
        addScore();
        
        window.location.href = './topScores.html'
    });

}

var scoreForm = document.querySelector("#score-list");

function addScore () {
    userNameInput = document.getElementById("userName").value
    
    // create a new object with name and score keys
    var newScore = {
            name: userNameInput,
            score: score
        };
        
        // check if there are scores in local storage first(get it)
            //if not, make a new/blank array
            var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
            // push object into score array
            highScores.push(newScore)
            // turn objects into an array of strings then put it into local storage
            localStorage.setItem("highScores", JSON.stringify(highScores));


}


