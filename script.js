const els = document.querySelector("img");
const btnEl = document.querySelector("button");
console.log(els);

function getRandom6() {
  return Math.floor(Math.random() * 6) + 1;
}
function getRandomUrl() {
  const numWord = ["one", "two", "three", "four", "five", "six"];
  const rn = getRandom6() - 1;
  console.log(numWord[rn]);

  const url = `assest/image/dice-${numWord[rn]}.png`;
  return url;
}
// els.src = getRandomUrl();
btnEl.addEventListener("click", function () {
  els.src = getRandomUrl();
});
