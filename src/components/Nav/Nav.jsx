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
            <select onChange={(e) => gotoroute(e.target.value)}>
              <option value="alumnosasignatura">Alumnos asignatura</option>
              <option value="crearnota">Crear nota</option>
              <option value="borrarnota">Borrar nota</option>
            </select>
          </div>
        </>
      );
    case "admin":
      return (
        <>
          <div>
            <select onChange={(e) => gotoroute(e.target.value)}>
              <option value="crearasignatura">Crear asignatura</option>
              <option value="AddAlumnTeacher">
                Añadir alumno-profesor a la asignatura
              </option>
              <option value="profesorado">Profesorado</option>
            </select>
          </div>
        </>
      );
  }
};
