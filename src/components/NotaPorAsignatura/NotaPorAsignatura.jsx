import { getAllAsignaturasAlumn } from "../../service/API_proyect/asignaturas.service";
import { getOneNota } from "../../service/API_proyect/notas.service";
import "./NotaPorAsignatura.css";
import React, { useEffect, useState } from "react";

const NotaPorAsignatura = () => {
  const [asignaturas, setAsignaturas] = useState({ data: [] });
  const [asig, setAsig] = useState();
  const [asigver, setAsigver] = useState();

  useEffect(() => {
    (async () => {
      setAsignaturas(await getAllAsignaturasAlumn());
    })();
  }, []);

  useEffect(() => {
    console.log(asig);
    if (asig !== undefined) {
      (async () => {
        setAsigver(await getOneNota(asig));
      })();
    }
  }, [asig]);

  useEffect(() => {
    console.log(asignaturas);
    console.log(asig);
  }, [asignaturas]);

  useEffect(() => {
    console.log(asigver);
  }, [asigver]);
  return (
    <>
      <div className="notaporasignatura">
        <h1>Nota Por Asignatura</h1>
        <select
          onChange={(e) => {
            setAsig(e.target.value);
          }}
        >
          {asignaturas?.data?.length > 0 &&
            asignaturas.data.map((element) => (
              <option key={element._id} value={element._id}>
                {element.name} {element.curso}
              </option>
            ))}
          {asignaturas?.data?.length === 0 && <option>cargando</option>}
        </select>
        <table>
          <tbody>
            <tr>
              <td>
                <p className="asignatura">{asigver?.data?.name}</p>
              </td>
              <td>
                <p className="nota">{asigver?.data?.curso}</p>
              </td>
              <td>
                <p className="nota">{asigver?.data?.nota}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NotaPorAsignatura;
