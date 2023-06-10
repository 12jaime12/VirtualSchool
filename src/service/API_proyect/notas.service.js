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
