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

  useEffect(() => {
    console.log(profesores.data[0]);
  }, [profesores]);
  return (
    <>
      <div className="profesorado">
        <h1>Profesorado</h1>
        <div></div>
      </div>
    </>
  );
};

export default Profesorado;
