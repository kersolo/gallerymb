import { useState, useEffect } from 'react';
import Data from '../Data/Data';
import Cards from '../components/Cards/Cards';
import '../App.css';
import Banner from '../components/Banner/Banner';
import ImgBanner from '../assets/gall1.jpg';

function Accueil() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await Data();
      setData(res);
    };
    getData();
  }, []);

  return (
    <main>
      <Banner src={ImgBanner} text={"De l'ombre à la lumière"} alt={'Banner'} />
      <article className="gallery-container">
        {data.map((tableaux, index) => (
          <Cards key={index} tableaux={tableaux} />
        ))}
      </article>
    </main>
  );
}

export default Accueil;
