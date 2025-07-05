openDB(() => {
  const form = document.getElementById('formEntrenador');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);

    const entrenador = {
      nombre: data.get('nombre'),
      sexo: data.get('sexo'),
      residencia: data.get('residencia'),
      foto: data.get('foto')
    };

    addEntrenador(entrenador);
    alert('Entrenador guardado');
    form.reset();
  });
});
