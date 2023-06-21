const products = [
  {
    id: '1',
    name: 'Baie de Kersaint',
    price: 400,
    imageUrl: 'apa01.jpg',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    altTxt: "Photo d'une aquarelle",
  },
  {
    id: '2',
    name: 'Loch Majan',
    price: 400,
    imageUrl: 'apa02.jpg',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    altTxt: "Photo d'une aquarelle",
  },
  {
    id: '3',
    name: 'Portsall',
    price: 400,
    imageUrl: 'apa03.jpg',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    altTxt: "Photo d'une aquarelle",
  },
  {
    id: '4',
    name: 'Côte sauvage',
    price: 400,
    imageUrl: 'apa04.jpg',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    altTxt: "Photo d'une aquarelle",
  },
  {
    id: '5',
    name: 'Sur la côte',
    price: 400,
    imageUrl: 'apa05.jpg',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    altTxt: "Photo d'une aquarelle",
  },
  {
    id: '6',
    name: 'Dunes',
    price: 400,
    imageUrl: 'apa06.jpg',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    altTxt: "Photo d'une aquarelle",
  },
  {
    id: '7',
    name: 'Marée basse',
    price: 400,
    imageUrl: 'apa07.jpg',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    altTxt: "Photo d'une aquarelle",
  },
  {
    id: '8',
    name: 'Bouquet',
    price: 400,
    imageUrl: 'apa08.jpg',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    altTxt: "Photo d'une aquarelle",
  },
];

exports.find = () => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(products)))
  );
};

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(
      JSON.parse(JSON.stringify(products)).find((product) => product._id == id)
    )
  );
};
