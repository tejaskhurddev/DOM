// Kuch bhi hogaye screen pe woh ek event hai aur isko handle karne event handling kehate hai
// eg: mouse scrolling, left click, right click, double click

// Event listner ka matlab hai ki apne koi action ki aur uspe reaction aana
// Event listener wait karta hai ki user koi action kare, jaise hi action hota hai → function run ho jata hai.

// steps:-
// 1) Select the element first
// 2) Realize what action we wiil do 
// 3) Event listner add kar action aur function likho

let h1 = document.querySelector("h1")

h1.addEventListener("click", () => {
  h1.style.color = "red"
});


let dblclick = () => {
  h1.style.color = "green"
}

// for double click write dblclcik not doubleclcik its a rule of js
h1.addEventListener("dblclick", dblclick);

// To remove event listner function addEventListener mai direct nahi hona chahiye like eg: upar single click hai
// remove krne keliye funtion bahar hona chahiy e like eg: upar dblclick function hai
// remove krwane keliye removeEventListener ka use krne aur usme 2 value pass kare jo action remove krne hai aur uske related avaliable function
h1.removeEventListener("dblclick", dblclick);