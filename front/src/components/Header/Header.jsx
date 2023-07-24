import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <h1>Yves Mériel-Bussy</h1>
      <nav className="nav">
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : 'nav-link'}
        >
          Accueil
        </Link>
        <Link
          to="/Categories"
          className={
            location.pathname === '/Categories' ? 'active' : 'nav-link'
          }
        >
          Catégories
        </Link>
        <Link
          to="/YMB"
          className={location.pathname === '/YMB' ? 'active' : 'nav-link'}
        >
          YMB
        </Link>
        <Link
          to="/"
          className={location.pathname === '/Contact' ? 'active' : 'nav-link'}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
