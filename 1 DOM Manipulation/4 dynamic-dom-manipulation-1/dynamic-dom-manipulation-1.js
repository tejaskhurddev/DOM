// create element
// append/prepend karo element ko

let h1 = document.createElement("h1"); // Empty h1 create goke h1 mai store hoga
h1.textContent = "Mai js se aaya hu";

console.log(h1);
document.body.append(h1); // append matlab last mai lagega selected element ke andar
// document.body.prepend(h1); // prepend matlab pahile lagega selected element ke andar --> ek time pe ek created element ko ekbar hi append ya prepend kar sakte ho

let chacha = document.createElement("div"); 
chacha.textContent = "Mai div hu";
document.querySelector("body").prepend(chacha); // one more way to append or prepend --> div prepend hogaya


let divKeAndarEmptyDiv = document.createElement("div"); // Empty div create hoga
let divVariable = document.querySelector("div");
divVariable.append(divKeAndarEmptyDiv); // --> Chacha ke andar empty div append hoga --> aur ye chiz tum Direct bhi kr sakte ho ya variable mai save karke bhi kr sakte ho it's all about your logic 