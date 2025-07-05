openDB(() => {
  getEntrenadores(entrenadores => {
    const lista = document.getElementById('listaEntrenadores');
    lista.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'g-4'); // Responsive grid

    entrenadores.forEach(ent => {
      const col = document.createElement('div');
      col.classList.add('col');

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="d-flex justify-content-center mt-3">
            <img src="${ent.foto}" class="rounded" alt="${ent.nombre}" style="width: 120px; height: 120px; object-fit: cover;" />
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">${ent.nombre}</h5>
            <p class="card-text text-muted"><strong>ID:</strong> ${ent.id}</p>
            <p class="card-text"><strong>Sexo:</strong> ${ent.sexo}</p>
            <p class="card-text"><strong>Residencia:</strong> ${ent.residencia}</p>
          </div>
        </div>
      `;

      lista.appendChild(col);
    });
  });
});

