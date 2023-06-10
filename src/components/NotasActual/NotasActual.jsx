import { useAuth } from "../../contexts/authContext";
import { getNotasAñoActual } from "../../service/API_proyect/notas.service";
import "./NotasActual.css";
import React, { useEffect, useState } from "react";

const NotasActual = () => {
  const [anno, setAnno] = useState();
  const [notas, setNotas] = useState({ data: [] });
  const { user } = useAuth();

  useEffect(() => {
    const date = new Date();
    setAnno(date.getFullYear());
    (async () => {
      setNotas(await getNotasAñoActual());
    })();
  }, []);

  useEffect(() => {
    console.log(notas.data);
  }, [notas]);
  return (
    <>
      <div className="notasactual">
        <h1>Notas curso {anno}</h1>
        <div>
          <h3>{user?.user}</h3>
          <table>
            {notas.data.map((element) => (
              <tbody key={element._id}>
                <tr>
                  <td className="asignatura">
                    <p>{element.asignatura.name}</p>
                  </td>
                  <td className="curso">
                    <p>{element.asignatura.curso}</p>
                  </td>
                  <td className="nota">
                    <p>{element.nota}</p>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default NotasActual;
