let _name = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", (e)=> {
  e.preventDefault(); // --> if you not apply this first your form will get submit then js code will get run

  if(_name.value.length <= 2) {
    document.querySelector(".small").style.display = "initial";
  } else {
    document.querySelector(".small").style.display = "none";
  }


})