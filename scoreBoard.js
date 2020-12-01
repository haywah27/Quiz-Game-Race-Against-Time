var restartBtn = document.querySelector("button.restartBtn"),
    clearBtn = document.querySelector("button.clearBtn"),
    // get the highScores list and turn it back into an object
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreList = document.getElementById("score-list");

    // sort scores from high to low
    highScores.sort(function (a,b){
        return b.score - a.score
    })

    // display the scores
    for (var i = 0; i < highScores.length; i += 2) {
        var newLi = document.createElement("li")
        console.log(newLi)
        newLi.textContent = highScores[i].name + " - " + highScores[i].score
        scoreList.appendChild(newLi)
    }


// click handlers for restart and clearing scoreboard
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    scoreList.innerHTML = " ";
    // history.back()
});
restartBtn.addEventListener("click", function () {
    window.location.href = './index.html'
   
});

