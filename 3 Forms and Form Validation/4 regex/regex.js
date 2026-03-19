let _name = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", (e)=> {
  e.preventDefault();

  const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const ans1 = emailRegex.test("harsh@test.com");

  const ans2 = emailRegex.test("harsh@test.a");

  console.log(ans1);
  console.log(ans2);


  const usernameRegex = /^[a-zA-Z0-9_]{3,12}$/;

  const ans3 = usernameRegex.test("harsh@thakur");

  const ans4 = usernameRegex.test("harsh_thakur");

  console.log(ans3);
  console.log(ans4);
})