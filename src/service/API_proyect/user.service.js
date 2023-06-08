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
