import React, { useEffect, useState } from "react";
import { getById } from "../../service/API_proyect/asignaturas.service";
import { useParams } from "react-router-dom";
import "./AsignaturaSelect.css";
import {
  getAllAlumn,
  getAllProfesores,
} from "../../service/API_proyect/user.service";
import PositionCard from "../PositionCard/PositionCard";
const AsignaturaSelect = () => {
  const [asignatura, setAsignatura] = useState({ data: [] });
  const [alumns, setAlumns] = useState({ data: [] });
  const [teachers, setTeachers] = useState({ data: [] });
  const [alumnCurrent, setAlumnCurrent] = useState("");
  const { id } = useParams();

  const anterior = () => {};
  const siguiente = () => {};
  const añadirAlumn = () => {};
  useEffect(() => {
    (async () => {
      setAsignatura(await getById(id));
      setTeachers(await getAllProfesores());
      setAlumns(await getAllAlumn());
    })();
  }, []);
  useEffect(() => {
    console.log(asignatura?.data);
  }, [asignatura]);
  useEffect(() => {
    console.log(teachers?.data);
  }, [teachers]);
  useEffect(() => {
    console.log(alumns?.data);
  }, [alumns]);

  return (
    <div className="asignaturaselect">
      <h1>
        {asignatura?.data.name} {asignatura?.data.curso} {asignatura?.data.year}
      </h1>
      <div>
        {!asignatura?.data.teacher == [] && (
          <div>
            <figure>
              <h3 className="negro">Profesores</h3>
              <PositionCard data={teachers?.data} setAlumn={setAlumnCurrent} />
            </figure>
            <button>Añádir Profesor</button>
          </div>
        )}
      </div>
      <div className="flexAlumns">
        <h3 className="negro">Alumnos</h3>
        <div className="flexWrapAlumns">
          {alumns?.data?.map((element) => (
            <figure key={element._id} className="figureAlumns">
              <img src={element.image} alt={element.name} />
              <p className="negro">{element.name}</p>
              <button onClick={() => añadirAlumn()}>Añadir Alumno</button>
            </figure>
          ))}
        </div>
        <div>
          <button onClick={() => anterior()}>Anterior</button>
          <button onClick={() => siguiente()}>Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default AsignaturaSelect;
