// main divs on html
var startPage = document.getElementById("start-page");
var quizEl = document.getElementById("quiz");

// start button
var startButton = document.getElementById("startButton");

// game time clock element
var gameTimeClock = document.getElementById("gameTimeClock");

// time element for interval countdown
var timeEl = document.querySelector(".time");

// game countdown clock
var gameTime = 61;

// inital score value
var score = 0;

// score throughout game element
var scoreTally = document.getElementById("scoreTally");

// questions
var questionEl = document.getElementById("question");

// answers
var answerEl = document.getElementById("answers");

// inital counter of questions position
var questionNumber = -1;

// final score display elements
var finalScore = document.getElementById("finalScore");

// submitting score elements
var submitBtn = document.querySelector("button.submitBtn")
var scoreForm = document.querySelector("#score-list");

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

// hiding bullet points on start page
answerEl.textContent = "";

// hide score submission box on start page 
document.getElementById("submit-score").style.display = "none";


// start button event listener to start quiz
startButton.addEventListener("click", function() {
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

// display questions, one at a time, with correlating answer choices
function displayQuestion() {
    // display user score 
    scoreTally.textContent = ("Score: " + score);
    // go to the first question
    questionNumber++;
    // if the question is less than the amount of questions, display question and choices
    if (questionNumber < questions.length){
        answer = questions[questionNumber].answer
        questionEl.textContent = questions[questionNumber].title;
        answerEl.innerHTML = "";
    
        var choices = questions[questionNumber].choices;
    
        for (var q = 0; q < choices.length; q++) {
            var nextChoice = document.createElement("button");
    
            nextChoice.textContent = choices[q]
            // 
            answerBtn = answerEl.appendChild(nextChoice);
                        // answerBtn = answerEl.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");

        }
    // if questions run out, initiate end of game
    } else {
        endGame()
    }
}


// button click response
answerEl.addEventListener("click", function (event) {
    var pEl= document.getElementsByClassName("feedback")[0]

    // evaluation of user's answer choices 
    // if correct, add to score, display positive feedback
    if (answer === event.target.textContent) {   
        score++;
        pEl.innerHTML = "Correct!";
        setTimeout(hideFeedback, 1500);
        showFeedback();   
    } else {
        //  if wrong, subtract from time, display negative feedback
        gameTime = gameTime - 10;
        pEl.innerHTML = "Sorry, that's incorrect.";
        setTimeout(hideFeedback, 1500);
        showFeedback();
    } 
    // run displayQuestion function   
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


// end game when timer or out of questions function
function endGame() {
    // hide all content
    gameTimeClock.textContent = " ";
    answerEl.textContent = " ";
    questionEl.textContent = " ";
    gameTime = -3;
    scoreTally.textContent = " ";
   
    // show score submission box
    document.getElementById("submit-score").style.display = "";
    finalScore.textContent = ("Your final score is: " + score + "!");

    // button changes screen and appends new score to list
    submitBtn.addEventListener("click", function (event) {
        appendScore();
        // relocate to top score page
        window.location.href = './topScores.html'
    });
}


// appending new scores function
function appendScore() {
    // user name input element
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


