async function fetchPokemonData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
  const data = await response.json();
  return data;
}

async function displayPokemonData() {
  const pokemonData = await fetchPokemonData();
  const name = pokemonData.name;
  const moves = pokemonData.moves.map((move) => move.move.name);
  const movesList = moves.map((move) => `<li>${move}</li>`).join('');
  const pokemonDataHtml = `
    <li><b>Name:</b> ${name}</li>
    <li><b>Moves:</b></li>
    <ul>${movesList}</ul>
  `;
  document.getElementById('pokemon-data').innerHTML = pokemonDataHtml;
}

displayPokemonData();