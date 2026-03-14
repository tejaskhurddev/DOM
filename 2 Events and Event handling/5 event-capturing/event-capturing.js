const btn = document.querySelector(".btn");
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => console.log("Button clicked!"));
});




const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");

a.addEventListener("click", () => console.log("Div A clicked!"), true);
b.addEventListener("click", () => console.log("Div B clicked!"));
c.addEventListener("click", () => console.log("Div C clicked!"));





const d = document.querySelector(".d");
const e = document.querySelector(".e");
const f = document.querySelector(".f");

d.addEventListener("click", () => console.log("Div A clicked!"), true);
e.addEventListener("click", () => console.log("Div B clicked!"));
f.addEventListener("click", () => console.log("Div C clicked!"), true);


const g = document.querySelector(".g");
const h = document.querySelector(".h");
const i = document.querySelector(".i");

g.addEventListener("click", () => console.log("Div A clicked!"), true);
g.addEventListener("click", () => console.log("Div A clicked!"), false);
h.addEventListener("click", () => console.log("Div B clicked!"));
i.addEventListener("click", () => console.log("Div C clicked!"), true);
