import { useState } from 'react';
import './Banner.css';

function Banner(props) {
  const [msg, setMsg] = useState('');

  const handleClick = async () => {
    const data = await window.fetch('/api/test');
    const json = await data.json();
    const msg = json.msg;
    setMsg(msg);
  };

  return (
    <aside className="banner">
      <p>
        Phrase d'accroche avec image <br /> (Carroussel ?)
      </p>

      <button onClick={handleClick}>click dessus</button>
      <p>{msg}</p>
    </aside>
  );
}

export default Banner;
