import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Nav = ({ rol, curso }) => {
  const navigate = useNavigate();

  const gotoroute = (value) => {
    console.log("entro");
    const ruta = `/dashboard/${value}`;
    navigate(ruta);
  };

  switch (rol) {
    case "alumn":
      return (
        <>
          <div>
            <select onChange={(e) => gotoroute(e.target.value)}>
              <option value="notasActual">Notas curso {curso}</option>
              <option value="notasporcurso">Notas por curso</option>
              <option value="notaporasignatura">Nota por asignatura</option>
            </select>
          </div>
        </>
      );
    case "teacher":
      return (
        <>
          <div>
            <select>
              <NavLink to="/dashboard/alumnosasignatura">
                <option>Alumnos asignatura</option>
              </NavLink>
              <NavLink to="/dashboard/crearnota">
                <option>Crear nota</option>
              </NavLink>
              <NavLink to="/dashboard/borrarnota">
                <option>Borrar nota</option>
              </NavLink>
            </select>
          </div>
        </>
      );
    case "admin":
      return (
        <>
          <div>
            <select>
              <option value="crearasignatura">Crear asignatura</option>
              <NavLink to="/dashboard/AddAlumnTeacher">
                <option>Añadir alumno-profesor a la asignatura</option>
              </NavLink>
              <NavLink to="/dashboard/profesorado">
                <option>Profesorado</option>
              </NavLink>
            </select>
          </div>
        </>
      );
  }
};
