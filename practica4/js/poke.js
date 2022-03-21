const fetchPokemon = () => {
  const pokename = document.getElementById("pokename");
  let pokeinput = pokename.value.toLowerCase();

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
  fetch(URL)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage("../img/notfound.jpg");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      let pokeImg = data.sprites.front_default;
      let name = data.forms[0].name;
      let peso = data.weight;
      let altura = data.height;
      let ability = data.abilities[0].ability.name;
      pokeImage(pokeImg);
      pokeData(name, altura, peso, ability);
      console.log(ability);
    });
};

// fetchPokemon();

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};

const pokeData = (name, height, weight, ability) => {
  const pokeNm = document.getElementById("nombre");
  const pokeHeight = document.getElementById("altura");
  const pokeWeight = document.getElementById("peso");
  const pokeAbility = document.getElementById("abilidad");
  pokeNm.textContent += name;
  pokeHeight.textContent += `${height}m`;
  pokeWeight.textContent += `${weight}kg`;
  pokeAbility.textContent += `${ability}`;
};

// const imprimir = () => {
//   const pokename = document.getElementById("pokename");
//   let pokeinput = pokename.value;
//   console.log("hello " + pokeinput);
// };
