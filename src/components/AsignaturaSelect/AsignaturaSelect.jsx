import React, { useEffect, useState } from "react";
import {
  addAlumn,
  addNewTeacher,
  getById,
} from "../../service/API_proyect/asignaturas.service";
import { useParams } from "react-router-dom";
import "./AsignaturaSelect.css";
import {
  getAllAlumn,
  getAllProfesores,
} from "../../service/API_proyect/user.service";
import PositionCard from "../PositionCard/PositionCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { paginacion } from "../../util/paginacion";
import Swal from "sweetalert2";

const AsignaturaSelect = () => {
  const [asignatura, setAsignatura] = useState({ data: [] });
  const [alumns, setAlumns] = useState({ data: [] });
  const [teachers, setTeachers] = useState({ data: { teacher: [] } });
  const [teacherCurrent, setTeacherCurrent] = useState("");
  const [numeroP, setNumeroP] = useState(0);
  const [filterData, setFilterData] = useState([]);
  const { id } = useParams();
  const [resTeacher, setResTeacher] = useState({});
  const [resAlumn, setResAlumn] = useState({});

  const handleChange = (e, value) => {
    const tope = value * 3;
    const inicio = tope - 3;
    const data = alumns.data.slice(inicio, tope);
    setFilterData(data);
  };
  const añadirAlumn = async (idalumn) => {
    console.log(idalumn._id);
    const formData = { idAlumn: idalumn._id };
    setResAlumn(await addAlumn(id, formData));
  };
  const addTeacher = async () => {
    const formData = { idteacher: teacherCurrent };
    setResTeacher(await addNewTeacher(id, formData));
  };
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
    console.log(teachers?.data?.teacher);
  }, [teachers]);
  useEffect(() => {
    console.log(alumns?.data);
    setNumeroP(paginacion(alumns?.data, 3));
  }, [alumns]);

  useEffect(() => {
    console.log(resTeacher);
    if (resTeacher?.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Profesor Añadido",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [resTeacher]);

  useEffect(() => {
    console.log(resAlumn);
    if (resAlumn?.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Alumno Añadido",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [resAlumn]);
  return (
    <div className="asignaturaselect">
      <h1>
        {asignatura?.data.name} {asignatura?.data.curso} {asignatura?.data.year}
      </h1>
      <div className="flexWrapProfesores">
        {JSON.stringify(asignatura?.data.teacher) == "[]" && (
          <div className="carruselProfesores">
            <figure>
              <h3 className="negro">Profesores</h3>
              <PositionCard
                data={teachers?.data}
                setAlumn={setTeacherCurrent}
              />
            </figure>
            <button onClick={() => addTeacher()}>Añadir Profesor</button>
          </div>
        )}
      </div>
      <div className="flexAlumns">
        <h3 className="negro">Alumnos</h3>
        <div className="flexWrapAlumns">
          {filterData.length > 0
            ? filterData?.map((element) => (
                <figure key={element._id} className="figureAlumns">
                  <img src={element.image} alt={element.name} />
                  <p className="negro">{element.name}</p>
                  <button onClick={() => añadirAlumn(element)}>
                    Añadir Alumno
                  </button>
                </figure>
              ))
            : alumns.data.slice(0, 3).map((element) => (
                <figure key={element._id} className="figureAlumns">
                  <img src={element.image} alt={element.name} />
                  <p className="negro">{element.name}</p>
                  <button onClick={() => añadirAlumn(element)}>
                    Añadir Alumno
                  </button>
                </figure>
              ))}
        </div>
        <Stack spacing={2}>
          <Pagination count={numeroP} onChange={handleChange} />
        </Stack>
      </div>
    </div>
  );
};

export default AsignaturaSelect;
