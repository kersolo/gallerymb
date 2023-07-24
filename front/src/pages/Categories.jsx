import { Link } from 'react-router-dom';
import './Categories.css';
import Banner from '../components/Banner/Banner';
import ImgBannerCat from '../assets/femme_voilier.jpg';

function Categories(props) {
  return (
    <main>
      <Banner
        src={ImgBannerCat}
        text={"De l'ombre à la lumière"}
        alt={'Banner'}
      />

      <section className="Categories">
        <Link to="/Categories/Watercolors" className="Link-Cat">
          Aquarelles
        </Link>
        <Link to="/Categories/OilPainting" className="Link-Cat">
          Huiles
        </Link>
        <Link to="/Categories/OtherWorks" className="Link-Cat">
          Autres oeuvres
        </Link>
      </section>
    </main>
  );
}
export default Categories;
