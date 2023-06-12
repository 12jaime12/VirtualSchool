import { getNotasMisAlumns } from "../../service/API_proyect/asignaturas.service";
import {
  deleteNotas,
  getMisNotas,
} from "../../service/API_proyect/notas.service";
import PositionCard from "../PositionCard/PositionCard";
import "./BorrarNota.css";
import React, { useEffect, useState } from "react";

const BorrarNota = () => {
  const [notas, setNotas] = useState({ data: { notasAlumns: [] } });
  const [alumnCurrent, setAlumnCurrent] = useState("");

  const borrar = async () => {
    await deleteNotas(alumnCurrent);
  };

  useEffect(() => {
    (async () => {
      setNotas(await getNotasMisAlumns());
    })();
  }, []);

  useEffect(() => {
    console.log(alumnCurrent);
  }, [alumnCurrent]);

  useEffect(() => {
    console.log(notas?.data.notasAlumns);
  }, [notas]);
  return (
    <>
      <div className="borrarnota">
        <h1>Borrar Nota</h1>
        <div>
          <p className="negro">
            {notas?.data?.name} {notas?.data?.curso}
          </p>
        </div>
        <div>
          <PositionCard
            data={notas?.data.notasAlumns}
            setAlumn={setAlumnCurrent}
          />
        </div>
        <button onClick={() => borrar()}>Borrar</button>
      </div>
    </>
  );
};

export default BorrarNota;
