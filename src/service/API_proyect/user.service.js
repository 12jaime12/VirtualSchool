import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";
//----------------------------------------------register-----------------------------
export const registerUser = async (formData) => {
  return API.post("/user/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------------------------------verify code------------------------------
export const checkCode = async (formData, id) => {
  return API.post(`/user/confirm/${id}`, formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! -------------------------login---------------------------------------
export const login = async (formData) => {
  return API.post("/user/login", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------------autologin-----------------------
export const autoLoginUser = async (formData) => {
  return API.post("/user/login/autologin", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------------forgot-password-----------------
export const forgotPasswordUser = async (formData) => {
  return API.patch("/user/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//-------------------------update-User-----------------------
export const updateUser = async (formData) => {
  return API.patch("/users/update/update", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//-------------------get curso----------------
export const getCursoActual = async () => {
  return API.get("/user/getCurso", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//----------------get-all-porfesores--------

export const getAllProfesores = async () => {
  return API.get("/user/getAllTeacher", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
