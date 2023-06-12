import { useForm } from "react-hook-form";
import { getMisAlumns } from "../../service/API_proyect/user.service";
import PositionCard from "../PositionCard/PositionCard";
import "./CrearNota.css";
import React, { useEffect, useState } from "react";
import { createNota } from "../../service/API_proyect/notas.service";

const CrearNota = () => {
  const [alumns, setAlumns] = useState({ data: { alumn: [] } });
  const [alumnCurrent, setAlumnCurrent] = useState("");
  const { register, handleSubmit } = useForm();
  const [send, setSend] = useState(false);

  const formSubmit = async (FormData) => {
    setSend(true);
    const data = { ...FormData, alumn: alumnCurrent };
    await createNota(data);
    setSend(false);
  };

  useEffect(() => {
    (async () => {
      setAlumns(await getMisAlumns());
    })();
  }, []);

  useEffect(() => {
    console.log(alumnCurrent);
  }, [alumnCurrent]);

  useEffect(() => {
    console.log(alumns?.data?.alumn);
  }, [alumns]);
  return (
    <div className="crearnota">
      <h1 className="tituloCrearNota">Crear Nota</h1>
      <h2 className="negro">
        {alumns?.data?.name} {alumns?.data?.curso} {alumns?.data?.year}
      </h2>
      <div>
        {alumns?.data?.alumn?.length > 0 ? (
          <PositionCard data={alumns?.data?.alumn} setAlumn={setAlumnCurrent} />
        ) : (
          <p className="negro">cargando</p>
        )}
      </div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="name-container1 form-group">
        <label htmlFor="custom-input" className="custom-placeholder">
            <p className="pCrearNota">Agregar nota al alumno</p>
          </label>
          <input
            className="input-nota"
            type="text"
            id="nota"
            name="nota"
            autoComplete="false"
            {...register("nota", { required: true })}
          />

          <div className="btn-container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#001d86" : "#001d86b1" }}
            >
              Crear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CrearNota;
