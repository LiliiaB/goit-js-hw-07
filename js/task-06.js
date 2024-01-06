function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const myDiv = document.querySelector("#boxes");

const myInput = document.querySelector("input");
let amount = "";

myInput.addEventListener("input", (event) => {
  if (event.target.value < 1 || event.target.value > 100) {
    alert("Your number has to be in the range between 1 and 100");
    event.target.value = "";
  } else {
    amount = event.target.value;
  }
});

createBtn.addEventListener("click", () => {
  createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const randomColor = getRandomHexColor();
  const result = [];
  for (let i = 0; i <= amount; i++) {
    const randomColor = getRandomHexColor();
    const str = `<div style ="background-color:${randomColor};width:${
      30 + i * 10
    }px;height:${30 + i * 10}px"></div>`;
    result.push(str);
  }
  myDiv.innerHTML = result.join("");
}

function destroyBoxes() {
  amount = 0;
  myDiv.innerHTML = "";
}
