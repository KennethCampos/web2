document.getElementById('formEquipo').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const nombre = form.nombre.value;
  const imagen = form.imagen.value;
  const entrenadorId = Number(form.entrenadorId.value);
  const pokemones = form.pokemones.value.split(',').map(id => id.trim());

  const equipo = { nombre, imagen, entrenadorId, pokemones };

  openDB(() => addEquipo(equipo));
  alert("Equipo guardado correctamente");
  form.reset();
});
