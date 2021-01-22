/**
 * This is the main JavaScript entry for your application.
 */

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = (evt) => {
   if (xhr.readyState == 4) {
      const response = xhr.responseText;
      const data = JSON.parse(response)
      console.log(data.sprites.front_default);
      document.getElementById("pokemonImage").src = data.sprites.front_default
   }
   
};



document.getElementById("pokeButton").addEventListener("click", changeSprite);

function changeSprite() {
   xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + document.getElementById("pokemonInput").value);
   xhr.send();
}