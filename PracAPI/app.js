// Load libraries into the environment application
require('./models/mdlArticle');


var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
const helmet = require("helmet");

// Creates application (mueve esta línea antes de usar app)
var app = express();

// Ahora importa el router
const categoryRouter = require('./routes/category');

// Application parser to support JSON data format
app.use(bodyParser.json({ type: 'application/json' }));

// Enable CORS, Cross-Origin Resource Sharing
app.use(cors());

// Enable Helmet
app.use(helmet());

// Usa el router ahora
app.use('/category', categoryRouter);

// Conexión MongoDB
mongoose.connect('mongodb://localhost:27017/dbArticles', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Otras rutas
var indexRouter = require('./routes/index');
var authorRouter = require('./routes/author');
var articleRouter = require('./routes/article');
var commentRouter = require('./routes/comment');

app.use('/', indexRouter);
app.use('/author', authorRouter);
app.use('/article', articleRouter);
app.use('/comment', commentRouter);

// Server listen
var server = app.listen(5005, () => {
    console.log(`Server is listening on port ${server.address().port}`);
});
