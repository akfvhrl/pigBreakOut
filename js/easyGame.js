//on_click event
document
  .querySelector(".difficulty__container__house1")
  .addEventListener("click", loadEasyGame);
function loadEasyGame() {
  document.querySelector("#difficulty").style.display = "none";
  document.querySelector("#easyGame").style.display = "flex";
  initEasyGame();
  easyGameStart();
}
function loadNormalGame() {
  document.querySelector("#difficulty").style.display = "none";
  document.querySelector("#normalGame").style.display = "flex";
  cvs = document.getElementById("normalCanvas");
  ctx = cvs.getContext("2d");

  lifeSpan = document.querySelector(".normalGame__stats__life");
  scoreSpan = document.querySelector(".normalGame__stats__score");
  brickImg.src = "src/brown_brick.png";
  title = document.querySelector(".normalGame__title");
  initNormalGame();
  normalGameStart();
}
//break.js
document.querySelector("#easyGame__muteBtn").addEventListener("click", () => {
  var muteSrc = document.querySelector("#easyGame__muteBtn").src.split("/");
  if (muteSrc[muteSrc.length - 1] == "mute.png") {
    myaudio.pause();
    document.querySelector("#easyGame__muteBtn").src = "./src/sound.png";
  } else {
    myaudio.play();
    document.querySelector("#easyGame__muteBtn").src = "./src/mute.png";
  }
});
var gamePause = false;
var time;
document // pause game..
  .querySelector("#easyGame__pauseBtn")
  .addEventListener("click", () => {
    if (gamePause) {
      gamePause = false;
      time = setInterval(easyLoop, 10);
    } else {
      gamePause = true;
      clearInterval(time);
    }
  });
//startGame
function easyGameStart() {
  createBricks();
  createPig();
  time = setInterval(easyLoop, 10);
}

//캔버스 변수선언
var cvs = document.getElementById("easyCanvas");
var ctx = cvs.getContext("2d");

var lifeSpan = document.querySelector(".easyGame__stats__life");
var scoreSpan = document.querySelector(".easyGame__stats__score");

var title = document.querySelector(".easyGame__title");

//상수
const PADDLE_WIDTH = 100; //paddle 넓이
const PADDLE_MARGIN_BOTTOM = 50; //paddle 높이
const PADDLE_HEIGHT = 20; //캔버스바닥에서 paddle까지 높이
const BALL_RADIUS = 8; //ball 반지름

//변수
var LIFE = 3; //user 목숨
var leftArrow = false; //방향키 감지
var rightArrow = false; //방향키 감지
var SCORE = 0; //user 점수

//캔버스 border
ctx.lineWidth = 3;

//#region paddle - paddle객체 및 관련함수
const paddle = {
  x: cvs.width / 2 - PADDLE_WIDTH / 2, //paddle x좌표 (초기 좌표는 캔버스 넓이의 1/2에서 paddle의 넓이 뺀 값)
  y: cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT, //paddle y좌표 (사각형의 x좌표와 y좌표는 왼쪽 상단 모서리의 좌표)
  width: PADDLE_WIDTH, //paddle 넓이
  height: PADDLE_HEIGHT, //paddle 높이
  dx: 5, //paddle x좌표 변화량 (paddle은 x좌표만 변화)
};

//paddle그리는 함수
function drawPaddle() {
  ctx.fillStyle = PADDLE_COLOR; //paddle배경색
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height); //paddle 배경 채우기

  ctx.strokeStyle = "LightPink"; //paddle 테두리색깔
  ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height); //paddle 테두리 그리기
}

//왼쪽or오른쪽 방향키 누르는 이벤트 감지
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 37) {
    //왼쪽 방향키 keycode : 37
    leftArrow = true;
  } else if (event.keyCode == 39) {
    //오른쪽 방향키 keycode : 39
    rightArrow = true;
  }
});

