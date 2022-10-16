/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let score = [0, 0]; //for first player and secand playaer score
let roundScore = 0; //for sum res
let playerActive = 0; //first player started
let stopGame = true;
let looses;
let winValue = document.querySelector("#valueWin");
let imgDis1 = document.querySelector("#dice-1");
let imgDis2 = document.querySelector("#dice-2");
let hold = document.querySelector(".btn-hold");
let roll = document.querySelector(".btn-roll");
let newGame = document.querySelector(".btn-new");
init();
winValue.value = 10;
function init() {
  imgDis1.style.display = "none";
  imgDis2.style.display = "none";
  stopGame = true;
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector("#name-" + playerActive).style.boxShadow =
    "0px 0px 0px 0px transparent ";
}

function nextPalyer() {
  playerActive === 0 ? (playerActive = 1) : (playerActive = 0);
  roundScore = 0;
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  imgDis1.style.display = "none";
  imgDis2.style.display = "none";
}

newGame.addEventListener("click", init);

roll.addEventListener("click", function () {
  if (stopGame) {
    var dis1 = Math.floor(Math.random() * 6) + 1;
    var dis2 = Math.floor(Math.random() * 6) + 1;
    looses = dis1;
    imgDis1.style.display = "block";
    imgDis2.style.display = "block";
    imgDis1.src = "img/dice-" + dis1 + ".png";
    imgDis2.src = "img/dice-" + dis2 + ".png";

    if (looses === 6 && dis1 === 6) {
      score[playerActive] = 0;
      document.querySelector("#score-" + playerActive).textContent = "0";
      document.querySelector("#current-" + playerActive).textContent = "0";
      nextPalyer();
    } else if (dis1 !== 1 && dis2 !== 1) {
      roundScore += dis1 + dis2;
      document.querySelector("#current-" + playerActive).textContent =
        roundScore;
    } else {
      nextPalyer();
    }
  }
});

hold.addEventListener("click", function () {
  if (stopGame) {
    score[playerActive] += roundScore;
    document.querySelector("#score-" + playerActive).textContent =
      score[playerActive];
    roundScore = 0;
    if (score[playerActive] >= winValue.value) {
      document.querySelector("#name-" + playerActive).textContent = "Winner";
      document.querySelector("#name-" + playerActive).style.boxShadow =
        "0px 0px 15px 0px green ";
      stopGame = false;
      imgDis1.style.display = "none";
      imgDis2.style.display = "none";
    } else {
      nextPalyer();
    }
  }
});

////  TEST
// var m={c:'Car',n:'nn' }
// var f={c:'Crreet',n:'vvghjyht' }

// function b(name){
//   console.log(`belend   ${this.c}   tyhbdcd ${this.n} with ${name}`);
// }

// b.call(m,'maryam')
// console.log('call');
// b.call(f,'mam');
// console.log('call');
// b.apply(m,['mdrtuyg'])
// console.log('apply');
// b.apply(f,['muyg'])
// console.log('apply');
// var func=b.bind(m,'dferr');
// func();
// console.log('bind');
// var func2=b.bind(f,'rr');
// func2();
// console.log('bind');
