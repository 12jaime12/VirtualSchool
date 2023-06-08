import "./Login.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/authContext";
import { Link, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { login } from "../../service/API_proyect/user.service";
import useLoginError from "../../hooks/useLoginError";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [loginOk, setLoginOk] = useState(false);
  const { userlogin } = useAuth();

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await login(formData));
    setSend(false);
  };

  useEffect(() => {
    useLoginError(res, setLoginOk, userlogin);
  }, [res]);

  if (loginOk) {
    if (res.data.user.check == false) {
      return <Navigate to="/verifyCode" />;
    } else {
      return <Navigate to="/dashboard" />;
    }
  }

  return (
    <>
      <div className="form-container">
        <h1>Acceso</h1>
        <p>Bienvenidos a Virtual School</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="email-container form-group">
            <input
              className="input-user"
              type="email"
              id="name"
              name="name"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Email
            </label>
            <div className="password-container form-group">
              <input
                className="input-user"
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register("password", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                Contraseña
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
                Cambio de contraseña
              </Link>
            </small>
          </p>
        </form>
      </div>
      <div className="footer-form">
        <p className="parrafoLogin">
          ¿Aún no estás registrado?<Link to="/register">Registrate aquí</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
