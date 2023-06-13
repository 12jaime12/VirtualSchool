import "./FormProfile.css";
import useUpdateError from "../../hooks/useUpdateError";
import { useAuth } from "../../contexts/authContext";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FigureUser from "../FigureUser/FigureUser";
import { useForm } from "react-hook-form";

import { updateUser } from "../../service/API_proyect/user.service";
import Uploadfile from "../UploadFile/UploadFile";

const FormProfile = () => {
  const { setUser, user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [changeProfileDataOk, setChangeProfileDataOk] = useState(false);
  const defaultData = {
    name: user?.user,
  };
  const formSubmit = async (formData) => {
    Swal.fire({
      title: "Estás seguro que quieres cambiar tus datos de perfil?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#49c1a2",
      cancelButtonColor: "#d33",
      confirmButtonText: "yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const inputfile = document.getElementById("file-upload").file;
        let customForData;
        if (inputfile.length !== 0) {
          customForData = { ...formData, image: inputfile[0] };
          setSend(true);
          setRes(await updateUser(customForData));
          setSend(false);
        } else {
          customForData = { ...formData };
          setSend(true);
          setRes(await updateUser(customForData));
          setSend(false);
        }
      }
    });
  };
  useEffect(() => {
    useUpdateError(res, setChangeProfileDataOk, setUser);
  }, [res]);

  if (changeProfileDataOk) {
    return <Navigate to="login" />;
  }
  return (
    <>
      <div className="containerProfile">
      <h1>Cambia tus datos de perfil</h1>
        <div className="containerPhotoUser">
          <FigureUser user={user} />
        </div>
        <div className="form-Wrap formProfile">
    
          <h3>Por favor, introduce tus nuevos datos de perfil</h3>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="containerUser form-group">
              <input
                className="input-user"
                type="text"
                id="name"
                autoComplete="false"
                defaultValue={defaultData?.name}
                {...register("name", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                Nombre de usuario
              </label>
            </div>
            <Uploadfile />
            <div className="btn_container">
              <button
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#001d86" : "#001d86b1" }}
              >
                Cambiar datos de usuario
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default FormProfile;
