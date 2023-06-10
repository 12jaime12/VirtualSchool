import React, { useEffect, useState } from "react";
import "./Profesorado.css";
import { getAllProfesores } from "../../service/API_proyect/user.service";
const Profesorado = () => {
  const [profesores, setProfesores] = useState({ data: [] });

  useEffect(() => {
    (async () => {
      setProfesores(await getAllProfesores());
    })();
  }, []);

  return (
    <>
      <div className="profesorado">
        <h1>Profesorado</h1>
        <div>
          <table>
            {profesores.data.map((element) => (
              <tbody key={element._id}>
                <tr>
                  <td className="nombre1">
                    <p>{element.name}</p>
                  </td>
                  <td className="asignatura1">
                    <p>
                      {element?.asignaturas[0]?.name}
                    </p>
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

export default Profesorado;
