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
              <Link to="/dashboard/notasActual">
                <p>ver notas curso {curso}</p>
              </Link>
            </li>
            <li>
              <a>Ver notas por curso</a>
            </li>
            <li>
              <a>Ver nota por asignatura</a>
            </li>
          </ul>
        </>
      );

    case "teacher":
      return (
        <>
          <ul>
            <li>
              <a>ver notas curso {curso}</a>
            </li>
            <li>
              <a>Ver notas por curso</a>
            </li>
            <li>
              <a>Ver nota por asignatura</a>
            </li>
          </ul>
        </>
      );

    case "admin":
      return (
        <>
          <ul>
            <li>
              <a>ver notas curso {curso}</a>
            </li>
            <li>
              <a>Ver notas por curso</a>
            </li>
            <li>
              <a>Ver nota por asignatura</a>
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
