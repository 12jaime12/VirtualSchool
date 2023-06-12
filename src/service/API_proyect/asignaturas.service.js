import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";
//---------------get-all-asignaturas-alumn---------------------
export const getAllAsignaturasAlumn = async () => {
  return API.get("/asignaturas/getAllAsignaturasAlumn", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//----------------get-notas-mis-alumns-------------
export const getNotasMisAlumns = async () => {
  return API.get("/asignaturas/alumns", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------create-asignatura-----------------
export const createAsignatura = async (formData) => {
  return API.post("/asignaturas/create", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//-------------get-asignaturas-------------------
export const getAsignaturas = async () => {
  return API.get("/asignaturas/getAllAsignaturas", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//------------get-by-id------------------------
export const getById = async (id) => {
  return API.get(`/asignaturas/getById/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
