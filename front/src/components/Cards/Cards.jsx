import { Link } from "react-router-dom";
import "./Cards.css";

export default function Thumb({ tableaux }) {
  if (!tableaux) return null;

  const id = tableaux?.id;

  return (
    <Link to={`/FichePeinture/${id}`} className="thumb">
      <img className="img-thumb" src={tableaux.imageUrl} alt="" />
      <p className="accommodation-title">{tableaux.name}</p>
    </Link>
  );
}
