import React from "react";
import { useState, useEffect } from "react";
// import Data from '';
import Cards from "../Cards/Cards";
import Data from "../../Data/Data";

function Aquarelles(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await Data();
      setData(res);
    };
    getData();
  }, []);

  return (
    <article className="gallery-container">
      {data
        .filter((painting) => painting.category === "Aquarelles")
        .map((painting) => (
          <Cards key={painting.id} tableaux={painting} />
        ))}
    </article>
  );
}

export default Aquarelles;
// import React from 'react';
// import { useState, useEffect } from 'react';
// // import Data from '';
// import Cards from '../Cards/Cards';
// import Data from '../../Data/Data';

// function Aquarelles(props) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const res = await Data();
//       setData(res);
//     };
//     getData();
//   }, []);

//   return (
//     <article className="gallery-container">
//       {data.map((tableaux, index) => (
//         <Cards key={index} tableaux={tableaux} />
//       ))}
//     </article>
//   );
// }

// export default Aquarelles;
