// const Product = require('../models/Product');

// exports.getAllProducts = (req, res, next) => {
//   Product.find()
//     .then((products) => res.status(200).json(products))
//     .catch((err) => res.status(400).json({ err }));
// };

// exports.getOneProduct = (req, res, next) => {
//   Product.findById(req.params.id)
//     .then((product) => res.status(200).json(product))
//     .catch((err) => res.status(400).json({ err }));
// };

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

const Product = require('../models/Product');

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      const mappedProducts = products.map((product) => {
        product.imageUrl =
          req.protocol +
          '://' +
          req.get('host') +
          '/images/' +
          product.imageUrl;
        return product;
      });
      res.status(200).json(mappedProducts);
    })
    .catch(() => {
      res.status(500).send(new Error('Database error!'));
    });
};

exports.getOneProduct = (req, res, next) => {
  Product.findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).send(new Error('Product not found!'));
      }
      product.imageUrl =
        req.protocol + '://' + req.get('host') + '/images/' + product.imageUrl;
      res.status(200).json(product);
    })
    .catch(() => {
      res.status(500).send(new Error('Database error!'));
    });
};
// const Product = require('../models/Product');

// exports.getAllProducts = (req, res, next) => {
//   Product.find()
//     .then((products) => {
//       const mappedProducts = products.map((product) => {
//         product.imageUrl =
//           req.protocol +
//           '://' +
//           req.get('host') +
//           '/images/' +
//           product.imageUrl;
//         return product;
//       });
//       res.status(200).json(mappedProducts);
//     })
//     .catch(() => {
//       res.status(500).send(new Error('Database error!'));
//     });
// };

// exports.getOneProduct = (req, res, next) => {
//   Product.findById(req.params.id)
//     .then((product) => {
//       if (!product) {
//         return res.status(404).send(new Error('Product not found!'));
//       }
//       product.imageUrl =
//         req.protocol + '://' + req.get('host') + '/images/' + product.imageUrl;
//       res.status(200).json(product);
//     })
//     .catch(() => {
//       res.status(500).send(new Error('Database error!'));
//     });
// };
