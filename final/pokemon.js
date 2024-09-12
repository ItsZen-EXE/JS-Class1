document.addEventListener('DOMContentLoaded', () => {
    const listElement = document.getElementById('pokemon-list');
    const detailsElement = document.getElementById('pokemon-details');

    // Fetch the list of Pokémon, limited to the first 151 pokemon for first gen
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            const pokemonList = data.results;

            // Display all of the pokemon names
            pokemonList.forEach(pokemon => {
                const item = document.createElement('div');
                item.className = 'pokemon-item'; // Add className for CSS formatting purposes
                item.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); // Make sure the name is capitalized!
                item.dataset.url = pokemon.url;
                // When clicked, display that pokemon's info
                item.addEventListener('click', () => {
                    fetchPokemonDetails(pokemon.url); // Call a function to fetchj and use the pokemon's specific URL
                    window.scrollTo({ top: 0 }); // Make the window scroll to the top during the click event so people can see the info
                });
                listElement.appendChild(item); // Append the current pokemon's list element to the full list
            });
        });

    // Fetch the pokemon's details
    function fetchPokemonDetails(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Declare a constant with the names, sprites, types, and pokemon ID since it wont change.
                const { name, sprites, types, id } = data;
                detailsElement.innerHTML = `
                    <!-- List the name again, but as a header for the info box -->
                    <h2>${name.charAt(0).toUpperCase() + name.slice(1)}</h2> 
                    
                    <!-- Display the sprite -->
                    <img src="${sprites.front_default}" alt="${name}">

                    <!-- Display the pokedex number -->
                    <p><strong>Pokédex Number:</strong> ${id}</p>

                    <!-- List and capitalize each type, and add a joining comma if there is more than one type! -->
                    <p><strong>Type(s):</strong> ${types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)).join(', ')}</p>
                `;
            });
    }
})