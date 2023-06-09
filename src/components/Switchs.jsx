import React, { useEffect } from "react";
import Horario1 from "./HorarioEscolar/Horario1/Horario1";
import Horario2 from "./HorarioEscolar/Horario2/Horario2";
import Horario3 from "./HorarioEscolar/Horario3/Horario3";
import Horario4 from "./HorarioEscolar/Horario4/Horario4";

export const SwitchHorarios = ({ curso }) => {
  useEffect(() => {
    console.log("me monto");
    console.log(curso);
  }, []);

  switch (curso) {
    case "1ESO":
      console.log("entro 1");
      return <Horario1 />;

    case "2ESO":
      console.log("entro 2");
      return <Horario2 />;

    case "3ESO":
      console.log("entro 3");
      return <Horario3 />;

    case "4ESO":
      console.log("entro 4");
      return <Horario4 />;

    default:
      return <Horario1 />;
  }
};
