function makebubble() {
  let bbl = "";
  for (var i = 1; i <= 190; i++) {
    var val = Math.floor(Math.random() * 10);
    bbl += `<div id="bubble">${val}</div>`;
  }
  document.querySelector("#bdy").innerHTML = bbl;
}
var counting = 60;
function timerinterval() {
  var storeval = setInterval(function () {
    if (counting > 0) {
      counting--;
      document.getElementById("timer").innerHTML = counting;
      // or --> document.querySelector("#timer").textContent=counting;
    } else {
      var audio = document.getElementById("gameOver");
      audio.play();
      clearInterval(storeval);
      document.getElementById("bdy").innerHTML = `
             <span style="color:rgb(199, 91, 122);  font-family: cursive; font-size:50px;margin-bottom:10px; font-weight: semi-bold;">OOPs!! Game Over ${"🙁"}</span>
             <span style="font-size:40px; font-family: cursive;">Max Score: ${localStorage.getItem(
               "maxscore",
               minval
             )} </span>
             <span style="color:Black;font-size:40px; font-family: cursive;">Your Score : ${scores} </span>
             <button id=btn onClick= "document.location.reload()">Play Again</button>`;
    }
  }, 1000);
}

var num = 0;
function randomHitvalue() {
  num = Math.floor(Math.random() * 10);
  document.getElementById("hitval").innerHTML = num;
}

var scores = 0;
function increasescore() {
  var audio = document.getElementById("scoreIncrease");
  audio.play();

  scores += 10;
  document.getElementById("sccr").innerHTML = scores;
}

var minval = -10;
function maxScore() {
  minval = Math.max(scores, minval);
  if (minval > localStorage.getItem("maxscore", minval)) {
    localStorage.setItem("maxscore", minval);
  }
}

document.getElementById("bdy").addEventListener("click", function (getnum) {
  var clickednum = Number(getnum.target.textContent);
  if (getnum.target.id === "bubble") {
    if (num === clickednum) {
      increasescore();
      randomHitvalue();
      makebubble();
    } else {
      var audio = document.getElementById("scoreDescrease");
      audio.play();
      scores -= 10;
      document.getElementById("sccr").innerHTML = scores;
    }
    maxScore();
  }
});

timerinterval();
randomHitvalue();
makebubble();
