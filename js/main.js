//MAIN
const playBtn = document.querySelector(".main__btnBox__playBtn");
const setBtn = document.querySelector(".main__btnBox__setBtn");

playBtn.addEventListener("click", () => {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#story").style.display = "flex";
});

setBtn.addEventListener("click", () => {
  document.querySelector("#settings").style.display = "flex";
});

//SETTINGS
document.querySelector(".settings__closeBtn").addEventListener("click", () => {
  document.querySelector("#settings").style.display = "none";
});

document.querySelector(".story__play").addEventListener("click", () => {
  document.querySelector("#story").style.display = "none";
  document.querySelector("#difficulty").style.display = "flex";
});

//STORY

document
  .querySelector(".difficulty__container__normal")
  .addEventListener("click", () => {
    document.querySelector("#difficulty").style.display = "none";
    document.querySelector("#normalGame").style.display = "flex";
  });
document
  .querySelector(".difficulty__container__hard")
  .addEventListener("click", () => {
    document.querySelector("#difficulty").style.display = "none";
    document.querySelector("#hardGame").style.display = "flex";
  });
//하다보니 함수만들어서 해도 좋을듯..

//EASY
//NORMAL
//HARD
//WIN
//LOSE