//왼쪽or오른쪽 방향키 떼는 이벤트 감지 (떼는 이벤트 감지안해주면 계속 눌린채로있음)
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 37) {
    leftArrow = false;
  } else if (event.keyCode == 39) {
    rightArrow = false;
  }
});

//paddle 옮기는 함수
function movePaddle() {
  if (rightArrow && paddle.x + paddle.width < cvs.width) {
    //캔버스 오른쪽 벗어나지않는동안
    paddle.x += paddle.dx;
  } else if (leftArrow && paddle.x > 0) {
    //캔버스 왼쪽 벗어나지않는동안
    paddle.x -= paddle.dx;
  }
}
//#endregion --paddle
//#region ball - ball 객체 및 관련함수
const ball = {
  x: cvs.width / 2, //ball x좌표 (초기 좌표는 캔버스넓이의 1/2)
  y: paddle.y - BALL_RADIUS, //ball의 y좌표 (원의 x좌표와 y좌표는 원의 중심)
  radius: BALL_RADIUS, //ball의 반지름
  speed: 4, //ball speed (속도조절은 setInterval에서 하자)
  dx: 3 * (Math.random() * 2 - 1), //ball의 x변화량 (초기 발사되는 방향 랜덤으로하기 위해 Math.radom 이용)
  dy: -3, //ball의 y변화량
};

//ball그리는 함수
function drawBall() {
  ctx.beginPath();

  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "DimGray";
  ctx.fill();

  ctx.strokeStyle = "Salmon";
  ctx.stroke();

  ctx.closePath();
}

//ball옮기는 함수
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
}

//ball과 벽 충돌 시 실행하는 함수
function ballWallCollision() {
  if (
    ball.x + ball.dx + ball.radius > cvs.width ||
    ball.x + ball.dx - ball.radius < 0
  ) {
    //오른쪽 벽에 부딪히거나 왼쪽벽에 부딪히면
    ball.dx = -ball.dx; //x변화량 반대로
  }
  if (ball.y + ball.dy - ball.radius < 0) {
    //위쪽벽에 부딪히면
    ball.dy = -ball.dy; //y변화량 반대로
  }
  if (ball.y + ball.dy - ball.radius > cvs.height) {
    //아래쪽 벽에 부딪히면
    LIFE--; //user 목숨 감소
    resetBall(); //ball 초기화
  }
}

//ball초기화 함수
function resetBall() {
  ball.x = cvs.width / 2;
  ball.y = paddle.y - BALL_RADIUS;
  ball.radius = BALL_RADIUS;
  ball.speed = 4;
  ball.dx = 3 * (Math.random() * 2 - 1);
  ball.dy = -3;
}

//ball과 paddle 충돌 시 실행하는 함수
function ballPaddleCollision() {
  if (
    //충돌조건
    ball.x < paddle.x + paddle.width && //ball의 x좌표가 paddle의 오른쪽 x좌표보다 작고
    ball.x > paddle.x && //ball의 x좌표가 paddle의 왼쪽 x좌표보다 크고
    ball.y < paddle.y + paddle.height && //ball의 y좌표가 paddle의 아래쪽 y좌표보다 작고
    ball.y > paddle.y //ball의 y좌표가 paddle의 위쪽 y좌표보다 크면
  ) {
    var collidePoint = ball.x - (paddle.x + paddle.width / 2); //충돌지점(ball의 x좌표와 paddle의 중앙의 x좌표와의 차이)
    collidePoint = collidePoint / (paddle.width / 2); //충돌지점의 범위가 (-paddle.width/2)에서 (paddle.width/2)이므로 이값으로 나눠주면 -1 에서 1의값을 가짐
    var angle = (collidePoint * Math.PI) / 3; //ball이 paddle과 충돌해서 발사되는 각도 (최대값 60으로 설정됨)

    ball.dx = ball.speed * Math.sin(angle); //sin(a) = ball.dx/ball.speed 에서 유도
    ball.dy = -ball.speed * Math.cos(angle); //cos(a) = ball.dy/ball.speed 에서 유도 (y는 뒤집어줘야하므로 - 붙혀줌)
  }
}
//#endregion - ball
//#region brick - brick 객체 및 관련함수
var brick = {
  row: 6, //행 개수
  column: 5, //열 개수
  width: 55, //brick 넓이
  height: 20, //brick 높이
  offSetLeft: 0, //brick 왼쪽 여백
  offSetTop: 0, //brick 위쪽 여백
  marginTop: 40, //맨위 brick과 캔버스사이 여백
  marginLeft: 65, //맨 왼쪽 brick과 캔버스사이 여백
};
var brickImg = new Image(brick.width, brick.height);
brickImg.src = "src/yellow_brick.png";
var bricks = []; //brick담을 2차원배열

