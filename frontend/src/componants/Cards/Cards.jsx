import { Link } from 'react-router-dom';
import './Cards.css';

function Cards({ tableau }) {
  const id = tableau.id;
  return (
    <Link to={`/FichePeinture/${id}`} className="cards">
      <img className="img-card" src={tableau.picture} alt="" />
    </Link>
  );
}

export default Cards;
