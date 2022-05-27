document.querySelector("#hardGame__muteBtn").addEventListener("click", () => {
  var muteSrc = document.querySelector("#hardGame__muteBtn").src.split("/");
  if (muteSrc[muteSrc.length - 1] == "mute.png") {
    myaudio.pause();
    document.querySelector("#hardGame__muteBtn").src = "./src/sound.png";
  } else {
    myaudio.play();
    document.querySelector("#hardGame__muteBtn").src = "./src/mute.png";
  }
});
var gamePause = false;
document // pause game..
  .querySelector("#hardGame__pauseBtn")
  .addEventListener("click", () => {
    if (gamePause) {
      gamePause = false;
      time = setInterval(hardLoop, 10);
    } else {
      gamePause = true;
      clearInterval(time);
    }
  });
function hardGameStart() {
  createBricks();
  createPig();
  time = setInterval(hardLoop, 10);
}
function initHardGame() {
  isPigHit = false;
  brick.row = 9;
  brick.column = 5;
  time = 0;
  leftArrow = false;
  rightArrow = false;
  paddle.x = cvs.width / 2 - PADDLE_WIDTH / 2;
  paddle.y = cvs.height - PADDLE_MARGIN_BOTTOM;
  title.innerText = "Hard Mode!";
  resetBall();
}
//게임 졌는지 확인하는 함수
function hardGameOver() {
  if (LIFE <= 0) {
    //졌다면
    clearInterval(time); //루프멈추고
    document.querySelector("#hardGame").style.display = "none";
    document.querySelector("#lose").append("score:" + SCORE);
    document.querySelector("#lose").style.display = "flex";
  }
}

//게임 이겼는지 확인하는 함수
function hardGameWin() {
  var isGameWin = true;
  if (!isPigHit) {
    for (var r = 0; r < brick.row; r++) {
      for (var c = 0; c < brick.column; c++) {
        isGameWin = isGameWin && !bricks[r][c].status; //하나라도 안깨진 brick 존재하면 isGameWin == false
      }
    }
  }
  if (isGameWin) {
    //이겼다면
    if (isPigHit) {
      // 돼지 찾아서 이긴거면
      bricksToScore(); // 남은 brick 점수추가
      SCORE += 100; //돼지 점수.
    }
    clearInterval(time); //루프멈추고
    title.innerText = "You Win!"; //게임 승리 출력
    setTimeout(() => {
      // 1초 후에 난이도 화면으로 넘어감.
      document.querySelector("#hardGame").style.display = "none";
      document.querySelector("#win").style.display = "flex";
      document.querySelector(".win__stats").innerHTML =
        "SCORE : " + SCORE + "<br/>" + "LIFE : " + LIFE;
    }, 1000);
  }
}
function hardLoop() {
  ctx.clearRect(0, 0, cvs.width, cvs.height); //캔버스 초기화
  update();
  draw();
  showGameStats();
  hardGameOver();
  hardGameWin();
}
