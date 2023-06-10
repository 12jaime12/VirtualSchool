import { getNotasAñoActual } from "../../service/API_proyect/notas.service";
import { hola } from "../hola";
import "./NotasActual.css";
import React, { useEffect, useState } from "react";

const NotasActual = () => {
  const [anno, setAnno] = useState();
  const [notas, setNotas] = useState({});

  useEffect(() => {
    const date = new Date();
    setAnno(date.getFullYear());
    (async () => {
      setNotas(await getNotasAñoActual());
    })();
  }, []);

  hola(notas);
  return (
    <>
      <div className="notasactual">
        <h1>Notas curso {anno}</h1>
        {/* {notas.data.map((element) => (
          <div key={hola}>
            <p>{element}</p>
          </div>
        ))} */}
        <div></div>
      </div>
    </>
  );
};

export default NotasActual;
