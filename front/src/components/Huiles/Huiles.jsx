import React from 'react';
import { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import Data from '../../Data/Data';

function Huiles(props) {
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
      {data.map((tableaux, index) => (
        <Cards
          key={index}
          tableaux={tableaux.category === 'Huiles' && tableaux}
        />
      ))}
    </article>
  );
}

export default Huiles;
