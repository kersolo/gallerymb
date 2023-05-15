import { useState } from 'react';
import './Section.css';

function Section({ title, description }) {
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
    <section className="section-container" onClick={handleClick}>
      <div className="div-section">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  ) : (
    <section className="section-container" onClick={handleClick}>
      <div className="div-section">
        <h2>{title}</h2>
      </div>
    </section>
  );
}

export default Section;
