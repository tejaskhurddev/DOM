let chacha = document.createElement("h1");
let div = document.querySelector("div");

chacha.textContent = "mai bahar se aaya hu";
div.appendChild(chacha);
// div.append(chacha); --> new way below is example

let h1 = document.querySelector("h1");
// div.removeChild(h1); // --> Old way
h1.remove();

let sabu = document.createElement("h1");
let shubu = document.createElement("h1");

// new way prepend/append example
sabu.textContent = "mera naam sabu hai";
shubu.textContent = "mera naam shubu hai";
div.prepend(sabu,
  shubu,
  "Hi",
  document.createElement("br"),
  "calculation: 4+2 = "+(4+2));