//brick 처음 생성하는 함수
function createBricks() {
  for (var r = 0; r < brick.row; r++) {
    bricks[r] = []; //2차원배열생성
    for (var c = 0; c < brick.column; c++) {
      bricks[r][c] = {
        x:
          c * (brick.offSetLeft + brick.width) +
          brick.offSetLeft +
          brick.marginLeft, //각 brick 마다의 x좌표 계산
        y:
          r * (brick.offSetTop + brick.height) +
          brick.offSetTop +
          brick.marginTop, //각 brick 마다의 y좌표 계산
        status: true, //각 brick이 깨졌는지
      };
    }
  }
}

//brick그리는 함수
function drawBricks() {
  for (var r = 0; r < brick.row; r++) {
    for (var c = 0; c < brick.column; c++) {
      var b = bricks[r][c];
      if (b.status) {
        ctx.drawImage(brickImg, b.x, b.y, brick.width, brick.height);
      }
    }
  }
}

function ballBrickCollision() {
  for (var r = 0; r < brick.row; r++) {
    for (var c = 0; c < brick.column; c++) {
      var b = bricks[r][c];
      if (b.status) {
        //만약 brick이 깨지지 않았다면
        if (
          ball.x + ball.radius > b.x + 3 && //ball의 오른쪽이 brick의 왼쪽에 맞으면
          ball.x - ball.radius < b.x + brick.width - 3 && //ball의 왼쪽이 brick의 오른쪽에 맞으면
          ball.y + ball.radius > b.y + 3 && //ball의 아래쪽이 brick의 위쪽에 맞으면
          ball.y - ball.radius < b.y + brick.height - 3 //ball의 위쪽이 brick의 아래쪽에 맞으면
        ) {
          if (ball.x < b.x || b.x + brick.width < ball.x) {
            //왼/오른쪽 맞으면
            ball.dx *= -1;
            b.status = false;
            SCORE += 1;
          } else {
            //위아래 맞으면
            ball.dy *= -1;
            b.status = false; // brick 깨짐
            SCORE += 1; //1점올리기
          }
        }
      }
    }
  }
}
//#endregion - brick
//#region pig - pig 객체 및 관련함수
var isPigHit = false;
var pig = {
  // x,y좌표는 벽돌 내부 꼭짓점중 하나(반드시 4개의 블럭으로 둘러쌓여있음)
  xindex: 1,
  yindex: 1,
  x: 1,
  y: 1,
  width: 30,
  height: 30,
};

