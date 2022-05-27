const difficultyHouse1 = document.querySelector(
  ".difficulty__container__house1"
);
const difficultyHouse2 = document.querySelector(
  ".difficulty__container__house2"
);
const difficultyHouse3 = document.querySelector(
  ".difficulty__container__house3"
);
const difficultyWolf = document.querySelector(".difficulty__wolf");

difficultyHouse1.addEventListener("mouseover", () => {
  difficultyHouse1.style.width = "200px";
  difficultyHouse1.style.left = "30px";
  difficultyWolf.style.left = "-10px";
  difficultyWolf.style.bottom = "130px";
  difficultyWolf.style.width = "130px";
});
difficultyHouse1.addEventListener("mouseout", () => {
  difficultyHouse1.style.width = "140px";
  difficultyHouse1.style.left = "80px";
  difficultyWolf.style.left = "40px";
  difficultyWolf.style.width = "100px";
});

difficultyHouse2.addEventListener("mouseover", () => {
  difficultyHouse2.style.width = "200px";
  difficultyHouse2.style.left = "250px";
  difficultyWolf.style.left = "220px";
  difficultyWolf.style.bottom = "130px";
  difficultyWolf.style.width = "130px";
});
difficultyHouse2.addEventListener("mouseout", () => {
  difficultyHouse2.style.width = "140px";
  difficultyHouse2.style.left = "300px";
  difficultyWolf.style.width = "100px";
  difficultyWolf.style.left = "250px";
});

difficultyHouse3.addEventListener("mouseover", () => {
  difficultyHouse3.style.width = "200px";
  difficultyHouse3.style.left = "470px";
  difficultyWolf.style.left = "430px";
  difficultyWolf.style.bottom = "130px";
  difficultyWolf.style.width = "130px";
});
difficultyHouse3.addEventListener("mouseout", () => {
  difficultyHouse3.style.width = "140px";
  difficultyHouse3.style.left = "520px";
  difficultyWolf.style.width = "100px";
  difficultyWolf.style.left = "470px";
});
