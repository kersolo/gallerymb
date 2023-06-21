require('dotenv').config();
const express = require('express'); // import du framework express
const port = process.env.PORT || 3000; // création de la constante port
const path = require('path'); //import du module path

const productRoutes = require('./routes/product');
const app = express(); // on appel la méthode express

////

//En-têtes pour éviter les erreurs CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

////
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/api/products', productRoutes);

//server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
