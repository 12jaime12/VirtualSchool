import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";
//------------------get-notas-curso-actual-------
export const getNotasAñoActual = async () => {
  return API.get("/notas/getNotasAnnoActual", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//------------------get-notas-curso-actual-------
export const getNotasCurso = async (curso) => {
  return API.get(`/asignaturas/curso/${curso}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//------------------get-one-nota-------------------
export const getOneNota = async (asig) => {
  return API.get(`/notas/oneNota/${asig}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//-----------------create-nota----------------------
export const createNota = async (formData) => {
  return API.post("/notas/create", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------get-mis-notas-------------------
export const getMisNotas = async () => {
  return API.get("/notas/getMisNotas", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------delete-notas----------------
export const deleteNotas = async (id) => {
  return API.delete(`/notas/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
