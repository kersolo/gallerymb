import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
  return (
    <div className="Categories">
      <Link to="/Categories/Aquarelles" className="Link-Cat">
        Aquarelles
      </Link>
      <Link to="/Categories/Huiles" className="Link-Cat">
        Huiles
      </Link>
      <Link to="/Categories/Autres_oeuvres" className="Link-Cat">
        Autres oeuvres
      </Link>
    </div>
  );
}

export default Categories;
