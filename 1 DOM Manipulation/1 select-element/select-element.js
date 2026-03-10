let abcd = document.getElementById("abcd");
console.log(abcd);
console.dir(abcd); // give key value pair of obj 

let chacha = document.getElementsByClassName("xyz")
console.log(chacha); // This will give you array like structure not array
console.dir(chacha); 

let chaudhary = document.querySelector("h1"); // This will always select first query
console.dir(chaudhary);

let sabu = document.querySelectorAll("h1");
console.log(sabu); // This will give you array like structure not array
console.log(sabu);

let lassai = document.querySelector("#abcd");
console.log(lassai);
console.dir(lassai);


let samosa = document.querySelector(".xyz");
console.log(samosa);
console.dir(samosa);

let fafda = document.querySelectorAll(".xyz");
console.log(fafda);
console.dir(fafda);