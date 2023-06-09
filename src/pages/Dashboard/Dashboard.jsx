import "./Dashboard.css";

import React, { useEffect, useState } from "react";

import { getCursoActual } from "../../service/API_proyect/user.service";
import { SwitchHorarios } from "../../components/Switchs";

const Dashboard = () => {
  const [curso, setCurso] = useState({});

  useEffect(() => {
    (async () => {
      setCurso(await getCursoActual());
    })();
  }, []);

  useEffect(() => {
    console.log(curso);
  }, [curso]);

  return (
    <>
      <div className="dashboard">
        <div className="optionsD">
          {/* {(() => {
            switch (curso) {
              case "alumn":
                return <Horario1 />;
                break;
              case "teacher":
                return <Horario2 />;
                break;
              case "admin":
                return <Horario3 />;
                break;
              default:
                return <Horario1 />;
            }
          })()} */}
        </div>
        <div className="contentD">
          <SwitchHorarios curso={curso.data} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
