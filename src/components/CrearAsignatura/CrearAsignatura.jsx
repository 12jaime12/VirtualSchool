import React from "react";
import "./CrearAsignatura.css";
import { useForm } from "react-hook-form";
const CrearAsignatura = () => {
  const { register, handleSubmit } = useForm();

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
          <p className="buttom-text">
            <small>
              ¿No recuerdas tu contraseña?
              <Link to="/forgotpassword" className="anchorCustom">
                {" "}
                Cambio de contraseña
              </Link>
            </small>
          </p>
        </form>
      </div>
      <div className="footer-form">
        <p className="parrafoLogin">
          ¿Aún no estás registrado?<Link to="/register"> Regístrate aquí</Link>
        </p>
      </div>
    </>
  );
};

export default CrearAsignatura;
