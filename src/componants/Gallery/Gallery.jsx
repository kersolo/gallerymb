import Cards from '../Cards/Cards';
import './Gallery.css';
import peintures from '../../Data/peintures.json';

function Gallery(props) {
  return (
    <article className="gallery">
      {peintures.map((peinture) => (
        <Cards tableau={peinture} />
      ))}
    </article>
  );
}

export default Gallery;
