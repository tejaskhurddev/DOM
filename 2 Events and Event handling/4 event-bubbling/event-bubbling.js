let nav = document.querySelector("nav");

nav.addEventListener("click", ()=>{
  alert("clciked")
})


// when i will clcik list ul event listner be get trigger
let ul = document.querySelector("ul");
ul.addEventListener("click", (e)=>{
  // if (e.target.style.textDecoration === "line-through") {
  //     e.target.style.textDecoration = "none";
  //   } 
  // else {
  //     e.target.style.textDecoration = "line-through";
  //   }

  // OR

  e.target.classList.toggle("line-through");
  
})


const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const btn = document.querySelector(".btn");

a.addEventListener("click", () => console.log("Div A clicked!"));
b.addEventListener("click", () => console.log("Div B clicked!"));
c.addEventListener("click", () => console.log("Div C clicked!"));
btn.addEventListener("click", (e) => {
  console.log("Button clicked!");
  // e.stopPropagation(); // prevent parent divs from also triggering

  // "e.stopPropagation()" stops the event from bubbling up the DOM basically it bubbles upto html tag so that will get prevent
  
});
