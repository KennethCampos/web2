//base da datos para Entrenadores y Equipos
const DB_NAME = 'PokeDB';
const DB_VERSION = 1;

let db;

function openDB(callback) {
  const request = indexedDB.open(DB_NAME, DB_VERSION);

  request.onupgradeneeded = function (e) {
    db = e.target.result;

    if (!db.objectStoreNames.contains('entrenadores')) {
      db.createObjectStore('entrenadores', { keyPath: 'id', autoIncrement: true });
    }

    if (!db.objectStoreNames.contains('equipos')) {
      db.createObjectStore('equipos', { keyPath: 'id', autoIncrement: true });
    }
  };

  request.onsuccess = function (e) {
    db = e.target.result;
    if (callback) callback();
  };

  request.onerror = function (e) {
    console.error('Error al abrir la base de datos', e);
  };
}

function addEntrenador(entrenador) {
  const tx = db.transaction('entrenadores', 'readwrite');
  const store = tx.objectStore('entrenadores');
  store.add(entrenador);
}

function getEntrenadores(callback) {
  const tx = db.transaction('entrenadores', 'readonly');
  const store = tx.objectStore('entrenadores');
  const request = store.getAll();

  request.onsuccess = () => callback(request.result);
}

function addEquipo(equipo) {
  const tx = db.transaction('equipos', 'readwrite');
  const store = tx.objectStore('equipos');
  store.add(equipo);
}

function getEquipos(callback) {
  const tx = db.transaction('equipos', 'readonly');
  const store = tx.objectStore('equipos');
  const request = store.getAll();

  request.onsuccess = () => callback(request.result);
}

function getEntrenadorById(id, callback) {
  const tx = db.transaction('entrenadores', 'readonly');
  const store = tx.objectStore('entrenadores');
  const request = store.get(Number(id));

  request.onsuccess = () => callback(request.result);
}
