import React from 'react';
import { useQuery } from 'react-query';
import Cards from '../Cards/Cards';
import Data from '../../Data/Data';

function OilPainting(props) {
  const { isLoading, data } = useQuery('paintings', Data);

  if (isLoading)
    return (
      <article className="gallery-container">
        <p>Chargement des images ...</p>
      </article>
    );
  if (!data)
    return (
      <article className="gallery-container">
        <p>Le server rencontre un problème</p>
      </article>
    );

  return (
    <article className="gallery-container">
      {data
        .filter((painting) => painting.category === 'Huiles')
        .map((painting) => (
          <Cards key={painting.id} paintings={painting} />
        ))}
    </article>
  );
}

export default OilPainting;
