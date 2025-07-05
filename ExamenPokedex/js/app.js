const container = document.getElementById('pokemonList');
const select = document.getElementById('generationSelect');

const modal = document.getElementById('pokemonModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

select.addEventListener('change', () => {
  container.innerHTML = 'Cargando generación...';

  const generationNumber = select.value;
  const apiUrl = `https://pokeapi.co/api/v2/generation/${generationNumber}/`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      container.innerHTML = '';
      const pokemons = data.pokemon_species;

      // Extraer ID de cada pokemon
      const pokemonsConId = pokemons.map(pokemon => {
        const urlParts = pokemon.url.split('/').filter(Boolean);
        const id = parseInt(urlParts[urlParts.length - 1]);
        return { ...pokemon, id };
      });

      pokemonsConId.sort((a, b) => a.id - b.id);

      pokemonsConId.forEach(pokemon => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
          .then(res => res.json())
          .then(details => {
            const div = document.createElement('div');
            div.className = 'col-6 col-sm-4 col-md-3 col-lg-2 text-center';

            div.innerHTML = `
            <div class="pokemon card p-2 h-90">
              <h5 class="card-title">${capitalize(details.name)}</h5>
              <img src="${details.sprites.front_default}" alt="${details.name}" class="card-img-top mx-auto" style="width:96px; height:96px;" />
              <p class="card-text">ID: ${details.id}</p>
            </div>
      `;

            // Agregar evento click para mostrar modal con detalles
            div.addEventListener('click', () => {
              showPokemonDetails(details);
            });

            container.appendChild(div);
          });
      });
    })
    .catch(error => {
      container.innerHTML = 'Error al cargar Pokémon';
      console.error(error);
    });
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Mostrar modal con detalles
function showPokemonDetails(details) {
  modalBody.innerHTML = `
    <h2>${capitalize(details.name)} (#${details.id})</h2>
    <img src="${details.sprites.front_default}" alt="${details.name}" style="width:150px; height:150px;" />
    <p><strong>Altura:</strong> ${details.height / 10} m</p>
    <p><strong>Peso:</strong> ${details.weight / 10} kg</p>
    <p><strong>Habilidades:</strong> ${details.abilities.map(a => capitalize(a.ability.name)).join(', ')}</p>
    <p><strong>Tipos:</strong> ${details.types.map(t => capitalize(t.type.name)).join(', ')}</p>
    <p><strong>Movimientos:</strong> ${details.moves.slice(0, 10).map(m => capitalize(m.move.name)).join(', ')}${details.moves.length > 10 ? ', ...' : ''}</p>
  `;

  modal.style.display = 'flex';
}

// Cerrar modal al click en la X
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// También cerrar modal al click fuera del contenido
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Cargar primera generación al inicio
window.onload = () => {
  select.dispatchEvent(new Event('change'));
};