import React, { useEffect, useState } from "react";
import { getCursoActual } from "../../service/API_proyect/user.service";
import { SwitchHorarios } from "../Switchs/Switchs";

export const Horario = () => {
  const [curso, setCurso] = useState({});

  useEffect(() => {
    (async () => {
      setCurso(await getCursoActual());
    })();
  }, []);

  return <SwitchHorarios curso={curso.data} />;
};
