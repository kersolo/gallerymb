import React from 'react';
import { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import Data from '../../Data/Data';

function Watercolors(props) {
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
      {data.map((paintings, index) => (
        <Cards
          key={index}
          paintings={paintings.category === 'Aquarelles' && paintings}
        />
      ))}
    </article>
  );
}

export default Watercolors;
