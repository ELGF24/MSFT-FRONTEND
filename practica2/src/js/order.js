let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
console.log(name);
console.log(email);
console.log(phone);

let cakes = [];
let adornos = [];

let checked = document.getElementsByName("cakes[]");
let checked2 = document.getElementsByName("adornos[]");

for (let i = 0; i < checked.length; i++) {
  if (checked[i].checked) {
    cakes.push(checked[i].value);
  }
}

for (let j = 0; j < checked2.length; j++) {
  if (checked2[j].checked) {
    adornos.push(checked2[j].value);
  }
}

let data = {
    "name":name,
    "email":email,
    "phone":phone,
}
console.log(cakes);
console.log(adornos);

let cake = [];
const addCake = (ev) => {
  ev.preventDefault();
  let c = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    description: document.getElementById("description").value,
    cakes: cakes,
    adornos: adornos
  }
  cake.push(c);
  document.forms[0].reset();

  console.warn("added", {cake});
  let pre = document.querySelector("#msg pre");
  pre.textContent = "\n" + JSON.stringify(cake, '\t', 2);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('btn').addEventListener('click', addCake)
})

// export { name, email, phone, cakes, adornos };

