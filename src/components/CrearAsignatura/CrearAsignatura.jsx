import React, { useEffect, useRef, useState } from "react";
import "./CrearAsignatura.css";
import { useForm } from "react-hook-form";
import { createAsignatura } from "../../service/API_proyect/asignaturas.service";
import Swal from "sweetalert2";

const CrearAsignatura = () => {
  const { register, handleSubmit } = useForm();
  const [send, setSend] = useState(false);
  const [res, setRes] = useState({});

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await createAsignatura(formData));

    setSend(false);
  };

  useEffect(() => {
    console.log(res);
    if (res?.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Asignatura Creada",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [res]);

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
              className="input-asig"
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
                className="input-asig"
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
                className="input-asig"
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
    </>
  );
};

export default CrearAsignatura;
