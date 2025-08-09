const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const multer = require('multer');




// Definición de rutas
router.get('/', (req, res) => {
  res.send('Categorías aquí');
});

module.exports = router;



// Multer configuración para subir archivos en memoria (buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Crear una nueva categoría (con imagen)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { CategoryID, CategoryName, Description } = req.body;
    const image = req.file ? req.file.buffer : null;
    const mime = req.file ? req.file.mimetype : null;

    if(!CategoryID || !CategoryName){
      return res.status(400).json({ error: 'CategoryID y CategoryName son requeridos' });
    }

    const category = new Category({
      CategoryID,
      CategoryName,
      Description,
      Image: image,
      Mime: mime
    });

    await category.save();
    res.status(201).json({ message: 'Categoría creada', category });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creando categoría' });
  }
});

// Obtener todas las categorías (sin imagen para no cargar mucho)
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({}, '-Image'); // Excluir imagen para optimizar
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
});

// Obtener imagen de categoría por id
router.get('/:id/image', async (req, res) => {
  try {
    const category = await Category.findOne({ CategoryID: req.params.id });
    if (!category || !category.Image) return res.status(404).json({ error: 'Imagen no encontrada' });

    res.contentType(category.Mime);
    res.send(category.Image);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener imagen' });
  }
});

module.exports = router;
