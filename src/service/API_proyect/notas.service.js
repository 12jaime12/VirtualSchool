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
