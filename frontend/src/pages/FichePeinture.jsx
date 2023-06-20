import { useParams } from 'react-router-dom';
import peintures from '../Data/peintures.json';

function FichePeinture(props) {
  const params = useParams();
  const infos = peintures.find(({ id }) => id === params.id);
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{infos.title} </h2>
      <h4>{infos.prix} </h4>
      <img src={infos.picture} alt="" />
      <p>{infos.description} </p>
    </div>
  );
}

export default FichePeinture;
