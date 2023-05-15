import Section from '../../componants/Section/Section';
import peintures from '../../Data/peintures.json';
import './Categories.css';

function Categories(props) {
  return (
    <main className="categorie-container">
      <Section
        title="Paysage Mer"
        description={peintures.filter((el, index) => el.cat === '3')}
      />
      <Section
        title="Couleurs chaudes"
        description={peintures.filter((el, index) => el.cat === '1')}
      />
      <Section
        title="Couleurs froides"
        description={peintures.filter((el, index) => el.cat === '4')}
      />
      <Section
        title="Couleurs pâles"
        description={peintures.filter((el, index) => el.cat === '2')}
      />
    </main>
  );
}

export default Categories;
// import Section from '../../componants/Section/Section';
// import peintures from '../../Data/peintures.json';
// import { Link } from 'react-router-dom';
// import './Categories.css';

// function Categories(props) {
//   return (
//     <main className="categorie-container">
//       <Section
//         title="Paysage Mer"
//         description={peintures.map((el, index) => (
//           <Link
//             to={`/FichePeinture/${el.id}`}
//             className="cards-section"
//             key={index}
//           >
//             <img
//               src={el.pictures3}
//               alt="peinture"
//               key={index}
//               className="imgCat"
//             />
//           </Link>
//         ))}
//       />
//       <Section
//         title="Couleurs chaudes"
//         description={peintures.map((el, index) => (
//           <Link
//             to={`/FichePeinture/${el.id}`}
//             className="cards-section"
//             key={index}
//           >
//             <img
//               src={el.pictures1}
//               alt="peinture"
//               key={index}
//               className="imgCat"
//             />
//           </Link>
//         ))}
//       />
//       <Section
//         title="Couleurs froides"
//         description={peintures.map((el, index) => (
//           <Link
//             to={`/FichePeinture/${el.id}`}
//             className="cards-section"
//             key={index}
//           >
//             <img src={el.pictures4} alt="" key={index} />
//           </Link>
//         ))}
//       />
//       <Section
//         title="Couleurs pâles"
//         description={peintures.map((el, index) => (
//           <Link
//             to={`/FichePeinture/${el.id}`}
//             className="cards-section"
//             key={index}
//           >
//             <img src={el.pictures2} alt="" key={index} />
//           </Link>
//         ))}
//       />
//     </main>
//   );
// }

// export default Categories;
