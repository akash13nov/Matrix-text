const para = document.querySelector("p");
const charcters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

let iteration = 0;
function randomTxt() {
  const str = text
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return charcters.split("")[Math.floor(Math.random() * 53)];
    })
    .join("");
  para.innerText = str;
  iteration += 0.2;
}

setInterval(randomTxt, 30);
