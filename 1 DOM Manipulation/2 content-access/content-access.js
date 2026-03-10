let fhd = document.querySelector("h1");
console.dir(fhd);
fhd.innerHTML = "<i>Mera nam rohan hai</i>"; // Change HTML for eg i have added italic tag in h1
// fhd.innerText = "Mera nam anarkali hai"; // change text
// fhd.textContent = "Mera nam birbal hai"; // same as innerText


let abcd = document.querySelectorAll("div");
console.log(abcd);
abcd[0].innerText = "Hello Tejas kaise ho";
abcd[1].innerHTML = "Hello pagali kaisi ho";

let hp = document.querySelector("p");
console.log(hp);
hp.hidden = false;