function createPig() {
  //pig 생성자
  var xindex = Math.floor(Math.random() * (brick.row - 1)) + 1; //xindex
  var yindex = Math.floor(Math.random() * (brick.column - 1)) + 1; //yindex
  pig.xindex = xindex;
  pig.yindex = yindex;
  pig.x = bricks[xindex][yindex].x - pig.width / 2; //돼지 몸통이 중심에 오도록..
  pig.y = bricks[xindex][yindex].y - pig.height / 2;
}
var pigImg = new Image(pig.width, pig.height);
pigImg.src = "src/pigs_1.png";
function drawPig() {
  ctx.drawImage(pigImg, pig.x, pig.y, pig.width, pig.height);
}
function isPigShown() {
  if (
    //자기를 둘러싸고 있는 벽돌이 다 깨지면
    !bricks[pig.xindex - 1][pig.yindex].status &&
    !bricks[pig.xindex - 1][pig.yindex - 1].status &&
    !bricks[pig.xindex][pig.yindex].status &&
    !bricks[pig.xindex][pig.yindex - 1].status
  ) {
    isPigHit = true; //게임끝!
  }
}
//#endregion - pig
function bricksToScore() {
  // 남은 벽돌 추가점수 부여 함수.
  var bonusScore = 0;
  for (var r = 0; r < brick.row; r++) {
    for (var c = 0; c < brick.column; c++) {
      var b = bricks[r][c];
      if (b.status) bonusScore += 2;
    }
  }
  SCORE += bonusScore;
}
//user 목숨과 점수 업데이트
function showGameStats() {
  lifeSpan.innerText = `Life : ${LIFE}`;

  scoreSpan.innerText = `Score : ${SCORE}`;
}

//기본 그리기 함수
function draw() {
  drawPaddle();
  drawBall();
  drawPig();
  drawBricks();
}

//캔버스 업데이트 함수
function update() {
  movePaddle();
  moveBall();
  isPigShown();
  ballWallCollision();
  ballPaddleCollision();
  ballBrickCollision();
}

//게임 졌는지 확인하는 함수
function easyGameOver() {
  if (LIFE <= 0) {
    //졌다면
    clearInterval(time); //루프멈추고
    document.querySelector("#easyGame").style.display = "none";
    document.querySelector("#lose").append("SCORE:" + SCORE);
    document.querySelector("#lose").style.display = "flex";
  }
}

//게임 이겼는지 확인하는 함수
function easyGameWin() {
  var isGameWin = true;
  if (!isPigHit) {
    // pig가 맞지 않았다면..
    for (var r = 0; r < brick.row; r++) {
      for (var c = 0; c < brick.column; c++) {
        isGameWin = isGameWin && !bricks[r][c].status; //하나라도 안깨진 brick 존재하면 isGameWin == false, 돼지 찾으면 끝.
      }
    }
  } //맞으면 그냥 바로 넘어감.
  if (isGameWin) {
    //이겼다면
    if (isPigHit) {
      // 돼지 찾아서 이긴거면
      bricksToScore(); // 남은 brick 점수추가
      SCORE += 50; //돼지 점수.
    }
    clearInterval(time); //루프멈추고
    title.innerText = "You Win!"; //게임 승리 출력
    title.classList.add("text-rainbow");
    setTimeout(() => {
      // 1초 후에 난이도 화면으로 넘어감.
      document.querySelector("#easyGame").style.display = "none";
      document.querySelector("#difficulty").style.display = "flex";
      var easymode = document.querySelector(".difficulty__container__house1");
      easymode.setAttribute("src", "./src/house1Clear.png");
      easymode.style.opacity = 0.5;
      easymode.removeEventListener("click", loadEasyGame);
      document.querySelector(
        ".difficulty__container__house2"
      ).style.opacity = 1;
      document.querySelector(
        ".difficulty__container__house3"
      ).style.opacity = 0.5;
      document // add click event to next level
        .querySelector(".difficulty__container__house2")
        .addEventListener("click", loadNormalGame);
    }, 1000);
  }
}

function initEasyGame() {
  time = 0;
  LIFE = 3;
  score = 0;
  leftArrow = false;
  rightArrow = false;
  paddle.x = cvs.width / 2 - PADDLE_WIDTH / 2;
  paddle.y = cvs.height - PADDLE_MARGIN_BOTTOM;
  title.innerText = "Easy Mode!";

  resetBall();
}
//메인루프
function easyLoop() {
  ctx.clearRect(0, 0, cvs.width, cvs.height); //캔버스 초기화
  update();
  draw();
  showGameStats();
  easyGameOver();
  easyGameWin();
}
