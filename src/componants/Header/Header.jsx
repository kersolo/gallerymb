import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <h1>Yves Meriel-Bussy</h1>
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/">Catégorie</Link>
        <Link to="/">YMB</Link>
        <Link to="/">contact</Link>
      </nav>
    </header>
  );
}

export default Header;
