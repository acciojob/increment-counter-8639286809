let count = 0;
let countEl = document.getElementById("count");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});


