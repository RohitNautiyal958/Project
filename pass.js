let h2 = document.querySelector("h2");
let range = document.querySelector("#rng");
let counter = document.querySelector("#len");
let gen = document.querySelector("#Gen");
let numb = document.querySelector("#num");
let char = document.querySelector("#char");
let img =document.querySelector("img")

img.addEventListener("click",()=>{
  
let text = h2
h2.select();
h2.setSelectionRange(0,99999)
navigator.clipboard.writeText(text.value)

})



range.addEventListener("input", () => {
  const value = range.value;

  counter.textContent = value;
  
});

let val;

gen.addEventListener("click", () => {
  const val1 = counter.textContent;
  val = Number(val1);
  const include = numb.checked;
  const notinclude = char.checked;

  // console.log(include)

  const pas = gennrate(val, include, notinclude);
  h2.textContent = pas;
});

function gennrate(val, inc, notinc) {
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0";
  let pas = str;
  let newpas = "";

  if (inc) {
    pas += "0123456789";
  }

  if (notinc) {
    pas += "!@#$%^&*()-_=+";
  }

  for (let i = 0; i < val; i++) {
    const randomIndex = Math.floor(Math.random() * pas.length);
    newpas += pas.charAt(randomIndex);
  }
  return newpas;
}
