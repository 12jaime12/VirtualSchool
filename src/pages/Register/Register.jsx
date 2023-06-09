import "./Register.css";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import UploadFile from "../../components/UploadFile/UploadFile";
import useRegisterError from "../../hooks/useRegisterError";
import { registerUser } from "../../service/API_proyect/user.service";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const Register = () => {
  const { bridgeData } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [registerOk, setRegisterOk] = useState(false);
  const [send, setSend] = useState(false);

  const formSubmit = async (formData) => {
    const inputfile = document.getElementById("file-upload").files;
    let customFormData;

    if (inputfile.length !== 0) {
      customFormData = { ...formData, image: inputfile[0] };
      setSend(true);
      console.log(customFormData);
      setRes(await registerUser(customFormData));
      setSend(false);
    } else {
      customFormData = { ...formData };
      setSend(true);
      console.log(customFormData);
      setRes(await registerUser(customFormData));
      setSend(false);
    }
  };

  useEffect(() => {
    useRegisterError(res, setRegisterOk);
    bridgeData("ALLUSER");
  }, [res]);

  if (registerOk) {
    return <Navigate to="/verifyCode" />;
  }

  return (
    <>
    <div className="fondo fondoRegister">
    <div className="form-wrap">
        <h1>REGÍSTRATE</h1>
        <p>Es necesario tener una cuenta para acceder a tu Virtual School.</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
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
              {...register("password", { required: true })}
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
              {...register("email", { required: true })}
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
                {...register("gender", { required: true })}
              />
              <label htmlFor="masculino" className="label-radio masculino">
                Masculino
              </label>
              <input
                type="radio"
                name="sexo"
                id="femenino"
                value="femenino"
                {...register("gender", { required: true })}
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
              style={{ background: send ? "#001d86" : "#001d86b1" }}
            >
              Registrar
            </button>
          </div>
          <p className="bottom-text">
            <small>
              Haciendo click en el botón de Registrar, estás de acuerdo con{" "}
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
    </div>
    </>
  );
};

export default Register;
