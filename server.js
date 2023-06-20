const express = require('express');
require('dotenv').config();

PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.send({
    msg: 'Hello world !',
  });
});

app.listen(PORT, () => {
  console.log(`Le server est lancé sur le port : ${PORT}`);
});
