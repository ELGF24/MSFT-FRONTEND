const fetchPokemon = () => {
  const pokename = document.getElementById("pokename");
  let pokeinput = pokename.value.toLowerCase();

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
  fetch(URL)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage(
          "https://www.google.com/search?q=fail+image&client=firefox-b-d&channel=trow5&sxsrf=APq-WBsLm6iihVUkuxFRdBFjLcKFHmUcZA:1647315640753&tbm=isch&source=iu&ictx=1&vet=1&fir=WQsVoa_T-NAaqM%252CeB7Ds3Co_9Y10M%252C_%253Bpk3EN-FjPoq8kM%252CeB7Ds3Co_9Y10M%252C_%253BCXCpfblvipeS9M%252Cg_2fLhQ_FAAd7M%252C_%253BfHhibdX9Jg7s5M%252CwwF-_tB3GqZ2LM%252C_%253Bcr8Xw8hT8SJdDM%252CgOyb6M37mR5O4M%252C_%253BXrCIZvuWTQthSM%252CILcGz935TMC2QM%252C_%253B2EVxwlH2PvfHhM%252C213pLYDVpTYWkM%252C_%253BeutxJUDNsVj7WM%252C63otenehcGXAxM%252C_%253BdrgYjopAS9auoM%252Ckc9LpxlF4cEj7M%252C_%253B_bnqu-bY2MkoEM%252CeB7Ds3Co_9Y10M%252C_%253BHmL-XZegFKFiPM%252CqAf0AyeZ_8WFWM%252C_%253Bm8safARluYU9VM%252Cg_2fLhQ_FAAd7M%252C_&usg=AI4_-kQKMm8t_Dor_manXNhWT8QW5SB3Eg&sa=X&ved=2ahUKEwjRi-b8mMf2AhXTVc0KHRQTDzwQ9QF6BAglEAE#imgrc=fHhibdX9Jg7s5M"
        );
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      let pokeImg = data.sprites.front_default;
      pokeImage(pokeImg);
      console.log(pokeImg);
    });
};

// fetchPokemon();

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};

// const imprimir = () => {
//   const pokename = document.getElementById("pokename");
//   let pokeinput = pokename.value;
//   console.log("hello " + pokeinput);
// };
