import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import useChangePasswordError from "../../hooks/useChangePasswordError";
import { changePassword } from "../../service/API_proyect/user.service";

const ChangePassword = () => {
  const { setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [changePasswordOk, setChangePasswordOk] = useState(false);
  //! --------- funcion que controla el formulario-----------------------
  const formSubmit = async (formData) => {
    const { password, newPassword, confirmPassword } = formData;
    if (newPassword == confirmPassword) {
      Swal.fire({
        title: "Are you sure you want to change your password?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(73, 193, 162)",
        cancelButtonColor: "#d33",
        confirmButtonText: "YES",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setSend(true);
          setRes(await changePassword({ password, newPassword }));
          setSend(false);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: " New Password don't match witch confirmation password❎.",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };
  //! --------------- USEEFFECT  que controla la gestion de errores ----------------------
  useEffect(() => {
    useChangePasswordError(res, setChangePasswordOk, setUser);
  }, [res]);

  //! ---------------- LOS CONDICIONALES CON LOS ESTADOS DE NAVEGACION --------------------

  if (changePasswordOk) {
    //! no utilizamos el logout aunque no pasaria nada. No lo utlizo porque da warning
    //! el setUser y el borrado del localStorage lo hacemos mejor en el useError correspondiente de la pagina
    //logout();
    //setUser(() => null);
    //localStorage.removeItem("user");
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div className="form-wrap">
        <h1>Cambia tu contraseña</h1>
        <p>Por favor, introduce tu antigua contraseña y tu nueva contraseña</p>
        <form onSubmit={handleSubmit(formSubmit)}>
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
              Antigua contraseña
            </label>
          </div>
          <div className="newPassword_container form-group">
            <input
              className="input_user"
              type="password"
              id="newPassword"
              name="newPassword"
              autoComplete="false"
              {...register("newPassword", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Nueva contraseña
            </label>
          </div>
          <div className="confirmPassword_container form-group">
            <input
              className="input_user"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="false"
              {...register("confirmPassword", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Confirmar nueva contraseña
            </label>
          </div>
          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#001d86" : "#001d86b1" }}
            >
              Cambiar Contraseña
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
