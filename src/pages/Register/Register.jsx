import "./Register.css"

import UploadFile from "../../components/UploadFile/UploadFile"

import React from 'react'

const Register = () => {
  return (
    <div>Register</div>
  )

return (
    <>
      <div className="form-wrap">
        <h1>Acceder</h1>
        <p>Regístrate para acceder a tu VirtualSchool.</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...Register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              usuario
            </label>
          </div>
          
          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...Register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              contraseña
            </label>
          </div>

          <div className="email_container form-group">
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...Register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>

            <div className="sexo">
              <input
                type="radio"
                name="sexo"
                id="masculino"
                value="masculino"
                {...Register("gender", { required: true })}
              />
              <label htmlFor="masculino" className="label-radio masculino">
                Masculino
              </label>
              <input
                type="radio"
                name="sexo"
                id="femenino"
                value="femenino"
                {...Register("gender",{ required: true })}
              />
              <label htmlFor="femenino" className="label-radio femenino">
                Femenino
              </label>
            </div>
            
            <UploadFile />
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#2f7a67" }}
            >
              Registrar
            </button>
          </div>
          <p className="bottom-text">
            <small>
              Haciendo click en el botón de Acceder, estás de acuerdo con {" "}
              <Link className="anchorCustom">Términos y Condiciones</Link> y{" "}
              <Link className="anchorCustom">Política de Privacidad</Link>.
            </small>
          </p>
        </form>
      </div>
      <div className="footerForm">
        <p className="parrafoLogin">
          ¿Ya tienes cuenta? <Link to="/login">Accede a tu cuenta aquí.</Link>
        </p>
      </div>
    </>
  );
};

export default Register