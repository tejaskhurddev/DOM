let li = document.querySelectorAll("li");

// for(let i = 0; i<li.length; i++){
//   if(i%2 === 0) li[i].classList.add("highlight");
// }

// 2nd way

let i = 1;
li.forEach((val) => {
  if(i%2 !== 0) val.classList.add("highlight");
  i++;
});