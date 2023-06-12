import React, { useEffect, useState } from "react";
import "./AñadirAlumnoProfesor.css";
import { getAsignaturas } from "../../service/API_proyect/asignaturas.service";
import { useNavigate } from "react-router-dom";
const AñadirAlumnoProfesor = () => {
  const [asignaturas, setAsignaturas] = useState({ data: [] });
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      setAsignaturas(await getAsignaturas());
    })();
  }, []);

  useEffect(() => {
    console.log(asignaturas?.data);
  }, [asignaturas]);
  return (
    <>
      <div className="añadiralumnoprofesor">
        <h1>Añadir Alumnos y Profesores</h1>
        <div>
          {asignaturas?.data?.map((element) => (
            <figure
              key={element._id}
              className="cartaAsignatura"
              onClick={() =>
                navigate(`/dashboard/AddAlumnTeacher/${element._id}`)
              }
            >
              <h2 className="negro">
                {element.name} {element.curso} {element.year}
              </h2>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default AñadirAlumnoProfesor;
