import React, { useEffect } from "react";
import Horario1 from "./HorarioEscolar/Horario1/Horario1";
import Horario2 from "./HorarioEscolar/Horario2/Horario2";
import Horario3 from "./HorarioEscolar/Horario3/Horario3";
import Horario4 from "./HorarioEscolar/Horario4/Horario4";
import { Link } from "react-router-dom";

export const SwitchHorarios = ({ curso }) => {
  switch (curso) {
    case "1ESO":
      return <Horario1 />;

    case "2ESO":
      return <Horario2 />;

    case "3ESO":
      return <Horario3 />;

    case "4ESO":
      return <Horario4 />;

    default:
      return <Horario1 />;
  }
};
export const SwitchRol = ({ rol, curso }) => {
  switch (rol) {
    case "alumn":
      return (
        <>
          <ul>
            <li>
              <Link to="/dashboard/notasActual" className="link">
                <p>Notas curso {curso}</p>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/notasporcurso" className="link">
                <p>Notas por curso</p>
              </Link>
            </li>
            <li>
              <p>Nota por asignatura</p>
            </li>
          </ul>
        </>
      );

    case "teacher":
      return (
        <>
          <ul>
            <li>
              <p>Alumnos asignatura</p>
            </li>
            <li>
              <p>Crear nota</p>
            </li>
            <li>
              <p>Borrar nota</p>
            </li>
          </ul>
        </>
      );

    case "admin":
      return (
        <>
          <ul>
            <li>
              <p>Crear asignatura</p>
            </li>
            <li>
              <p>Añadir alumno-profesor a la asignatura</p>
            </li>
            <li>
              <p>Profesorado</p>
            </li>
          </ul>
        </>
      );
    default:
      return (
        <>
          <p>k lo q</p>
        </>
      );
  }
};
