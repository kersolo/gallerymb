export default function getProducts() {
  return fetch('http://localhost:5000/api/products/')
    .then((response) => {
      return response.json();
    })
    .then((res) => res)
    .catch((err) => console.log(err));
}
