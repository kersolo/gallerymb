import { useState } from 'react';
import './Section.css';
import { Link } from 'react-router-dom';

function Section({ title, description }) {
  console.log(description);
  //state
  const [open, setOpen] = useState(false);
  //comportement
  const handleClick = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  //render

  return open ? (
    <section className="section-container-open" onClick={handleClick}>
      <div className="div-section">
        <h2 className="titleSection">{title}</h2>
        {description.map((el) => (
          <Link to={`/FichePeinture/${el.id}`} key={el.id}>
            <img className="imgCat" src={el.picture} alt="" />
          </Link>
        ))}
        {/* <div className="desSection">{description}</div> */}
      </div>
    </section>
  ) : (
    <section className="section-container-close" onClick={handleClick}>
      <div className="div-section">
        <h2>{title}</h2>
      </div>
    </section>
  );
}

export default Section;
