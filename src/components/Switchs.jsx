import React, { useEffect } from "react";
import Horario1 from "./HorarioEscolar/Horario1/Horario1";
import Horario2 from "./HorarioEscolar/Horario2/Horario2";
import Horario3 from "./HorarioEscolar/Horario3/Horario3";
import Horario4 from "./HorarioEscolar/Horario4/Horario4";
import { Link, NavLink } from "react-router-dom";

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
              <NavLink to="/dashboard/notasActual" className="link">
                <p>Notas curso {curso}</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/notasporcurso" className="link">
                <p>Notas por curso</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/notaporasignatura" className="link">
                <p>Nota por asignatura</p>
              </NavLink>
            </li>
          </ul>
        </>
      );

    case "teacher":
      return (
        <>
          <ul>
            <li>
              <NavLink to="/dashboard/alumnosasignatura" className="link">
                <p>Alumnos asignatura</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/crearnota" className="link">
                <p>Crear nota</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/borrarnota" className="link">
                <p>Borrar nota</p>
              </NavLink>
            </li>
          </ul>
        </>
      );

    case "admin":
      return (
        <>
          <ul>
            <li>
              <NavLink to="/dashboard/crearasignatura" className="link">
                <p>Crear asignatura</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/añadiralumnoprofesor" className="link">
                <p>Añadir alumno-profesor a la asignatura</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/profesorado" className="link">
                <p>Profesorado</p>
              </NavLink>
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
