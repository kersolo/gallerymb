import { useState, useEffect } from 'react';
import Data from '../Data/Data';
import Cards from '../components/Cards/Cards';
import '../App.css';

function App() {
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
        <Cards key={index} tableaux={tableaux} />
      ))}
    </article>
  );
}

export default App;
