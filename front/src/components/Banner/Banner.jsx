import './Banner.css';
import { Link } from 'react-router-dom';
import ImgBannerCat from '../../assets/femme_voilier.jpg';

export default function Banner({ src, text, alt }) {
  return src !== ImgBannerCat ? (
    <aside className="banner">
      <img className="img-banner" src={src} alt={alt} />
      <Link to="/YMB" className="text">
        {text}
      </Link>
      {/* <p className="text"> {text} </p> */}
    </aside>
  ) : (
    <aside className="banner">
      <img className="img-banner" src={src} alt={alt} />
    </aside>
  );
}
