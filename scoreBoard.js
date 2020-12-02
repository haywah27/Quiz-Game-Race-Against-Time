// querySelectors for buttons on scoreBoard page
var restartBtn = document.querySelector(".restartBtn");
var clearBtn = document.querySelector(".clearBtn");

// get the highScores list and turn it back into an object
var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

// querySelector for list on scoreBoard page
var scoreList = document.getElementById("score-list");


// sort scores from high to low
highScores.sort(function (a, b){
    return b.score - a.score
})

// display the scores by appending each new item
for (var i = 0; i < highScores.length; i += 2) {
    var newList = document.createElement("li")
    console.log(newList)
    newList.textContent = highScores[i].name + " - " + highScores[i].score
    scoreList.appendChild(newList)
}

// click handler for returning to start page
restartBtn.addEventListener("click", function () {
    window.location.href = './index.html'
});

// click handler for clearing scoreboard
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    scoreList.innerHTML = " ";
});


