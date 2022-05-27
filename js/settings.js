//bgm

//paddle
var PADDLE_COLOR = "";
document
  .querySelector(".settings__label__paddle__paddle1")
  .addEventListener("click", () => {
    document.querySelector(".settings__label__paddle__paddle1").style.border =
      "3px solid black";
    document.querySelector(".settings__label__paddle__paddle2").style.border =
      "none";
    PADDLE_COLOR = "wheat";
  });
document
  .querySelector(".settings__label__paddle__paddle2")
  .addEventListener("click", () => {
    document.querySelector(".settings__label__paddle__paddle2").style.border =
      "3px solid black";
    document.querySelector(".settings__label__paddle__paddle1").style.border =
      "none";
    PADDLE_COLOR = "blue";
  });

//bckImg
document
  .querySelector(".settings__label__bckImg__day")
  .addEventListener("click", () => {
    document.querySelector("#pageWrapper").style.backgroundImage =
      'url("src/background_day.png")';
    document.querySelector(
      ".settings__label__bckImg__night"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bckImg__day"
    ).style.backgroundColor = "aquamarine";
    document.querySelector(".difficulty__title").style.color = "rgb(0, 3, 190)";
  });

document
  .querySelector(".settings__label__bckImg__night")
  .addEventListener("click", () => {
    document.querySelector("#pageWrapper").style.backgroundImage =
      'url("src/background_night.png")';
    document.querySelector(".difficulty__title").style.color = "#FA64AF";
    document.querySelector(
      ".settings__label__bckImg__day"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bckImg__night"
    ).style.backgroundColor = "aquamarine";
  });

var myaudio = new Audio();
myaudio.src = "./src/audio/bgm1.mp3";
myaudio.loop = true;
document
  .querySelector(".settings__label__bgm__bgm1")
  .addEventListener("click", () => {
    myaudio.src = "./src/audio/bgm1.mp3";
    myaudio.play();
    document.querySelector(
      ".settings__label__bgm__bgm2"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__bgm3"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__mute"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__bgm1"
    ).style.backgroundColor = "aquamarine";
  });
document
  .querySelector(".settings__label__bgm__bgm2")
  .addEventListener("click", () => {
    myaudio.src = "./src/audio/bgm2.mp3";
    myaudio.play();
    document.querySelector(
      ".settings__label__bgm__bgm1"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__bgm3"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__mute"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__bgm2"
    ).style.backgroundColor = "aquamarine";
  });

document
  .querySelector(".settings__label__bgm__bgm3")
  .addEventListener("click", () => {
    myaudio.src = "./src/audio/bgm3.mp3";
    myaudio.play();
    document.querySelector(
      ".settings__label__bgm__bgm1"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__bgm2"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__mute"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__bgm3"
    ).style.backgroundColor = "aquamarine";
  });
document
  .querySelector(".settings__label__bgm__mute")
  .addEventListener("click", () => {
    myaudio.pause();
    document.querySelector(
      ".settings__label__bgm__bgm2"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__bgm3"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__bgm1"
    ).style.backgroundColor = "beige";
    document.querySelector(
      ".settings__label__bgm__mute"
    ).style.backgroundColor = "aquamarine";
  });
