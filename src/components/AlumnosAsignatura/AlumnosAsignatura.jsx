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

  useEffect(() => {
    console.log(alumns?.data);
  }, [alumns]);
  return (
    <>
      <div className="alumnosasignatura">
        <h1>Alumnos Asignatura</h1>
        <h2 className="negro">
          {alumns?.data?.name} {alumns?.data?.curso}
        </h2>
        <div>
          <table className="tablaAlumnosAsignatura">
            {alumns?.data?.notasAlumns?.map((element) => (
              <tbody key={element.name}>
                <tr>
                  <td className="nombre1">
                    <p>{element.name}</p>
                  </td>
                  <td className="nota6">
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

export default AlumnosAsignatura;
