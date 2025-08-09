// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  CategoryID: { type: String, required: true, unique: true },
  CategoryName: { type: String, required: true },
  Description: { type: String },
  Image: { type: Buffer }, // Para almacenar la imagen como blob
  Mime: { type: String }   // Tipo MIME de la imagen
});

module.exports = mongoose.model('Category', categorySchema);
