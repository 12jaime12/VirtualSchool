import React, { useEffect, useState } from "react";
import "./CrearAsignatura.css";
import { useForm } from "react-hook-form";
import { createAsignatura } from "../../service/API_proyect/asignaturas.service";
const CrearAsignatura = () => {
  const { register, handleSubmit } = useForm();
  //const [res, setRes] = useState({});
  const [send, setSend] = useState(false);

  const formSubmit = async (formData) => {
    setSend(true);
    await createAsignatura(formData);
    setSend(false);
  };

  // useEffect(() => {
  //   if (res?.status === 200) {
  //     return <p>asignatura añadida</p>;
  //   }
  // }, [res]);
  return (
    <>
      <div className="crearasignatura">
        <h1>Crear Asignatura</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="name-container form-group">
            <input
              className="input-user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Nombre
            </label>
            <div className="year-container form-group">
              <input
                className="input-user"
                type="number"
                id="year"
                name="year"
                autoComplete="false"
                {...register("year", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                Año
              </label>
            </div>
            <div className="curso-container form-group">
              <input
                className="input-user"
                type="text"
                id="curso"
                name="curso"
                autoComplete="false"
                {...register("curso", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                Curso
              </label>
            </div>
          </div>

          <div className="btn-container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#001d86" : "#001d86b1" }}
            >
              Acceso
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CrearAsignatura;
