let a = document.querySelector("a");
console.dir(a);

// a.href = "https://github.com/tejaskhurdofficial" // --> not a good way
a.setAttribute("href", "https://github.com/tejaskhurdofficial");

let img =document.querySelector("img");
console.dir(img);
img.setAttribute("src", "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/010.png");
img.setAttribute("alt", "Caterpie Pokemon");

let google = document.querySelector(".a2");
console.log(google.getAttribute("href"));
console.dir(google.getAttribute("href"));

img.removeAttribute("alt");
console.log(img.getAttribute("alt")); // null show hoga