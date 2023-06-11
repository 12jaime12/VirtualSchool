import { getNotasMisAlumns } from "../../service/API_proyect/asignaturas.service";
import "./AlumnosAsignatura.css";
import React, { useEffect, useState } from "react";

const AlumnosAsignatura = () => {
  const [alumns, setAlumns] = useState({ data: [] });

  useEffect(() => {
    (async () => {
      setAlumns(await getNotasMisAlumns());
    })();
  }, []);
  return (
    <>
      <div className="alumnosasignatura">
        <h1>Alumnos Asignatura</h1>
        <div>
          <p>{alumn}</p>
          <table>
            {profesores.data.map((element) => (
              <tbody key={element._id}>
                <tr>
                  <td className="nombre1">
                    <p>{element.name}</p>
                  </td>
                  <td className="asignatura1">
                    <p>{element?.asignaturas[0]?.name}</p>
                  </td>
                  <td className="curso1">
                    <p>{element?.asignaturas[0]?.curso}</p>
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

export default AlumnosAsignatura;
