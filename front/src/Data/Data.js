// export const fetchCall = async () => {
//   try {
//     const response = await fetch('http://localhost:5000/api/products/');
//     const products = await response.json();
//     return products;
//   } catch (error) {
//     alert('Erreur de chargement des produits');
//   }
// };

export default function Data() {
  return fetch('http://localhost:5000/api/products/')
    .then((response) => {
      return response.json();
    })
    .then((res) => res)
    .catch((err) => console.log(err));
}
