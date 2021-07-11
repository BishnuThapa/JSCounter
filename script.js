const counter = document.getElementById("counter");
const incr = document.querySelector(".incr");
const decr = document.querySelector(".decr");

let count = 0;
incr.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
});

decr.addEventListener("click", () => {
  count--;
  if (count <= 0) {
    counter.innerHTML = 0;
  } else {
    counter.innerHTML = count;
  }
});
