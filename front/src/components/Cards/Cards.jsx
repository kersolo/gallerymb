import { Link } from 'react-router-dom';
import './Cards.css';

export default function Thumb({ tableaux }) {
  const id = tableaux.id;

  if (tableaux !== false) {
    return (
      <Link to={`/FichePeinture/${id}`} className="thumb">
        <img className="img-thumb" src={tableaux.imageUrl} alt="" />
        <p className="accommodation-title">{tableaux.name}</p>
      </Link>
    );
  }
}
