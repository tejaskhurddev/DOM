let li = document.querySelectorAll("li");

li.forEach((val) => {
  console.log(val.textContent);
})

// 2nd way

for(let i = 0; i <= li.length - 1; i++){
  console.log(li[i].textContent);
}