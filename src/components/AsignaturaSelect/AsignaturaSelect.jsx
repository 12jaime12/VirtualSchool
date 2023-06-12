import React, { useEffect, useState } from "react";
import { getById } from "../../service/API_proyect/asignaturas.service";
import { useParams } from "react-router-dom";
import "./AsignaturaSelect.css";
const AsignaturaSelect = () => {
  const [asignatura, setAsignatura] = useState({ data: [] });
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setAsignatura(await getById(id));
    })();
  }, []);
  useEffect(() => {
    console.log(asignatura?.data);
  }, [asignatura]);
  return (
    <div className="asignaturaselect">
      <h1>
        {asignatura?.data.name} {asignatura?.data.curso} {asignatura?.data.year}
      </h1>
    </div>
  );
};

export default AsignaturaSelect;
