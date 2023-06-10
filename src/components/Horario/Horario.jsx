import React, { useEffect, useState } from "react";
import { SwitchHorarios } from "../Switchs";
import { getCursoActual } from "../../service/API_proyect/user.service";

export const Horario = () => {
  const [curso, setCurso] = useState({});

  useEffect(() => {
    (async () => {
      setCurso(await getCursoActual());
    })();
  }, []);

  return <SwitchHorarios curso={curso.data} />;
};
