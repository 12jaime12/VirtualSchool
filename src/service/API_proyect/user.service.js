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
export const checkCode = async (formData) => {
  return API.post("/users/check", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! -------------------------login---------------------------------------
export const login = async (formData) => {
  return API.post("/users/login", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
