import Section from '../componants/Section/Section';
import peintures from '../Data/peintures.json';
import { Link } from 'react-router-dom';

function Categories(props) {
  return (
    <main>
      <Section
        title="Paysage Mer"
        description={peintures.map((el, index) => (
          <Link
            to={`/FichePeinture/${el.id}`}
            className="cards-section"
            key={index}
          >
            <img src={el.pictures3} alt="" key={index} />
          </Link>
        ))}
      />
      <Section
        title="Couleurs chaudes"
        description={peintures.map((el, index) => (
          <Link
            to={`/FichePeinture/${el.id}`}
            className="cards-section"
            key={index}
          >
            <img src={el.pictures1} alt="" key={index} />
          </Link>
        ))}
      />
      <Section
        title="Couleurs froides"
        description={peintures.map((el, index) => (
          <Link
            to={`/FichePeinture/${el.id}`}
            className="cards-section"
            key={index}
          >
            <img src={el.pictures4} alt="" key={index} />
          </Link>
        ))}
      />
      <Section
        title="Couleurs pâles"
        description={peintures.map((el, index) => (
          <Link
            to={`/FichePeinture/${el.id}`}
            className="cards-section"
            key={index}
          >
            <img src={el.pictures2} alt="" key={index} />
          </Link>
        ))}
      />
    </main>
  );
}

export default Categories;
// import Section from '../componants/Section/Section';
// import peintures from '../Data/peintures.json';
// import Test from '../componants/Test/Test';

// function Categories(props) {
//   const logtest = peintures[1];
//   console.log(logtest);
//   return (
//     <main>
//       <Section
//         title="Paysage Mer"
//         description={peintures.map((el, index) => (
//           <Test tableau={el} key={index} />
//         ))}
//       />
//       <Section
//         // <Section
//         //   title="Paysage Mer"
//         //   description={peintures.map((el, index) => (
//         //     <Test tableau={el[1]} key={index} />
//         //   ))}
//         // />
//         // <Section
//         title="Couleurs chaudes"
//         description={peintures.map((el, index) => (
//           <Test tableau={el} key={index} />
//         ))}
//       />
//       <Section
//         title="Couleurs froides"
//         description={peintures.map((el, index) => (
//           <Test tableau={el} key={index} />
//         ))}
//       />
//       <Section
//         title="Couleurs vives"
//         description={peintures.map((el, index) => (
//           <Test tableau={el} key={index} />
//         ))}
//       />
//     </main>
//   );
// }

// export default Categories;
