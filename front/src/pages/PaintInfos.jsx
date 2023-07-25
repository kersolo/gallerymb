import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Data from '../Data/Data';
import './PaintInfos.css';

function PaintInfos(props) {
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

  if (!data) return null;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 className="text-PaintInfos">{data.name} </h2>
      <h4>{data.price} </h4>
      <img className="img-PaintInfos" src={data.imageUrl} alt="" />
      <p>{data.description} </p>
    </div>
  );
}

export default PaintInfos;
// import { useParams, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Data from '../Data/Data';
// import './PaintInfos.css';

// function PaintInfos(props) {
//   const [data, setData] = useState();
//   const params = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getData = async () => {
//       const res = await Data();
//       const infos = res.find(({ id }) => id === params.id);
//       setData(infos);
//       if (infos === undefined) {
//         navigate('/404');
//       }
//     };
//     getData();
//   }, [params, navigate]);

//   return (
//     data && (
//       <div style={{ textAlign: 'center' }}>
//         <h2 className="text-PaintInfos">{data.name} </h2>
//         <h4>{data.price} </h4>
//         <img className="img-PaintInfos" src={data.imageUrl} alt="" />
//         <p>{data.description} </p>
//       </div>
//     )
//   );
// }

// export default PaintInfos;
