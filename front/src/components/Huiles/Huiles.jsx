import React from "react";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Data from "../../Data/Data";

function Huiles(props) {
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
      {data
        .filter((painting) => painting.category === "Huiles")
        .map((painting) => (
          <Cards key={painting.id} tableaux={painting} />
        ))}
    </article>
  );
}

export default Huiles;
