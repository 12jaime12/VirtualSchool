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
          <option value={asignaturas?.data[0]?._id}>Asignatura</option>
          {asignaturas?.data?.length > 0 &&
            asignaturas.data.map((element) => (
              <option key={element._id} value={element._id}>
                {element.name} {element.curso}
              </option>
            ))}
          {asignaturas?.data?.length === 0 && <option>cargando</option>}
        </select>
        {asig !== undefined && (
          <table>
            <tbody>
              <tr>
                <td className="asignatura3">
                  <p>{asigver?.data?.name}</p>
                </td>
                <td className="nota3">
                  <p>{asigver?.data?.curso}</p>
                </td>
                <td className="nota4">
                  <p>{asigver?.data?.nota}</p>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default NotaPorAsignatura;
