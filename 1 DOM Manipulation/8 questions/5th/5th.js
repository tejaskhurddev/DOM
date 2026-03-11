let div = document.createElement("div");
document.body.prepend(div);

let img = document.createElement("img");
img.setAttribute("src", "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png");
img.setAttribute("alt", "gengar image");

let selectDiv = document.querySelector("div");
selectDiv.append(img);

let p1 = document.createElement("p");
p1.textContent = "Gengar";

let p2 = document.createElement("p");
p2.innerHTML = "Type: <span>Ghost</span>";

selectDiv.append(p1,p2);

p1.classList.add("para", "p1");
p2.classList.add("para", "p2");

let style = document.createElement("style");
style.textContent = `
  body {
    background: black;
  }

  div {
    width: 15rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid violet;
    border-radius: 10px;
  }

  .para {
    text-align: center;
  }

  span {
    color: violet;
  }

  img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }

  .para {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .p1 {
    background-color: violet;
  }

  .p2 {
    background-color: white;
  }
`;
document.head.append(style);


