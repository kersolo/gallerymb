import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Data from '../Data/Data';
import './FichePeintures.css';

function FichePeinture(props) {
  const [data, setData] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await Data();
      const infos = res.find(({ id }) => id === params.id);
      setData(infos);
      if (infos === undefined) {
        navigate('/404');
      }
    };
    getData();
  }, [params, navigate]);

  return (
    data && (
      <div style={{ textAlign: 'center' }}>
        <h2 className="text-fichePeintures">{data.name} </h2>
        <h4>{data.price} </h4>
        <img className="img-fichePeinture" src={data.imageUrl} alt="" />
        <p>{data.description} </p>
      </div>
    )
  );
}

export default FichePeinture;
