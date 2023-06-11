import React, { useEffect, useState } from "react";
import "./NotasPorCurso.css";
import { getNotasCurso } from "../../service/API_proyect/notas.service";
const NotasPorCurso = () => {
  const [curso, setCurso] = useState();
  const [notas, setNotas] = useState();
  useEffect(() => {
    setNotas(getNotasCurso(curso));
    (async () => {
      setNotas(await getNotasCurso(curso));
    })();
  }, [curso]);

  useEffect(() => {
    console.log(notas?.data);
  }, [notas]);
  return (
    <>
      <div className="notasporcurso">
        <h1>Notas por curso</h1>
        <select 
          onChange={(e) => {
            setCurso(e.target.value);
          }}
        >
          <option value="1ESO">Curso</option>
          <option value="1ESO">1 ESO</option>
          <option value="2ESO">2 ESO</option>
          <option value="3ESO">3 ESO</option>
          <option value="4ESO">4 ESO</option>
        </select>
        <div>
          <table>
            {notas?.data?.map((element) => (
              <tbody key={element.asignatura}>
                <tr>
                  <td>
                    <p className="asignatura">{element.asignatura}</p>
                  </td>
                  <td>
                    <p className="nota">{element.nota}</p>
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

export default NotasPorCurso;
