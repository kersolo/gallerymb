import { Link } from 'react-router-dom';
import './Cards.css';

export default function Thumb({ paintings }) {
  const id = paintings.id;

  if (paintings !== false) {
    return (
      <Link to={`/PaintInfos/${id}`} className="thumb">
        <img className="img-thumb" src={paintings.imageUrl} alt="" />
        <p className="accommodation-title">{paintings.name}</p>
      </Link>
    );
  }
}
