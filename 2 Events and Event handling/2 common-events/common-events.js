// 1- input

let inp = document.querySelector("input")

// you can accept details in this function by passing var elem
inp.addEventListener("input", (elem)=> {
  console.log("typed");
  console.log(elem);
  // console.log(elem.data); 
  // if you give backspace then null will get printed in elem.data to avoid this you can use following code
  if(elem.data !== null) console.log(elem.data);
  
});




// 2- change
// tab chalta hai jb aapka koi input area or textarea mai change hojaaye

let sel = document.querySelector("select");
// here select mai jabhi change hoga tuhme elem milega usse tum jo chahe woh kr sakte ho
sel.addEventListener("change", (elem) => {
  console.log(elem);
  console.log(elem.target.value);
  document.querySelector("#device").innerText = `Device selected - ${elem.target.value}` // value should be present compulsory in html value attribute
});





// 3- keydown --> use in "1 key-tracker" present in dom-lab




// 4- submit --> use in "3 profile-card-generator" present in dom-lab




// 5- mouseenter, mouseleave --> use in "4 square-game" present in dom-lab


// 6- mousemove --> use in "5 mouse-tracker" present in dom-lab