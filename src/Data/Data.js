// utilisation de fetch pour un futur appel à l'api
export default function Data() {
  return fetch('/peintures.json')
    .then((response) => {
      return response.json();
    })
    .then((res) => res)
    .catch((err) => console.log(err));
}
