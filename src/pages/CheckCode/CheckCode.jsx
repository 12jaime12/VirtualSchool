import { checkCode } from "../../service/API_proyect/user.service";
import "./CheckCode.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/authContext";
import React, { useEffect, useState } from "react";
import useCheckCodeError from "../../hooks/useCheckCode";

const CheckCode = () => {
  const { allUser, login, setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [okCheck, setOkCheck] = useState(false);

  const formSubmit = async (formData) => {
    const userlocal = localStorage.getItem("user");

    if (userlocal == null) {
      const custFormData = {
        code: parseInt(formData.code),
      };
      console.log(custFormData);
      const id = allUser.data.user._id;
      setSend(true);
      console.log(id);
      setRes(await checkCode(custFormData, id));
      setSend(false);
    } else {
      const parse = JSON.parse(userlocal);
      const custFormData = {
        code: parseInt(formData.code),
      };
      const id = parse._id;
      setSend(true);
      console.log(id);
      setRes(await checkCode(custFormData, id));
      setSend(false);
    }
  };
  useEffect(() => {
    useCheckCodeError(res, setDeleteUser, setOkCheck);
  }, [res]);

  if (deleteUser) {
    return <Navigate to="/register" />;
  }
  if (okCheck) {
    if (!localStorage.getItem("user")) {
      useAutoLogin(allUser, userlogin);
    } else {
      const currentUser = localStorage.getItem("user");
      const parseCurrentUser = JSON.parse(currentUser);
      const customUser = {
        ...parseCurrentUser,
        check: true,
      };
      const customUserString = JSON.stringify(customUser);

      setUser(customUser);
      localStorage.setItem("user", customUserString);

      return <Navigate to="/dashboard" />;
    }
  }
  return (
    <>
      <div className="form-wrap">
        <h1>Verifica tu código de registro</h1>
        <p>Escribe el código enviado a tu correo electrónico</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("code", { required: false })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Código de registro
            </label>
          </div>

          <div className="btn_container">
            <button
              id="btnCheck"
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#001d86" : "#001d86b1" }}
            >
              Código de verificación
            </button>
          </div>
          <div className="btn_container">
            <button
              id="btnResend"
              className="btn"
              disabled={send}
              style={{ background: send ? "#001d86" : "#001d86b1" }}
              onClick={() => handleReSend()}
            >
              Reenviar código
            </button>
          </div>

          <p className="bottom-text">
            <small>
              Si el código introducido no es correcto ❌, su usuario será
              eliminado de la base de datos y tendrá que registrarse de nuevo.{" "}
            </small>
          </p>
        </form>
      </div>
    </>
  );
};

export default CheckCode;
