//MAIN
const playBtn = document.querySelector(".main__btnBox__playBtn");
const storyBtn = document.querySelector(".main__btnBox__storyBtn");
const setBtn = document.querySelector(".main__btnBox__setBtn");

document.querySelector("body").style.color = "#28A847";
document.querySelector("body").style.fontFamily = "mapo";
//button click events
playBtn.addEventListener("click", () => {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#difficulty").style.display = "flex";
});

storyBtn.addEventListener("click", () => {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#story").style.display = "flex";
});

setBtn.addEventListener("click", () => {
  document.querySelector("#settings").style.display = "flex";
});
//button hover events
playBtn.addEventListener("mouseover", () => {
  playBtn.style.transform = "scale(1.2)";
  playBtn.style.zIndex = 1;
  playBtn.style.transition = "all 0.5s";
});
playBtn.addEventListener("mouseout", () => {
  playBtn.style.transform = "scale(1)";
  playBtn.style.zIndex = 1;
  playBtn.style.transition = "all 0.5s";
});
storyBtn.addEventListener("mouseover", () => {
  storyBtn.style.transform = "scale(1.2)";
  storyBtn.style.zIndex = 1;
  storyBtn.style.transition = "all 0.5s";
});
storyBtn.addEventListener("mouseout", () => {
  storyBtn.style.transform = "scale(1)";
  storyBtn.style.zIndex = 1;
  storyBtn.style.transition = "all 0.5s";
});
setBtn.addEventListener("mouseover", () => {
  setBtn.style.transform = "scale(1.2)";
  setBtn.style.zIndex = 1;
  setBtn.style.transition = "all 0.5s";
});
setBtn.addEventListener("mouseout", () => {
  setBtn.style.transform = "scale(1)";
  setBtn.style.zIndex = 1;
  setBtn.style.transition = "all 0.5s";
});

//SETTINGS
document.querySelector(".settings__closeBtn").addEventListener("click", () => {
  document.querySelector("#settings").style.display = "none";
});

//STORY
document.querySelector(".story__contents__p1").addEventListener("click", () => {
  document.querySelector(".story__contents__p1").style.display = "none";
  document.querySelector(".story__contents__p2").style.display = "block";
});
document.querySelector(".story__contents__p2").addEventListener("click", () => {
  document.querySelector(".story__contents__p2").style.display = "none";
  document.querySelector(".story__contents__p3").style.display = "block";
});
document.querySelector(".story__contents__p3").addEventListener("click", () => {
  document.querySelector(".story__contents__p3").style.display = "none";
  document.querySelector(".story__contents__p1").style.display = "block";
  document.querySelector("#main").style.display = "flex";
  document.querySelector("#story").style.display = "none";
});
document.querySelector(".story__main").addEventListener("click", () => {
  document.querySelector("#main").style.display = "flex";
  document.querySelector("#story").style.display = "none";
  document.querySelector(".story__contents__p1").style.display = "block";
  document.querySelector(".story__contents__p2").style.display = "none";
  document.querySelector(".story__contents__p3").style.display = "none";
});
// document.querySelector(".story__main").addEventListener("click", () => {
//   document.querySelector("#story").style.display = "none";
//   document.querySelector("#main").style.display = "flex";
// });
// document
//   .querySelector(".main__btnBox__storyBtn")
//   .addEventListener("click", () => {
//     document.querySelectorAll(".story__text").item(0).style.display = "block";
//     document.querySelectorAll(".story__text").item(1).style.display = "none";
//     document.querySelectorAll(".story__text").item(2).style.display = "none";
//   });
// document
//   .querySelectorAll(".story__text")
//   .item(0)
//   .addEventListener("click", () => {
//     document.querySelectorAll(".story__text").item(0).style.display = "none";
//     document.querySelectorAll(".story__text").item(1).style.display = "block";
//   });
// document
//   .querySelectorAll(".story__text")
//   .item(1)
//   .addEventListener("click", () => {
//     document.querySelectorAll(".story__text").item(1).style.display = "none";
//     document.querySelectorAll(".story__text").item(2).style.display = "block";
//   });
// document
//   .querySelectorAll(".story__text")
//   .item(2)
//   .addEventListener("click", () => {
//     document.querySelector("#story").style.display = "none";
//     document.querySelector("#main").style.display = "flex";
//   });

//하다보니 함수만들어서 해도 좋을듯..

//EASY
//NORMAL
//HARD
//WIN
//LOSE
