import { API } from "./service.config";
//------------------get-notas-curso-actual-------
export const getNotasAñoActual = async () => {
  return API.get("/notas/getNotasAnnoActual")
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
