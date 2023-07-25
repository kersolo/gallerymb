import { useQuery } from 'react-query';
import Data from '../Data/Data';
import Cards from '../components/Cards/Cards';
import '../App.css';
import Banner from '../components/Banner/Banner';
import ImgBanner from '../assets/gall1.jpg';

function Home() {
  const { isLoading, data } = useQuery('paintings', Data);

  if (isLoading)
    return (
      <main>
        <Banner
          src={ImgBanner}
          text={"De l'ombre à la lumière"}
          alt={'Banner'}
        />
        <article className="gallery-container">
          <p>Chargement des images ...</p>
        </article>
      </main>
    );
  if (!data)
    return (
      <main>
        <Banner
          src={ImgBanner}
          text={"De l'ombre à la lumière"}
          alt={'Banner'}
        />
        <article className="gallery-container">
          <p>Le server rencontre un problème</p>
        </article>
      </main>
    );

  return (
    <main>
      <Banner src={ImgBanner} text={"De l'ombre à la lumière"} alt={'Banner'} />
      <article className="gallery-container">
        {data.map((paintings) => (
          <Cards key={paintings.id} paintings={paintings} />
        ))}
      </article>
    </main>
  );
}

export default Home;
