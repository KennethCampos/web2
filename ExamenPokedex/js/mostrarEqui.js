openDB(() => {
  getEquipos(equipos => {
    const contenedor = document.getElementById('listaEquipos');
    contenedor.classList.add('container');

    equipos.forEach(eq => {
      getEntrenadorById(eq.entrenadorId, entrenador => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-4', 'shadow-sm');

        card.innerHTML = `
          <div class="row g-0">
            <div class="col-md-4 d-flex justify-content-center align-items-center p-2">
              <img src="${eq.imagen}" class="img-fluid rounded-start" alt="${eq.nombre}" style="width: 200px; height: 200px; object-fit: cover;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${eq.nombre}</h5>
                <p class="card-text">
                  <strong>Entrenador:</strong> ${entrenador.nombre}<br>
                  <strong>Sexo:</strong> ${entrenador.sexo}<br>
                  <strong>Residencia:</strong> ${entrenador.residencia}
                </p>
                <div class="d-flex flex-wrap gap-2">
                  ${eq.pokemones.map(id => `
                    <div class="text-center">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id.trim()}.png" alt="poke" width="60">
                      <div>#${id.trim()}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `;

        contenedor.appendChild(card);
      });
    });
  });
});

